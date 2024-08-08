import GameListCard from "./GameListCard";
import "./scrollbar.css";

const GameListContainer = () => {
  return (
    <div className="custom-scrollbar bg-light-dark sm:w-full md:w-[381px] sm:h-[33.25rem] md:h-[494px] sm:p-[0.5rem] md:p-4 rounded-[20px] space-y-3 overflow-y-scroll">
      <GameListCard />
      <GameListCard />
      <GameListCard />
      <GameListCard />
      <GameListCard />
      <GameListCard />
      <GameListCard />
    </div>
  );
};

export default GameListContainer;
