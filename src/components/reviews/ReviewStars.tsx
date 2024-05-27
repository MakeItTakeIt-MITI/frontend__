import {
  LargeFiveStars,
  LargeFourAndHalfStars,
  LargeFourStars,
  LargeNoReviews,
  LargeOneAndHalfStar,
  LargeOneStar,
  LargeThreeAndHalfStars,
  LargeThreeStars,
  LargeTwoAndHalfStars,
  LargeTwoStars,
} from "../../stories/LargeReviewRating.stories";
import { LargeReviewRating } from "../common/ReviewRating";

export const ReviewStars = ({ reviewDetailData }) => {
  const getRatingComponent = (rating: number) => {
    if (rating === 5) {
      return <LargeReviewRating {...LargeFiveStars.args} />;
    } else if (rating >= 4.5 && rating < 5) {
      return <LargeReviewRating {...LargeFourAndHalfStars.args} />;
    } else if (rating >= 4 && rating < 4.5) {
      return <LargeReviewRating {...LargeFourStars.args} />;
    } else if (rating >= 3.5 && rating < 4) {
      return <LargeReviewRating {...LargeThreeAndHalfStars.args} />;
    } else if (rating >= 3 && rating < 3.5) {
      return <LargeReviewRating {...LargeThreeStars.args} />;
    } else if (rating >= 2.5 && rating < 3) {
      return <LargeReviewRating {...LargeTwoAndHalfStars.args} />;
    } else if (rating >= 2 && rating < 2.5) {
      return <LargeReviewRating {...LargeTwoStars.args} />;
    } else if (rating >= 1.5 && rating < 2) {
      return <LargeReviewRating {...LargeOneAndHalfStar.args} />;
    } else if (rating >= 1 && rating < 1.5) {
      return <LargeReviewRating {...LargeOneStar.args} />;
    } else if (rating > 0 && rating < 1) {
      return <LargeReviewRating {...LargeNoReviews.args} />;
    } else {
      return null;
    }
  };
  return <> {getRatingComponent(reviewDetailData?.data.rating)}</>;
};
