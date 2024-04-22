import cardImg from "../../../assets/court.svg";
import { useGetGamesDataQuery } from "../../../hooks/games/useGetGamesDataQuery";
import { GameDetailField } from "../../../interface/gameInterface";
import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../../../stories/Tags.stories";
import { MatchTags } from "../../game/MatchTags";

interface GameDetailProp {
  formatDate: string;
  handleSearchCoords: (arg: number, argTwo: number) => void;
}

export const MobileViewGameList = ({
  formatDate,

  handleSearchCoords,
}: GameDetailProp) => {
  const { data } = useGetGamesDataQuery(formatDate);

  return (
    <div className="tablet:hidden flex flex-col  gap-4  flex-nowrap  px-2 w-full">
      {data?.data.map((game: GameDetailField) => {
        return (
          <div
            onClick={() => {
              const { latitude, longitude } = game.court;
              handleSearchCoords(Number(latitude), Number(longitude));
            }}
            key={game.id}
            className="  border border-b-gray-200  rounded-xl  hover:cursor-pointer  "
          >
            <div className=" hidden ">
              <img src={cardImg} alt="game card" />
            </div>
            <div className="flex flex-col gap-1 p-3">
              {game.game_status === "open" && (
                <MatchTags {...RecruitingTag.args} />
              )}
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
            <hr className="block " />
          </div>
        );
      })}
    </div>
  );
};
