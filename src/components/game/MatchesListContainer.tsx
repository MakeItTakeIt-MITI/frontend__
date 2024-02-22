// import { Link } from "react-router-dom";
import { GameDetailField } from "../../interface/gameInterface";

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
      {/* <Link to={`/games/detail/${game.id}`} className=""> */}
      <div className="flex flex-col gap-1  ">
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
