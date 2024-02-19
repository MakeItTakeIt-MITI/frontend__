import { Link } from "react-router-dom";
import cardImg from "../../../assets/court.svg";
import { useGetGamesDataQuery } from "../../../hooks/useGetGamesDataQuery";
import { GameDetailField } from "../../../interface/gameInterface";

export const GameDetailCard = () => {
  const { data } = useGetGamesDataQuery();

  return (
    <div className="flex mobile:flex-col tablet:justify-between  mobile:gap-4 tablet:flex-row tablet:flex-wrap mobile:flex-nowrap  tablet:items-center  mobile:px-2 mobile:w-full">
      {data?.data.map((game: GameDetailField) => {
        return (
          <Link
            to={`/games/detail/${game.id}`}
            key={game.id}
            className="tablet:w-[221px] tablet:h-[205px]  border border-b-gray-200  rounded-xl "
          >
            <div className="tablet:block mobile:hidden ">
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
            <hr className="mobile:block tablet:hidden" />
          </Link>
        );
      })}
    </div>
  );
};
