import GameListCard from "./GameListCard";
import "./scrollbar.css";

const GameListContainer = () => {
  return (
    <div className="custom-scrollbar bg-light-dark w-[381px] h-[494px] p-4 rounded-[20px] space-y-3 overflow-y-scroll">
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
