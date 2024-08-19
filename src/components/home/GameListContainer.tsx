import { Game } from "../../interfaces/games";
import GameListCard from "./GameListCard";
import "./scrollbar.css";

interface GameListContainerProp {
  allGamesData: Game[];
}

const GameListContainer = ({ allGamesData }: GameListContainerProp) => {
  return (
    <div className="custom-scrollbar bg-light-dark sm:w-full md:w-[381px] sm:h-[33.25rem] md:h-[494px] sm:p-[0.5rem] md:p-4 rounded-[20px] space-y-3 overflow-y-scroll">
      {allGamesData?.map((game) => <GameListCard key={game.id} game={game} />)}
    </div>
  );
};

export default GameListContainer;
