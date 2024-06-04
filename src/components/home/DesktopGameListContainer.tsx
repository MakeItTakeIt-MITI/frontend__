import { Link } from "react-router-dom";
import { GameDetailField } from "../../interface/gameInterface";
import { MatchItem } from "../game/MatchItem";
import React from "react";
import { NoGamesAvailableInfoBox } from "./NoGamesAvailableInfoBox";
import "./animation.css";

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
  const isDataAvailable = allGamesData && Array.isArray(allGamesData.data);

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
        isDataAvailable &&
        allGamesData?.data.map((game: GameDetailField) => (
          <MatchItem
            key={game.id}
            game={game}
            handleSearchCoords={handleSearchCoords}
          />
        ))}

      {isDataAvailable && allGamesData.data.length === 0 && (
        <NoGamesAvailableInfoBox />
      )}

      {displayCollapsedList &&
        isDataAvailable &&
        allGamesData?.data.map((game: GameDetailField) => {
          if (filteredGames.includes(game.court.address)) {
            return (
              <div
                key={game.id}
                className="space-y-2 cssanimation sequence fadeInBottom"
              >
                <Link to={`/games/detail/${game.id}`}>
                  <MatchItem
                    game={game}
                    handleSearchCoords={handleSearchCoords}
                  />
                </Link>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};
