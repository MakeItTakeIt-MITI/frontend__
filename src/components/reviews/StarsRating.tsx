import { useState } from "react";
import star from "../../assets/star.png";
import emptyStar from "../../assets/empty_star_icon.svg";

interface StarsRatingProp {
  rating: number;
  setRating: (arg: number) => void;
}

export const StarsRating: React.FC<StarsRatingProp> = ({
  rating,
  setRating,
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (rate: number) => {
    if (rating === rate) {
      setRating(0);
    } else {
      setRating(rate);
    }
  };

  const renderStars = () => {
    const stars = [];
    const effectiveRating = hoverRating || rating;

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={effectiveRating >= i ? star : emptyStar}
          alt={effectiveRating >= i ? "filled star icon" : "empty star icon"}
          onMouseEnter={() => setHoverRating(i)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => handleRating(i)}
          className="cursor-pointer transition-transform transform"
        />
      );
    }
    return stars;
  };

  return <div className="flex gap-2	">{renderStars()}</div>;
};
