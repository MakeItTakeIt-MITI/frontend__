import star from "../../assets/star-review.png";
import emptyStar from "../../assets/empty_star_icon.svg";
import halfStar from "../../assets/halfStar.png";

interface ReviewRatingProp {
  reviewRating?: number[];
}

export const ReviewRating: React.FC<ReviewRatingProp> = ({ reviewRating }) => {
  return (
    <div className="flex items-center gap-[2px]">
      {reviewRating?.map((i, index) =>
        i === 1 ? (
          <img key={index} src={star} alt="star" className="size-4" />
        ) : i === 0.5 ? (
          <img key={index} src={halfStar} alt="half star" className="size-4" />
        ) : (
          <img
            key={index}
            src={emptyStar}
            alt="empty star"
            className="size-4"
          />
        )
      )}
    </div>
  );
};
