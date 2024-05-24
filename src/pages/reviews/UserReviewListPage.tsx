import { useEffect } from "react";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { TabFilterList } from "../../components/game/TabFilterList";
import { useGetReviewDetailQuery } from "../../hooks/reviews/useGetReviewDetailQuery";
import { useGetUserDataQuery } from "../../hooks/user/useGetUserDataQuery";
import useUserDataStore from "../../store/useUserDataStore";
import { NoListFoundMessageBox } from "../../components/common/NoListFoundMessageBox";
import { UserReviewItem } from "../../components/reviews/UserReviewItem";

export const UserReviewListPage = () => {
  const { userId } = useUserDataStore();

  const { data: userData, refetch: userDataRefetch } =
    useGetUserDataQuery(userId);
  const ratingId = userData?.data?.rating?.id
    ? Number(userData.data.rating.id)
    : null;
  const { data: reviewData, refetch: reviewDataRefetch } =
    useGetReviewDetailQuery(ratingId);

  useEffect(() => {
    userDataRefetch();
    reviewDataRefetch();
  }, [ratingId, userData, reviewData]);
  return (
    <section className="laptop:mt-[17px] laptop:mb-[55px] mobile:my-0">
      <NavigateToPrevContainer children="내 리뷰 조회" />
      <div className="space-y-[34px] laptop:w-[593px]     mobile:w-full mx-auto  ">
        <div className="flex  justify-between">
          <h1 className="w-[351px] text-[26px] font-bold">내 리뷰 조회</h1>
          <TabFilterList />
        </div>
        <div className="h-[653px] p-3 bg-[#FBFBFB] space-y-[15px] overflow-y-auto border border-gray-200 rounded-lg">
          {reviewData && reviewData?.data?.reviews.length !== 0 ? (
            reviewData?.data?.reviews.map((review: any) => {
              return <UserReviewItem review={review} />;
            })
          ) : (
            <NoListFoundMessageBox
              title="작성된 리뷰가 없습니다."
              content="경기에 참여하고 리뷰를 받아보세요!"
            />
          )}
        </div>
      </div>
    </section>
  );
};
