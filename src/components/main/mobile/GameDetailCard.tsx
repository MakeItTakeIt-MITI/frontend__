import { Link } from "react-router-dom";
import cardImg from "../../../assets/court.svg";
import { useGetGamesDataQuery } from "../../../hooks/useGetGamesDataQuery";

interface GameDetailsField {
  id: number;
  startdate: string;
  starttime: string;
  endtime: string;
  title: string;
  fee: number;
}

export const GameDetailCard = () => {
  const { data } = useGetGamesDataQuery();

  return (
    <>
      {data?.data.map((game: GameDetailsField) => {
        return (
          <Link
            to={`/games/detail/${game.id}`}
            key={game.id}
            className="w-[221px] h-[205px]  border border-gray-200 rounded-xl"
          >
            <div>
              <img src={cardImg} alt="game card" />
            </div>
            <div className="flex flex-col gap-1 p-3">
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
          </Link>
        );
      })}
    </>
  );
};
