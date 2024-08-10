import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import useUserDataStore from "../../../store/_useUserDataStore";
import { useUserInfoQuery } from "../../../hooks/games/useUserInfoQuery";
import profileIcon from "../../../assets/svg/profile-icon.svg";
import { NotFoundPage } from "../NotFoundPage";
import {
  CustomerSupport,
  EditProfile,
  Faq,
  MyReviews,
  ReviewsAboutMe,
  SettlementDetails,
  TranscationHistory,
} from "../../../stories/QuickLink.stories";
import { useLogoutMutation } from "../../../hooks/auth/useLogoutMutation";
import useAuthStore from "../../../store/_useAuthStore";
import {
  FiveStars,
  FourAndHalfStars,
  FourStars,
  NoReviews,
  OneAndHalfStar,
  OneStar,
  ThreeAndHalfStars,
  ThreeStars,
  TwoAndHalfStars,
  TwoStars,
} from "../../../stories/Reviews.stories";
import { Link } from "react-router-dom";
import { ProfileSkeleton } from "../../../components/ui/skeleton/ProfileSkeleton";
import { ReviewRating } from "../../../components/ui/common/ReviewRating";
import { QuickLinkTitle } from "../../../components/ui/common/QuickLinkTitle";

export const Profile = () => {
  const { userId } = useUserDataStore();
  const { logout } = useAuthStore();

  const { data, isPending, isError } = useUserInfoQuery(userId);
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const { mutate: logoutMutate } = useLogoutMutation(
    accessToken,
    refreshToken,
    logout
  );

  const handleLogout = () => {
    logoutMutate();
  };

  const getRatingComponent = (rating: number) => {
    if (rating === 5) {
      return <ReviewRating {...FiveStars.args} />;
    } else if (rating >= 4.5 && rating < 5) {
      return <ReviewRating {...FourAndHalfStars.args} />;
    } else if (rating >= 4 && rating < 4.5) {
      return <ReviewRating {...FourStars.args} />;
    } else if (rating >= 3.5 && rating < 4) {
      return <ReviewRating {...ThreeAndHalfStars.args} />;
    } else if (rating >= 3 && rating < 3.5) {
      return <ReviewRating {...ThreeStars.args} />;
    } else if (rating >= 2.5 && rating < 3) {
      return <ReviewRating {...TwoAndHalfStars.args} />;
    } else if (rating >= 2 && rating < 2.5) {
      return <ReviewRating {...TwoStars.args} />;
    } else if (rating >= 1.5 && rating < 2) {
      return <ReviewRating {...OneAndHalfStar.args} />;
    } else if (rating >= 1 && rating < 1.5) {
      return <ReviewRating {...OneStar.args} />;
    } else if (rating > 0 && rating < 1) {
      return <ReviewRating {...NoReviews.args} />;
    } else {
      return null;
    }
  };

  if (isPending) {
    return <ProfileSkeleton />;
  }
  if (isError) {
    return <NotFoundPage />;
  }

  return (
    <section className="laptop:mt-[15px]  mobile:my-0 tablet:px-[80px] laptop:px-0 tablet:h-screen ">
      <NavigateToPrevContainer children="내 정보" />

      <div className="laptop:w-[500px] min-h-[700px] mobile:w-full mx-auto laptop:border border-gray-200  rounded-lg">
        <div className="p-5 flex   gap-3">
          <img src={profileIcon} alt="profile icon" />
          <div className="space-y-1">
            <h1 className="text-neutral-700 text-base font-bold leading-[18px]">
              {data?.data.nickname}
            </h1>
            <h2 className="text-neutral-400 text-xs font-medium font-['Pretendard'] leading-[14px]">
              {data?.data.email}
            </h2>
            <div className="flex gap-1 text-sm text-[#222] font-bold">
              {getRatingComponent(data?.data?.rating?.average_rating)}{" "}
              <span className="text-neutral-800 text-xs font-medium">
                {data?.data?.rating?.average_rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        <div className="w-[90%] h-[120px] flex flex-col justify-center gap-6  mx-auto  border border-gray-200 rounded-lg p-3">
          <div className="flex justify-between">
            <h2 className="text-zinc-800 text-sm font-normal  leading-[18px]">
              💰 나의 지갑
            </h2>
            <p className="text-zinc-800  font-bold leading-none">
              {data?.data.account.balance.toLocaleString("ko-KR", {
                style: "currency",
                currency: "KRW",
              })}{" "}
            </p>
          </div>
          <Link to="/user/transaction-history/payment">
            <button className="w-full h-11 rounded-lg bg-[#4065F5] text-white text-sm font-normal leading-tight">
              송금하기
            </button>
          </Link>
        </div>

        <hr className="w-full bg-[#fff] my-5" />

        <div className="space-y-[15px] p-5">
          <h2 className="text-black text-base font-bold">내 정보</h2>
          <div className="flex flex-col gap-5 px-[18px]">
            <button className="text-xs text-left" onClick={handleLogout}>
              로그어웃
            </button>
            <QuickLinkTitle {...ReviewsAboutMe.args} />
            <QuickLinkTitle {...MyReviews.args} />
            <QuickLinkTitle {...EditProfile.args} />
            <QuickLinkTitle {...SettlementDetails.args} />
            <QuickLinkTitle {...TranscationHistory.args} />
            <QuickLinkTitle {...Faq.args} />
            <QuickLinkTitle {...CustomerSupport.args} />
          </div>
        </div>
      </div>
    </section>
  );
};
