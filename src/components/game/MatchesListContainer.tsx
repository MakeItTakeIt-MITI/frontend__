// import { Link } from "react-router-dom";
import { GameDetailField } from "../../interface/gameInterface";
import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../../stories/Tags.stories";

import { MatchTags } from "./MatchTags";

interface GameDetailProp {
  game: GameDetailField;
  handleSearchAddress: (arg: string) => void;
}

export const MatchListDetail = ({
  game,
  handleSearchAddress,
}: GameDetailProp) => {
  return (
    <div
      onClick={() => handleSearchAddress(game?.court.address)}
      className="hover:cursor-pointer"
    >
      <div className="flex flex-col gap-1  ">
        {game.game_status === "open" && <MatchTags {...RecruitingTag.args} />}
        {game.game_status === "cancelled" && (
          <MatchTags {...GameCancelledTag.args} />
        )}
        {game.game_status === "closed" && (
          <MatchTags {...RecruitingCompletedTag.args} />
        )}
        {game.game_status === "completed" && (
          <MatchTags {...GameFinishedTag.args} />
        )}

        <h2 className="font-bold text-[18px] truncate">{game.title} </h2>
        <p className="text-[14px] text-gray-500">
          {`${game.startdate} ${game.starttime.slice(
            0,
            -3
          )} ~ ${game.endtime.slice(0, -3)}`}
        </p>
        <p className="text-[14px] text-red-500 font-bold">
          {game.fee.toLocaleString("ko-KR", {
            style: "currency",
            currency: "KRW",
          })}
        </p>
      </div>
    </div>
  );
};
