import badge from "../../assets/authentication-badge.svg";
// import reviewStar from "../../assets/star-review.png";
import grayStar from "../../assets/empty_star_icon.svg";
import profile from "../../assets/game_detail_profile.svg";

import { GameDetailBoxProp } from "../../interface/gameInterface";

export const GameDetailHostInfoBox = ({ gameDetail }: GameDetailBoxProp) => {
  return (
    <div className="laptop:p-6 mobile:p-3 space-y-[19px]">
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
              {/* {" "} */}
              {gameDetail?.host.nickname} 님
            </p>
            <img src={badge} alt="user verified badge" />
          </div>
          <div className="flex gap-2.5 w-[250px] mobile:text-[14px] tablet:text-[16x] text-[#222]">
            {/* {gameDetail?.h} */}

            <div className="flex items-center gap-1">
              {/* <img
                src={reviewStar}
                alt="review star"
                className="w-[16px] h-[16px]"
              />

              <img
                src={reviewStar}
                alt="review star"
                className="w-[16px] h-[16px]"
              /> */}

              <img
                src={grayStar}
                alt="review star"
                className="w-[16px] h-[16px]"
              />

              <img
                src={grayStar}
                alt="review star"
                className="w-[16px] h-[16px]"
              />

              <img
                src={grayStar}
                alt="review star"
                className="w-[16px] h-[16px]"
              />

              <img
                src={grayStar}
                alt="review star"
                className="w-[16px] h-[16px]"
              />

              <img
                src={grayStar}
                alt="review star"
                className="w-[16px] h-[16px]"
              />
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
