import badge from "../../assets/authentication-badge.svg";
import profile from "../../assets/game_detail_profile.svg";

import { GameDetailBoxProp } from "../../interface/gameInterface";
import {
  FiveStars,
  FourStars,
  NoReviews,
  OneStar,
  ThreeStars,
  TwoStars,
} from "../../stories/Reviews.stories";
import { ReviewRating } from "../common/ReviewRating";

export const GameDetailHostInfoBox = ({ gameDetail }: GameDetailBoxProp) => {
  return (
    <div className="laptop:p-3 mobile:p-3 space-y-[19px] laptop:border border-gray-200 rounded-lg">
      <p className="text-[#222] font-bold tablet:text-[18px]">호스트 소개</p>

      <div className="flex items-center gap-2">
        <img
          src={profile}
          alt="profile icon"
          className="rounded-[50%] bg-gray-300 w-[40px] h-[40px]"
        />
        <div className="">
          <div className="flex items-center gap-1.5">
            <p className="text-[#444] font-bold">
              {gameDetail?.host.nickname} 님
            </p>
            <img src={badge} alt="user verified badge" />
          </div>
          <div className="flex gap-2.5 text-[14px]  text-[#222]">
            <div className="flex items-center gap-1">
              {/* stars */}
              {gameDetail?.host.rating.average_rating === 5 && (
                <ReviewRating {...FiveStars.args} />
              )}
              {gameDetail?.host.rating.average_rating === 4 ||
                (gameDetail?.host.rating.average_rating === 4.5 && (
                  <ReviewRating {...FourStars.args} />
                ))}
              {gameDetail?.host.rating.average_rating === 3 ||
                (gameDetail?.host.rating.average_rating === 3.5 && (
                  <ReviewRating {...ThreeStars.args} />
                ))}
              {gameDetail?.host.rating.average_rating === 2 ||
                (gameDetail?.host.rating.average_rating === 2.5 && (
                  <ReviewRating {...TwoStars.args} />
                ))}
              {gameDetail?.host.rating.average_rating === 1 ||
                (gameDetail?.host.rating.average_rating === 1.5 && (
                  <ReviewRating {...OneStar.args} />
                ))}
              {gameDetail?.host.rating.average_rating === 0 && (
                <ReviewRating {...NoReviews.args} />
              )}
              <p>
                {" "}
                {gameDetail?.host.rating.average_rating > 0
                  ? gameDetail?.host.rating.average_rating.toFixed(1)
                  : 0}
              </p>
            </div>
            <p className="font-bold underline">
              후기 {gameDetail?.host.rating.num_of_reviews}
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-2  ">
        <p className="text-[#666] ">
          나이, 키, 성별 상관 없습니다. 농구를 잘 모르시는 분들도 환영합니다.
          즐겁게 농구하는 즐농팀입니다. 과격하고 승리에 집착하시는 분들은
          사양합니다.
        </p>
      </div>
    </div>
  );
};
