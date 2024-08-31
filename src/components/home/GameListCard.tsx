import time from "../../assets/v11/time.svg";
import participants from "../../assets/v11/participants.svg";
import { Game } from "../../interfaces/games";

interface GameListCardProp {
  game: Game;
  setLatitude: (arg: string) => void;
  setLongitude: (arg: string) => void;
}

const GameListCard = ({
  game,
  setLongitude,
  setLatitude,
}: GameListCardProp) => {
  const handleSetLatLong = () => {
    setLatitude(game.court.latitude);
    setLongitude(game.court.longitude);
  };

  return (
    <div
      onClick={handleSetLatLong}
      className="cursor-pointer flex flex-col justify-center space-y-3 w-full sm:h-[7.5rem] md:h-[120px] bg-dark-card border border-[#525252] rounded-xl p-4"
    >
      {/* Status and title */}
      <div className="space-y-2">
        <span
          style={{
            backgroundColor:
              game.game_status === "open"
                ? "#b9dbdc"
                : game.game_status === "canceled"
                  ? "#E3C6CB"
                  : game.game_status === "closed"
                    ? "#d3d3d3"
                    : game.game_status === "completed"
                      ? "#B9DBDC"
                      : "",

            color:
              game.game_status === "open"
                ? "#4152EB"
                : game.game_status === "canceled"
                  ? "#C93568"
                  : game.game_status === "closed"
                    ? "#d3d3d3"
                    : game.game_status === "completed"
                      ? "#00979A"
                      : "",
          }}
          // className="p-[.25rem] text-[10px] rounded-[0.125rem] w-full  text-[#009799] bg-[#b9dbdc] ">
          className="p-[.25rem] text-[10px] rounded-[0.125rem] w-full font-bold  "
        >
          {(game.game_status === "open" && "모집중") ||
            (game.game_status === "canceled" && "경기 취소") ||
            (game.game_status === "closed" && "모집 마감") ||
            (game.game_status === "completed" && "모집 완료")}

          {/* {game.game_status === "cancelled" && "경기 취소"} */}
        </span>
        <h1 className="font-bold  text-[#E5E5E5]">{game.title}</h1>
      </div>
      {/* Game Information */}
      <div className="flex justify-between items-end">
        {/* TIME  & PLAYERS*/}
        <div className="space-y-[4.5px] text-[#E5E5E5] text-[12px]">
          <div className="flex gap-1">
            <img src={time} alt="time" />
            <span>
              {game.starttime.slice(0, 5)} ~ {game.endtime.slice(0, 5)}
            </span>
          </div>

          <div className="flex gap-1">
            <img src={participants} alt="participants" />
            <span>
              {game.num_of_participations} / {game.max_invitation}
            </span>
          </div>
        </div>
        {/* FEE */}
        <h2 className="text-primary-teal font-bold">
          {game.fee.toLocaleString("ko-KR", {
            style: "currency",
            currency: "KRW",
          })}
        </h2>
      </div>
    </div>
  );
};

export default GameListCard;
