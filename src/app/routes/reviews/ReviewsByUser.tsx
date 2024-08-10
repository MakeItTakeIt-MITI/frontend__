import { useEffect, useState } from "react";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { TabFilterList } from "../../../components/game/TabFilterList";
import { useGetUserDataQuery } from "../../../hooks/user/useGetUserDataQuery";
import useUserDataStore from "../../../store/_useUserDataStore";
import { useGetUserWrittenReviewsQuery } from "../../../hooks/reviews/useGetUserWrittenReviewsQuery";
import MITI_logo from "../../../assets/MITI_logo.svg";
import { ReviewCard } from "../../../components/ui/cards/ReviewCard";
import { NoListFoundMessageBox } from "../../../components/ui/common/NoListFoundMessageBox";

export interface ReviewDataField {
  id: number;
  reviewee: string;
  rating: number;
  comment: string;
  review_type: string;
  game_title: string;
  game_status: string;
  reviewee_nickname?: string;
}

export const ReviewsByUser = () => {
  const [defaultTabName, setDefaultTabName] = useState("전체 보기");
  const [gameStatusQuery, setGameStatusQuery] = useState("");
  const [openList, setOpenList] = useState(false);
  const { userId } = useUserDataStore();

  const handleOpenList = () => setOpenList(!openList);
  const handleChangeTab = (tab: string) => setDefaultTabName(tab);

  const { data: userData, refetch: userDataRefetch } =
    useGetUserDataQuery(userId);
  const ratingId = userData?.data?.rating?.id
    ? Number(userData.data.rating.id)
    : null;
  const {
    data: reviewData,
    refetch: reviewDataRefetch,
    isLoading,
  } = useGetUserWrittenReviewsQuery(userId, gameStatusQuery);

  const tabList = [
    { id: 1, name: "호스트 리뷰" },
    { id: 2, name: "게스트 리뷰" },
    { id: 3, name: "전체 보기" },
  ];

  useEffect(() => {
    if (defaultTabName === "전체 보기") {
      setGameStatusQuery("");
    } else if (defaultTabName === "호스트 리뷰") {
      setGameStatusQuery("host_review");
    } else if (defaultTabName === "게스트 리뷰") {
      setGameStatusQuery("guest_review");
    }

    userDataRefetch();
    reviewDataRefetch();
  }, [
    ratingId,
    userData,
    reviewData,
    gameStatusQuery,
    defaultTabName,
    reviewDataRefetch,
    userDataRefetch,
  ]);

  return (
    <section className="laptop:mt-[17px] mobile:my-0 tablet:px-[80px] laptop:px-0 tablet:h-screen">
      <NavigateToPrevContainer
        children=" 작성 리뷰 조회
"
      />
      {isLoading ? (
        <div className="space-y-[34px] laptop:w-[593px]     mobile:w-full mx-auto  ">
          <div className="flex  justify-between">
            <TabFilterList
              tabList={tabList}
              defaultTabName={""}
              openList={openList}
              handleOpenList={handleOpenList}
              handleChangeTab={handleChangeTab}
            />{" "}
          </div>
          <div
            style={{ scrollbarWidth: "thin" }}
            className="h-[653px] flex items-center justify-center p-3 bg-[#FBFBFB] space-y-[15px] overflow-y-auto border border-gray-200 rounded-lg"
          >
            <img src={MITI_logo} alt="MITI logo" />
          </div>
        </div>
      ) : (
        <div className="tablet:space-y-[34px] tablet:w-[593px]     mobile:w-full mx-auto    ">
          <div className="flex  justify-between">
            <h1 className="tablet:w-[351px] mobile:hidden tablet:block  tablet:text-[26px] mobile:text-[22px] font-bold">
              작성 리뷰 조회
            </h1>
            <TabFilterList
              tabList={tabList}
              defaultTabName={defaultTabName}
              openList={openList}
              handleOpenList={handleOpenList}
              handleChangeTab={handleChangeTab}
            />{" "}
          </div>
          <div
            style={{ scrollbarWidth: "thin" }}
            className="h-[653px] p-3 bg-[#FBFBFB] space-y-[15px] overflow-y-auto border border-gray-200 rounded-lg"
          >
            {reviewData && reviewData?.data?.page_content.length !== 0 ? (
              reviewData?.data?.page_content.map((review: ReviewDataField) => {
                return (
                  <ReviewCard review={review} key={review?.id} isHost={true} />
                );
              })
            ) : (
              <NoListFoundMessageBox
                title="작성된 리뷰가 없습니다."
                content="경기에 참여하고 리뷰를 받아보세요!"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};
