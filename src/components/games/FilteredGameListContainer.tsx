import { AllGamesProps } from "../../interfaces/games.ts";
import FilteredGameCard from "./FilteredGameCard.tsx";
import "./scrollbar.css";

interface FilteredContainerProps extends AllGamesProps {
  selectedAddress: string;
}

const FilteredGameListContainer = ({
  allGamesData,
  selectedAddress,
}: FilteredContainerProps) => {
  const filteredAddress = allGamesData?.filter(
    (game) => selectedAddress === game.court.address
  );

  return (
    <div className=" sm:hidden md:block custom-scrollbar bg-light-dark sm:w-full md:w-[381px] sm:h-[33.25rem] md:h-[494px] sm:p-[0.5rem] md:p-4 rounded-[20px] space-y-3 overflow-y-scroll">
      {filteredAddress.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <h1>진행중인 경기가 없습니다.</h1>
        </div>
      ) : (
        filteredAddress.map((game) => (
          <FilteredGameCard key={game.id} game={game} />
        ))
      )}
    </div>
  );
};

export default FilteredGameListContainer;
