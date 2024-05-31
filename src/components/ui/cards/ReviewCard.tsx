import right_arrow from "../../../assets/svg/right-arrow-lg.svg";
import { Link } from "react-router-dom";
import { ReviewRating } from "../../common/ReviewRating";
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

interface ReviewCardProps {
  path: string;
  key: string;
  game_status: React.ReactNode;
  rating: number;
  review: string;
  title?: string;
  reviewee?: string;
}

export const ReviewCard = ({
  path = "",
  key,
  game_status,
  rating,
  review,
  title,
  reviewee,
}: ReviewCardProps) => {
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
    <Link
      to={path}
      key={key}
      className="p-3 h-[89px] w-full rounded-lg border border-gray-200 flex items-center justify-between"
    >
      <div className="space-y-[2px]">
        {game_status}
        <div className="space-x-[5px] flex items-center">
          {getRatingComponent(rating)}
          <span className="text-neutral-800 text-xs font-medium">
            {rating.toFixed(1)}
          </span>
        </div>
        <p className="text-zinc-800 text-base font-bold font-['Pretendard'] leading-[18px]">
          {reviewee}
        </p>
        <p className="text-stone-500 text-[9px] font-normal  leading-[11px]">
          {review}
        </p>
        <p className="text-zinc-800 text-base font-bold font-['Pretendard'] leading-[18px]">
          {title}
        </p>
      </div>
      <img src={right_arrow} alt="right arrow icon" />
    </Link>
  );
};
