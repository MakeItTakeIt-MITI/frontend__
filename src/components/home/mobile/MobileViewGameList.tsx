import cardImg from "../../../assets/court.svg";
import { useGetGamesDataQuery } from "../../../hooks/useGetGamesDataQuery";
import { GameDetailField } from "../../../interface/gameInterface";

interface GameDetailProp {
  formatDate: string;
  handleSearchAddress: (arg: string) => void;
}

export const MobileViewGameList = ({
  formatDate,

  handleSearchAddress,
}: GameDetailProp) => {
  const { data } = useGetGamesDataQuery(formatDate);

  return (
    <div className="tablet:hidden  flex flex-col  gap-4  flex-nowrap  px-2 w-full">
      {data?.data.map((game: GameDetailField) => {
        return (
          // <Link
          //   to={`/games/detail/${game.id}`}
          //   key={game.id}
          //   className="  border border-b-gray-200  rounded-xl "
          // >
          <div
            onClick={() => handleSearchAddress(game?.court.address)}
            key={game.id}
            className="  border border-b-gray-200  rounded-xl "
          >
            <div className=" hidden ">
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
            <hr className="block " />
          </div>
        );
      })}
    </div>
  );
};
