import { useParams } from "react-router-dom";
import { useGetReviewDetailQuery } from "../../hooks/reviews/useGetReviewDetailQuery";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { GameReviewDetailSkeleton } from "../../components/skeleton/GameReviewDetailSkeleton";
import profileIcon from "../../assets/game_detail_profile.svg";

import { StarsRating } from "../../components/reviews/StarsRating";
import { useEffect, useState } from "react";
import { ReviewCheckBox } from "../../components/reviews/ReviewCheckBox";
import { DisplayRatings } from "../../components/reviews/DisplayRatings";
import { useWriteGuestReviewMutation } from "../../hooks/reviews/useWriteGuestReviewMutation";
import { useGetGameDetailQuery } from "../../hooks/games/useGetGameDetailQuery";

interface PostReviewField {
  rating: number;
  comment: string;
}

export const PostHostReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [checked, isChecked] = useState(false);
  const [inputtedReview, setInputtedReview] = useState("");

  const [selectedText, setSelectedText] = useState("");

  const { id, ratingId } = useParams();
  const { data: reviewData, isPending } = useGetReviewDetailQuery(
    Number(ratingId)
  );
  const { data: gameDetailData } = useGetGameDetailQuery(Number(id));

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
            <h1>경기 리뷰 남기기</h1>
            <div className="space-x-[20px] flex">
              <div className="w-[431px] h-[201px] p-3 space-y-4  border border-gray-200 rounded-lg">
                <h4>호스트 소개</h4>
                <div className="flex  gap-2.5">
                  <img src={profileIcon} alt="profile icon" />
                  <div className="text-sm font-bold text-[#444]">
                    <h4>{gameDetailData?.data?.host.nickname}</h4>
                    <DisplayRatings gameDetailData={gameDetailData?.data} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[464px] space-y-5">
                <div className="w-full h-[92px] p-3 border border-gray-200 rounded-lg ">
                  <h4 className="font-bold">호스트 평점</h4>
                  <div className="flex items-center justify-center">
                    {/* <StarsRating rating={rating} setRating={setRating} /> */}
                  </div>
                </div>
                <div className="h-[307px] w-full border border-gray-200 p-3 space-y-4">
                  <h4 className="font-bold">호스트 한줄평</h4>
                  {/* <ReviewCheckBox
                    checked={checked}
                    isChecked={isChecked}
                    setSelectedText={setSelectedText}
                  /> */}
                  <textarea
                    onChange={(e) => setInputtedReview(e.target.value)}
                    style={{ resize: "none" }}
                    className="h-[100px] overflow-y-auto w-full rounded-lg p-3 border border-gray-200 text-[14px] text-[#444]"
                    placeholder="리뷰를 작성해주세요."
                  />
                </div>
                <button
                  type="submit"
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
