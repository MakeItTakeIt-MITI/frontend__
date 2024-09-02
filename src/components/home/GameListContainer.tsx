import { AllGamesProps } from "../../interfaces/games";
import useLatLongStore from "../../store/useLatLongStore";
import GameListCard from "./GameListCard";
import "./scrollbar.css";

const GameListContainer = ({ allGamesData }: AllGamesProps) => {
  const { setLatitude, setLongitude } = useLatLongStore();

  return (
    <div className="sm:hidden md:block custom-scrollbar bg-light-dark sm:w-full md:w-[381px] sm:h-[33.25rem] md:h-[494px] sm:p-[0.5rem] md:p-4 rounded-[20px] space-y-3 overflow-y-scroll">
      {allGamesData?.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <h1>진행중인 경기가 없습니다.</h1>
        </div>
      ) : (
        allGamesData?.map((game) => (
          <GameListCard
            key={game.id}
            game={game}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
          />
        ))
      )}
    </div>
  );
};

export default GameListContainer;
