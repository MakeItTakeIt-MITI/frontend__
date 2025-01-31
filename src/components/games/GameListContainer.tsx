import { AllGamesProps } from "../../interfaces/games.ts";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";
import GameListCard from "./GameListCard.tsx";
import NewGameCard from "./NewGameCard.tsx";
import "./scrollbar.css";

interface GameListProps extends AllGamesProps {
  handleSetCoords: (arg1: string, arg2: string) => void;
  isLoading: boolean;
}
const GameListContainer = ({
  allGamesData,
  handleSetCoords,
  isLoading,
}: GameListProps) => {
  return (
    <div className="sm:hidden md:block custom-scrollbar bg-light-dark sm:w-full md:w-full sm:h-[33.25rem] md:h-[494px] sm:p-[0.5rem] md:p-4 rounded-[20px] space-y-3 overflow-y-scroll">
      <NewGameCard />
      <NewGameCard />
      <NewGameCard />
      <NewGameCard />
      {isLoading && (
        <>
          <GameCardSkeleton />
          <GameCardSkeleton />
          <GameCardSkeleton />
          <GameCardSkeleton />
          <GameCardSkeleton />
        </>
      )}
      {allGamesData?.length === 0 ? (
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center text-white  ">
          <h1 className="text-xl font-bold">검색된 경기가 없습니다.</h1>
          <h2 className="text-sm">필터 변경하여 다른 경기를 찾아보세요!</h2>
        </div>
      ) : (
        allGamesData?.map((game) => (
          <GameListCard
            key={game.id}
            game={game}
            handleSetCoords={handleSetCoords}
          />
        ))
      )}
    </div>
  );
};

export default GameListContainer;
