import { useParams } from "react-router-dom";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import profileIcon from "../../../assets/game_detail_profile.svg";

import { useEffect, useState } from "react";
import { ReviewCheckBox } from "../../../components/reviews/ReviewCheckBox";
import { DisplayRatings } from "../../../components/reviews/DisplayRatings";
import { useGetGameDetailQuery } from "../../../hooks/games/useGetGameDetailQuery";
import { useWriteHostReviewMutation } from "../../../hooks/reviews/useWriteHostReviewMutation";
import { StarsRating } from "../../../components/ui/ratings/StarsRating";
import { GameReviewDetailSkeleton } from "../../../components/ui/skeleton/GameReviewDetailSkeleton";

interface PostReviewField {
  rating: number;
  comment: string;
}

export const WriteHostReview = () => {
  const [rating, setRating] = useState(0);
  const [checked, isChecked] = useState(false);
  const [inputtedReview, setInputtedReview] = useState("");

  const [selectedText, setSelectedText] = useState("");

  const { id } = useParams();

  const { data: gameDetailData, isPending } = useGetGameDetailQuery(Number(id));
  const { mutate } = useWriteHostReviewMutation(Number(id));

  const handleSubmitReview = () => {
    const dataField: PostReviewField = {
      comment: inputtedReview.length === 0 ? selectedText : inputtedReview,
      rating: rating,
    };
    mutate(dataField);
  };

  useEffect(() => {
    if (selectedText === "직접 작성") {
      setSelectedText(inputtedReview);
    }
  }, [selectedText, setSelectedText]);
  return (
    <>
      {isPending ? (
        <GameReviewDetailSkeleton />
      ) : (
        <section className="laptop:mt-[15px] laptop:mb-[223px] mobile:my-0">
          <NavigateToPrevContainer
            children="경기 리뷰 남기기
"
          />
          <div className="flex flex-col gap-[32px] max-w-[915px] mx-auto">
            <h1 className="text-[26px] font-bold">경기 리뷰 남기기</h1>
            <div className="space-x-[20px] flex">
              <div className="w-[431px] h-[201px] overflow-y-auto p-3 space-y-4  border border-gray-200 rounded-lg">
                <h4 className="font-bold">호스트 소개</h4>
                <div className="flex  gap-2.5">
                  <img src={profileIcon} alt="profile icon" />
                  <div className="text-sm font-bold text-[#444]">
                    <h4>{gameDetailData?.data?.host.nickname}</h4>
                    <DisplayRatings
                      gameDetailData={gameDetailData?.data}
                      isHost="true"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-[#666] text-sm">
                  {gameDetailData?.data.host.reviews.map(
                    (review: { comment: string; id: number }) => {
                      return <span key={review.id}>{review?.comment}</span>;
                    }
                  )}
                </div>
              </div>
              <div className="flex flex-col w-[464px] space-y-5">
                <div className="w-full h-[92px] p-3 border border-gray-200 rounded-lg ">
                  <h4 className="font-bold">호스트 평점</h4>
                  <div className="flex items-center justify-center">
                    <StarsRating rating={rating} setRating={setRating} />
                  </div>
                </div>
                <div className="h-[307px] w-full border border-gray-200 p-3 space-y-4">
                  <h4 className="font-bold">호스트 한줄평</h4>
                  <ReviewCheckBox
                    isHost={true}
                    checked={checked}
                    isChecked={isChecked}
                    setSelectedText={setSelectedText}
                  />
                  <textarea
                    onChange={(e) => setInputtedReview(e.target.value)}
                    style={{ resize: "none" }}
                    className="h-[100px] overflow-y-auto w-full rounded-lg p-3 border border-gray-200 text-[14px] text-[#444]"
                    placeholder="리뷰를 작성해주세요."
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleSubmitReview}
                  style={{
                    backgroundColor: rating > 0 ? "#4065F5" : "#F7F7F7",
                    color: rating > 0 ? "#fff" : "#969696",
                  }}
                  className="w-full h-[48px] bg-[#E8E8E8] rounded-lg  flex items-center justify-center"
                >
                  리뷰 작성하기
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
