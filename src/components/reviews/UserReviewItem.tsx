import { Link } from "react-router-dom";
import linkArrow from "../../assets/Chevron_Right_MD.svg";
import { MatchTags } from "../game/MatchTags";
import { GuestReviewTag, HostReviewTag } from "../../stories/Tags.stories";
import { ReviewRating } from "../common/ReviewRating";
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
} from "../../stories/Reviews.stories";

export const UserReviewItem = ({ review }: any) => {
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
  return (
    <div className="flex items-center  w-full h-[89px] border text-[#545454] border-gray-300 rounded-lg   justify-between p-3">
      <div className="flex flex-col">
        <div className="">
          {review?.review_type === "host_review" && (
            <MatchTags {...HostReviewTag.args} />
          )}
          {review?.review_type === "guest_review" && (
            <MatchTags {...GuestReviewTag.args} />
          )}
        </div>

        <div className="flex items-center gap-1">
          {getRatingComponent(review?.rating)}

          <span className="text-[14px]">5.0</span>
        </div>
        <p className="text-[9px] text-[#666] ">
          팀 구성을 균형있게 해주셨어요!
        </p>
        <p className="font-bold text-[16px] ">
          수원 매탄 공원 4 vs 4 (주차 12자리)
        </p>
      </div>

      <button>
        <img src={linkArrow} alt="right arrow icon" />
      </button>
    </div>
  );
};
