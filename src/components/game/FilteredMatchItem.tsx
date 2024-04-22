import groupIcon from "../../assets/people.svg";
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
  handleSearchCoords: (argOne: number, argTwo: number) => void;
}

export const FilteredMatchItem = ({
  game,
  handleSearchCoords,
}: GameDetailProp) => {
  return (
    <div
      onClick={() => {
        const { latitude, longitude } = game.court;
        handleSearchCoords(Number(latitude), Number(longitude));
      }}
      className="hover:cursor-pointer hover:bg-gray-200 px-4 py-2 "
    >
      <div className="flex flex-col   gap-1">
        {game.game_status === "open" && <MatchTags {...RecruitingTag.args} />}
        {game.game_status === "canceled" && (
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
          {`${game.starttime.slice(0, -3)} ~ ${game.endtime.slice(0, -3)}`}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src={groupIcon} alt="group icon" className="w-5" />
            <p className="text-sm">
              {game.num_of_participations} / {game.max_invitation}
            </p>
          </div>
          <p className="text-[14px] text-[#4065F6] font-bold">
            {game.fee.toLocaleString("ko-KR", {
              style: "currency",
              currency: "KRW",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
