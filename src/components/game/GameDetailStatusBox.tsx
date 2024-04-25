import { GameDetailBoxProp } from "../../interface/gameInterface";
import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../../stories/Tags.stories";
import { MatchTags } from "./MatchTags";

export const GameDetailHeader = ({ gameDetail }: GameDetailBoxProp) => {
  return (
    <div className="space-y-1">
      {gameDetail.game_status === "open" && (
        <MatchTags {...RecruitingTag.args} />
      )}
      {gameDetail.game_status === "canceled" && (
        <MatchTags {...GameCancelledTag.args} />
      )}
      {gameDetail.game_status === "closed" && (
        <MatchTags {...RecruitingCompletedTag.args} />
      )}
      {gameDetail.game_status === "completed" && (
        <MatchTags {...GameFinishedTag.args} />
      )}
      <p className="font-bold text-[#222] tablet:text-[20px]">
        {gameDetail?.title}
      </p>
      <div className="text-[#999] mobile:text-[14px] tablet:text-[16px] ">
        {gameDetail?.startdate} {gameDetail?.starttime.slice(0, 5)} ~{" "}
        {gameDetail?.endtime.slice(0, 5)}
      </div>
    </div>
  );
};
