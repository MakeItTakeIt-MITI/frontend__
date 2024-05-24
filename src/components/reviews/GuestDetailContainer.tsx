import { Link } from "react-router-dom";
import badge from "../../assets/authentication-badge.svg";
import profile from "../../assets/game_detail_profile.svg";

import { GameDetailBoxProp } from "../../interface/gameInterface";
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
import { ReviewRating } from "../common/ReviewRating";

export const GuestDetailContainer = ({
  reviewDetail,
  reviewDetailData,
}: any) => {
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
    <>
      {reviewDetailData?.data.review_type !== "host_review" && (
        <div className="laptop:p-3 mobile:p-3 space-y-[19px] laptop:border border-gray-200 rounded-lg">
          <p className="text-[#222] font-bold tablet:text-[18px]">
            게스트 소개
          </p>

          <div className="flex items-center gap-2">
            <img
              src={profile}
              alt="profile icon"
              className="rounded-[50%] bg-gray-300 w-[40px] h-[40px]"
            />
            <div className="">
              <div className="flex items-center gap-1.5">
                <p className="text-[#444] font-bold">
                  {reviewDetail?.data.nickname} 님
                </p>
                <img src={badge} alt="user verified badge" />
              </div>
              <div className="flex gap-2.5 text-[14px]  text-[#222]">
                <div className="flex items-center gap-1">
                  {getRatingComponent(reviewDetail?.data.rating.average_rating)}

                  <p>
                    {" "}
                    {reviewDetail?.data.rating.average_rating > 0
                      ? reviewDetail?.data.rating.average_rating.toFixed(1)
                      : 0}
                  </p>
                </div>
                <Link to="/" className="font-bold underline">
                  후기 {reviewDetail?.data.rating.num_of_reviews}
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-2  text-sm ">
            <p className="text-[#666] ">{reviewDetailData?.data.comment}</p>
          </div>
        </div>
      )}
    </>
  );
};
