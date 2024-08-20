import { AllGamesProps } from "../../interfaces/games";
import GameListCard from "./GameListCard";
import "./scrollbar.css";

const GameListContainer = ({ allGamesData }: AllGamesProps) => {
  return (
    <div className="custom-scrollbar bg-light-dark sm:w-full md:w-[381px] sm:h-[33.25rem] md:h-[494px] sm:p-[0.5rem] md:p-4 rounded-[20px] space-y-3 overflow-y-scroll">
      {allGamesData?.length === 0 ? (
        // <NoResults />
        <div className="w-full h-full flex items-center justify-center">
          <h1>조회 결과가 없습니다 (수정예정)</h1>
        </div>
      ) : (
        allGamesData?.map((game) => <GameListCard key={game.id} game={game} />)
      )}
    </div>
  );
};

export default GameListContainer;
