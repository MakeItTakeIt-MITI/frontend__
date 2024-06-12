import right_arrow from "../../../assets/svg/right-arrow-lg.svg";
import { Link } from "react-router-dom";
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
import { ReviewDataField } from "../../../app/routes/reviews/ReviewsByUser";
import { MatchTags } from "../../game/MatchTags";
import { GuestReviewTag, HostReviewTag } from "../../../stories/Tags.stories";
import { ReviewRating } from "../common/ReviewRating";

interface ReviewCardProps {
  review: ReviewDataField;
  isHost?: boolean;
}

export const ReviewCard = ({ review, isHost }: ReviewCardProps) => {
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
  const game_status =
    review?.review_type === "host_review" ? (
      <MatchTags {...HostReviewTag.args} />
    ) : review?.review_type === "guest_review" ? (
      <MatchTags {...GuestReviewTag.args} />
    ) : null;

  return (
    <Link
      to={`detail/${review.id}`}
      key={review?.id}
      className="p-3 h-[89px] w-full rounded-lg border border-gray-200 flex items-center justify-between"
    >
      <div className="space-y-[2px]">
        {game_status}
        {isHost && (
          <p className="text-zinc-800 text-base font-bold font-['Pretendard'] leading-[18px]">
            {review.reviewee_nickname}
          </p>
        )}
        <div className="space-x-[5px] flex items-center">
          {getRatingComponent(review.rating)}
          <span className="text-neutral-800 text-xs font-medium">
            {review.rating.toFixed(1)}
          </span>
        </div>

        <p className="text-stone-500 text-[9px] font-normal  leading-[11px]">
          {review.comment}
        </p>
        <p className="text-zinc-800 text-base font-bold font-['Pretendard'] leading-[18px]">
          {review.game_title}
        </p>
      </div>
      <img src={right_arrow} alt="right arrow icon" />
    </Link>
  );
};
