import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../../stories/Tags.stories";
import { MatchTags } from "../game/MatchTags";

import markerSvg from "../../assets/Map_Pin.svg";
import peopleSvg from "../../assets/people.svg";

export const ReviewGameDetailBox = ({ reviewData }: any) => {
  return (
    <>
      <div className="space-y-[13px]">
        {reviewData?.data.game.game_status === "open" && (
          <MatchTags {...RecruitingTag.args} />
        )}
        {reviewData?.data.game.game_status === "canceled" && (
          <MatchTags {...GameCancelledTag.args} />
        )}
        {reviewData?.data.game.game_status === "closed" && (
          <MatchTags {...RecruitingCompletedTag.args} />
        )}
        {reviewData?.data.game.game_status === "completed" && (
          <MatchTags {...GameFinishedTag.args} />
        )}
        <div>
          <h1 className="font-bold text-[#222] ">
            {reviewData?.data.game.title}
          </h1>
          <div className="text-[#999] text-sm  ">
            {reviewData?.data.game?.startdate}{" "}
            {reviewData?.data.game?.starttime.slice(0, 5)} ~{" "}
            {reviewData?.data.game?.endtime.slice(0, 5)}
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <img src={markerSvg} alt="pin icon" className="tablet:w-[20px]" />
            <p className="text-sm text-[#444] font-[500] truncate">
              {" "}
              {reviewData?.data.game?.court.address}{" "}
              {reviewData?.data.game?.court.address_detail}
            </p>
          </div>

          <div className="flex gap-1">
            <img
              src={peopleSvg}
              alt="peoples icon"
              className="tablet:w-[20px]"
            />
            <p className="text-sm text-[#444] font-[500]">
              총 {reviewData?.data.game?.max_invitation}명 중{" "}
              {reviewData?.data.game?.num_of_confirmed_participations}명 모집
              완료
            </p>
          </div>
        </div>
        <p className="text-[#4065F6] font-bold text-[16px]">
          {reviewData?.data.game?.fee.toLocaleString("ko-KR", {
            style: "currency",
            currency: "KRW",
          })}
        </p>
      </div>
    </>
  );
};
