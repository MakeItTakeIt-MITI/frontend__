import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import useUserDataStore from "../../store/useUserDataStore";
import { useUserInfoQuery } from "../../hooks/games/useUserInfoQuery";
import { LoadingPage } from "../LoadingPage";
import profileImg from "../../assets/profile_circle (1).svg";
import { Link } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage";
import { QuickLinkTitle } from "../../components/common/QuickLinkTitle";
import {
  CustomerSupport,
  EditProfile,
  Faq,
  MyReviews,
  ReviewsAboutMe,
} from "../../stories/QuickLink.stories";

export const UserMyPage = () => {
  const { userId } = useUserDataStore();
  const { data, isPending, isError } = useUserInfoQuery(userId);

  if (isPending) {
    return <LoadingPage />;
  }
  if (isError) {
    return <NotFoundPage />;
  }

  return (
    <section className="laptop:my-4 mobile:my-0">
      <NavigateToPrevContainer children="내 정보" />

      <div className="laptop:w-[500px] min-h-[735px]   mobile:w-full mx-auto laptop:border border-gray-300  laptop:py-10 laptop:px-12 mobile:p-4 rounded-lg">
        <div className="flex  flex-col mobile:py-6 mobile:p-0">
          {/* 사용자 정보 */}
          <div className="w-full tablet:p-0 mobile:p-4">
            <div className="flex items-center gap-1.5  ">
              <div>
                <img src={profileImg} alt="profile icon" />
              </div>
              <div className=" flex flex-col ">
                <p className="text-2xl font-bold">{data?.data.nickname}</p>
                <p className="text-[12px] text-[#969696]">{data?.data.email}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2  my-4 text-white tablet:p-0 mobile:p-4">
            <div className="flex  gap-2 h-[54px] ">
              <div className="bg-[#74BCFF] w-full py-1 px-2 rounded-lg">
                <p className="text-sm">⭐️ 리뷰 평점</p>
                <div className="text-right font-bold">
                  <span>4.5</span>
                  <span>/</span>
                  <span>5.0</span>
                </div>
              </div>
              <div className="bg-[#FFA674] w-full py-1 px-2 rounded-lg">
                <p className="text-sm">🎯 유저 레벨</p>
                <div className="text-right font-bold">
                  <span>상위 10%</span>
                  <span>-</span>
                  <span>MVP</span>
                </div>
              </div>
            </div>
            <div className="bg-[#FFC774] h-[54px] py-1 px-2 rounded-lg">
              <p className="text-sm">💰 나의 지갑</p>
              <p className="text-right font-bold">₩ 130,000</p>
            </div>
          </div>
          <hr className="w-full bg-[#fff] my-5" />
          {/* <EditProfile /> */}
          <div className="flex flex-col gap-4 tablet:p-0 mobile:p-4">
            <h2 className="text-[20px] font-bold">메뉴</h2>
            <QuickLinkTitle {...ReviewsAboutMe.args} />
            <QuickLinkTitle {...MyReviews.args} />
            <QuickLinkTitle {...EditProfile.args} />
            <QuickLinkTitle {...Faq.args} />
            <QuickLinkTitle {...CustomerSupport.args} />
          </div>
        </div>
      </div>
    </section>
  );
};
