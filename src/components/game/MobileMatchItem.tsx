import { GameDetailField } from "../../interface/gameInterface";
import groupIcon from "../../assets/people.svg";
import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../../stories/Tags.stories";
import { MatchTags } from "./MatchTags";
import "../home/animation.css";

interface MobileMatchItemProp {
  game: GameDetailField;
  handleSearchCoords: (arg: number, arg2: number) => void;
}

export const MobileMatchItem = ({
  game,
  handleSearchCoords,
}: MobileMatchItemProp) => {
  return (
    <div
      onClick={() => {
        const { latitude, longitude } = game.court;
        handleSearchCoords(Number(latitude), Number(longitude));
      }}
      className="border border-b-gray-200  rounded-xl  hover:cursor-pointer  cssanimation sequence fadeInBottom "
    >
      <div className="flex flex-col gap-1 p-3">
        <div className="flex justify-between">
          <h2 className="font-bold text-[14px] truncate">{game.title} </h2>

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
        </div>

        <div className="flex items-center gap-1.5">
          <img src={groupIcon} alt="group icon" className="w-5" />
          <p className="text-[14px] text-[##444444]">
            {game.num_of_participations} / {game.max_invitation}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[14px] text-gray-500">
            {`${game.starttime.slice(0, -3)} ~ ${game.endtime.slice(0, -3)}`}
          </p>
          <p className=" text-[#4065F6] font-bold">
            {game.fee.toLocaleString("ko-KR", {
              style: "currency",
              currency: "KRW",
            })}
          </p>
        </div>
      </div>
      <hr className="block " />
    </div>
  );
};
