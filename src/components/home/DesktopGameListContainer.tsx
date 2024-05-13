import { Link } from "react-router-dom";
import { GameDetailField } from "../../interface/gameInterface";
import { MatchItem } from "../game/MatchItem";
import React from "react";
import { NoGamesAvailableInfoBox } from "./NoGamesAvailableInfoBox";

interface DesktopGameListProps {
  allGamesData: {
    data: GameDetailField[];
    message: string;
    status_code: number;
  };
  displayCollapsedList: boolean;
  handleSearchCoords: (arg: number, argTwo: number) => void;
  filteredGames: string[];
}

export const DesktopGameListContainer: React.FC<DesktopGameListProps> = ({
  allGamesData,
  displayCollapsedList,
  handleSearchCoords,
  filteredGames,
}) => {
  const games = allGamesData?.data;

  return (
    <div
      style={{
        overflowY: "auto",
        scrollbarWidth: "thin",
      }}
      id="gameListBox"
      className="h-[409px] w-[371px] p-3  mobile:hidden tablet:block space-y-3 rounded-lg bg-[#FBFBFB]   "
    >
      {!displayCollapsedList &&
        allGamesData &&
        games?.map((game: GameDetailField) => {
          return (
            <MatchItem
              key={game.id}
              game={game}
              handleSearchCoords={handleSearchCoords}
            />
          );
        })}
      {games.length === 0 && <NoGamesAvailableInfoBox />}
      {displayCollapsedList &&
        games.map((game: GameDetailField) => {
          for (const address of filteredGames) {
            if (address === game.court.address) {
              return (
                <div key={game.id} className="space-y-2">
                  <Link to={`/games/detail/${game.id}`}>
                    <MatchItem
                      game={game}
                      handleSearchCoords={handleSearchCoords}
                    />
                  </Link>
                </div>
              );
            }
          }
        })}
    </div>
  );
};
