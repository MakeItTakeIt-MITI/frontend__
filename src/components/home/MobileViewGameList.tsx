import { useGetGamesDataQuery } from "../../hooks/games/useGetGamesDataQuery";
import { GameDetailField } from "../../interface/gameInterface";

import { MobileFilteredMatchItem } from "../game/MobileFilteredMatchItem";
import { MobileMatchItem } from "../game/MobileMatchItem";
import { NoGamesAvailableBox } from "./NoGamesAvailableBox";

interface GameDetailProp {
  formatDate: string;
  handleSearchCoords: (arg: number, argTwo: number) => void;
  displayCollapsedList: boolean;
  filteredGames: string[];
}

export const MobileViewGameList = ({
  formatDate,
  filteredGames,
  handleSearchCoords,
  displayCollapsedList,
}: GameDetailProp) => {
  const { data } = useGetGamesDataQuery(formatDate);

  return (
    <div className="tablet:hidden flex flex-col  gap-4  flex-nowrap  px-2 w-full">
      {!displayCollapsedList &&
        data?.data.map((game: GameDetailField) => {
          return (
            <MobileMatchItem
              key={game.id}
              game={game}
              handleSearchCoords={handleSearchCoords}
            />
          );
        })}

      {!displayCollapsedList ||
        (data?.data.length < 1 && <NoGamesAvailableBox data={data} />)}
      {displayCollapsedList &&
        data?.data.map((game: GameDetailField) => {
          for (const address of filteredGames) {
            if (address === game.court.address) {
              return (
                <MobileFilteredMatchItem
                  key={game.id}
                  game={game}
                  handleSearchCoords={handleSearchCoords}
                />
              );
            }
          }
        })}
    </div>
  );
};
