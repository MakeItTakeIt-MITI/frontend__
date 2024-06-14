import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { CourtDetailMap } from "../../../components/naver/CourtDetailMap";
import { getCourtDetailQuery } from "../../../hooks/courts/getCourtDetailQuery";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useUserDataStore from "../../../store/useUserDataStore";
import { ReviewGameDetailBox } from "../../../components/reviews/ReviewGameDetailBox";
import { GuestDetailContainer } from "../../../components/reviews/GuestDetailContainer";
import { useUserInfoQuery } from "../../../hooks/games/useUserInfoQuery";
import { ReviewStars } from "../../../components/reviews/ReviewStars";
import { useGetMyWrittenReviewDetailQuery } from "../../../hooks/reviews/useGetMyWrittenReviewDetailQuery";

export const ReviewDetailByUser = () => {
  const { userId } = useUserDataStore();
  const { reviewId } = useParams();

  console.log(userId);

  const reviewIdParam = Number(reviewId);
  const { data: courtDetailData, refetch: refetchCourtDetailData } =
    getCourtDetailQuery(reviewIdParam);

  const { data: myReviewDetailData } = useGetMyWrittenReviewDetailQuery(
    userId,
    reviewIdParam
  );

  const { data: userData } = useUserInfoQuery(userId);

  useEffect(() => {
    refetchCourtDetailData();
  }, [courtDetailData]);

  return (
    <section className="laptop:my-[20px] mobile:mb-16 ">
      <NavigateToPrevContainer children="내 리뷰 상세" />

      <div className="laptop:w-[981px] laptop:h-[745px]  mx-auto space-y-[32px]">
        <h1 className="tablet:block mobile:hidden text-[26px] font-bold px-3">
          작성 리뷰 상세
        </h1>
        <div className="flex laptop:flex-row mobile:flex-col gap-5 laptop:px-3 mobile:px-1  ">
          <div className="laptop:max-w-[431px]  mobile:w-full gap-[20px] w-full flex flex-col">
            <CourtDetailMap courtData={courtDetailData} />
            <div className="space-y-2 p-3 laptop:border border-gray-200 rounded-lg">
              <ReviewGameDetailBox reviewData={myReviewDetailData} />
            </div>
          </div>
          <div className="laptop:w-[464px] space-y-3">
            <GuestDetailContainer
              reviewDetail={userData}
              reviewDetailData={myReviewDetailData}
            />
            <div className="w-full h-[270px] p-3 space-y-4 border border-gray-200 rounded-lg">
              <h4 className="font-bold">작성 리뷰</h4>
              <div className="space-y-[10px]">
                <h4 className="text-xs font-bold">평점</h4>
                <div className="w-full flex justify-center">
                  <ReviewStars reviewDetailData={myReviewDetailData} />
                </div>
              </div>
              <div className="space-y-[10px]">
                <h4 className="text-xs font-bold">한줄평</h4>
                <p className="text-[10px]">
                  {myReviewDetailData?.data.comment}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
