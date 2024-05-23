import profileIcon from "../../assets/game_detail_profile.svg";
import rightArrIcon from "../../assets/Chevron_Right_MD.svg";
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

export const UserReviewDetailCard = ({
  data,
  isHost,
  participantData,
}: any) => {
  const hostRating = isHost && data?.data.host.rating?.average_rating;
  const hostDataReviewCount = isHost && data?.data.host.rating.num_of_reviews;
  const hostNickname = isHost && data?.data.host.nickname;

  const participantRating = !isHost && participantData?.rating.average_rating;
  const participantDataReviewCount =
    !isHost && participantData?.rating.num_of_reviews;
  const participantNickname = !isHost && participantData?.nickname;

  const rating = isHost ? hostRating : participantRating;
  const reviewCount = isHost ? hostDataReviewCount : participantDataReviewCount;
  const nickname = isHost ? hostNickname : participantNickname;

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
    <div className="border border-gray-200 rounded-lg p-3 h-[73px] flex items-center justify-between">
      <div className="flex  gap-2.5">
        <img src={profileIcon} alt="profile icon" />
        <div className="text-sm font-bold text-[#444]">
          <h4>{nickname}</h4>
          <div className="flex gap-1.5 text-sm text-[#222] font-[500]">
            {getRatingComponent(rating)}

            {rating > 0 && <span>{rating.toFixed(1)}</span>}
            <Link to="/" className="font-bold underline">
              후기 {reviewCount}
            </Link>
          </div>
        </div>
      </div>
      {!isHost && (
        <Link to={`guest/${participantData?.rating.id}`}>
          <img src={rightArrIcon} alt="right arrow" />
        </Link>
      )}
      {isHost && (
        <Link to={`host/${data?.data.host.id}`}>
          <img src={rightArrIcon} alt="right arrow" />
        </Link>
      )}
    </div>
  );
};
