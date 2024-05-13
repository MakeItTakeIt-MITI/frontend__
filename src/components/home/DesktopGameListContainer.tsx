import { Link } from "react-router-dom";
import { GameDetailField } from "../../interface/gameInterface";
import { NoGamesAvailableBox } from "./NoGamesAvailableBox";
import { MatchItem } from "../game/MatchItem";
import React from "react";

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
  return (
    <div
      style={{ scrollbarWidth: "thin" }}
      id="gameListBox"
      className=" w-[371px] p-3  mobile:hidden tablet:block space-y-3 rounded-lg bg-[#FBFBFB]  h-[409px] overflow-y-scroll"
    >
      {!displayCollapsedList &&
        allGamesData &&
        allGamesData?.data?.map((game: GameDetailField) => {
          return (
            <MatchItem
              key={game.id}
              game={game}
              handleSearchCoords={handleSearchCoords}
            />
          );
        })}
      {!displayCollapsedList ||
        (allGamesData?.data.length < 1 && (
          <NoGamesAvailableBox data={allGamesData} />
        ))}
      {displayCollapsedList &&
        allGamesData?.data.map((game: GameDetailField) => {
          for (const address of filteredGames) {
            if (address === game.court.address) {
              return (
                <div className="space-y-2">
                  <Link to={`/games/detail/${game.id}`} key={game.id}>
                    <MatchItem
                      game={game}
                      handleSearchCoords={handleSearchCoords}
                    />
                  </Link>{" "}
                </div>
              );
            }
          }
        })}
    </div>
  );
};
