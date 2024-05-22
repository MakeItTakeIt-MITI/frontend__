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
import { Link } from "react-router-dom";

export const DisplayRatings = ({ reviewData }: any) => {
  const getRatingComponent = (rating: number) => {
    if (rating === 5) {
      return <ReviewRating {...FiveStars.args} />;
    } else if (rating === 4.5) {
      return <ReviewRating {...FourAndHalfStars.args} />;
    } else if (rating === 4) {
      return <ReviewRating {...FourStars.args} />;
    } else if (rating === 3.5) {
      return <ReviewRating {...ThreeAndHalfStars.args} />;
    } else if (rating === 3) {
      return <ReviewRating {...ThreeStars.args} />;
    } else if (rating === 2.5) {
      return <ReviewRating {...TwoAndHalfStars.args} />;
    } else if (rating === 2) {
      return <ReviewRating {...TwoStars.args} />;
    } else if (rating === 1.5) {
      return <ReviewRating {...OneAndHalfStar.args} />;
    } else if (rating === 1) {
      return <ReviewRating {...OneStar.args} />;
    } else if (rating === 0) {
      return <ReviewRating {...NoReviews.args} />;
    } else {
      return null;
    }
  };

  return (
    <div className="flex gap-1.5 text-sm text-[#222] font-[500]">
      {getRatingComponent(reviewData?.data.rating.average_rating)}

      {reviewData?.data.rating.average_rating > 0 && (
        <span>{reviewData?.data.rating.average_rating.toFixed(1)}</span>
      )}
      <Link to="/" className="font-bold underline">
        후기 {reviewData?.data.rating.num_of_reviews}
      </Link>
    </div>
  );
};
