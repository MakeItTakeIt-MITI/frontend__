import star from "../../assets/star-review.png";
import emptyStar from "../../assets/empty_star_icon.svg";

interface ReviewRatingProp {
  reviewRating?: number[];
}

export const ReviewRating: React.FC<ReviewRatingProp> = ({ reviewRating }) => {
  return (
    <div className="flex items-center gap-[2px]">
      {reviewRating?.map((i) =>
        i === 1 ? (
          <img src={star} alt="star" className="size-4" />
        ) : (
          <img src={emptyStar} alt="empty star" className="size-4" />
        )
      )}
    </div>
  );
};
