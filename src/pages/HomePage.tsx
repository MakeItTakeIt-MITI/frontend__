import { HeroCarousel } from "../components/home/Hero";
import { MobileViewDatesList } from "../components/home/MobileViewDatesList";
import { useGetGamesDataQuery } from "../hooks/games/useGetGamesDataQuery";
import { DesktopViewDatesList } from "../components/home/DesktopViewDatesList";
import { GameDetailField } from "../interface/gameInterface";
import { MatchItem } from "../components/game/MatchItem";
import { useEffect, useState } from "react";
import { MobileViewGameList } from "../components/home/MobileViewGameList";
import { LoadingPage } from "./LoadingPage";
import { NaverMapEL } from "../components/naver/NaverMap";
import { NotFoundPage } from "./NotFoundPage";
import useGeolocationStore from "../store/useGeolocationStore";

import { Link } from "react-router-dom";
import { FilteredMatchItem } from "../components/game/FilteredMatchItem";
import { NoGamesAvailableBox } from "../components/home/NoGamesAvailableBox";

export const HomePage = () => {
  const [selectingDate, setSelectedDate] = useState(new Date());
  const [gameSearched, isGameSearched] = useState(false);
  const { setCurrentMyLocation } = useGeolocationStore();

  const [filteredGames, setFilteredGames] = useState<string[]>([]);
  const [displayCollapsedList, setDisplayCollapsedList] = useState(false);

  const formatDate = selectingDate.toISOString().split("T")[0];
  const {
    data: allGamesData,
    isPending,
    refetch,
    isError,
  } = useGetGamesDataQuery(formatDate);

  const handleSearchCoords = (latitude: number, longitude: number) => {
    isGameSearched(true);

    setCurrentMyLocation(latitude, longitude);
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [selectingDate, refetch, formatDate]);

  if (isPending) {
    return <LoadingPage />;
  }

  if (isError) {
    return <NotFoundPage />;
  }

  return (
    <main className="laptop:mb-[69px] mobile:my-0">
      {/* <div className="  flex flex-col gap-6  w-full laptop:px-[13rem]  mx-auto  max-w-[90rem] "> */}
      <div className="  flex flex-col gap-6  w-full   mx-auto  max-w-[1024px] ">
        <HeroCarousel />
        <div className="flex   tablet:flex-row mobile:flex-col tablet:gap-10 mobile:gap-4 mobile:-mt-4 ">
          <div className="space-y-4">
            <DesktopViewDatesList
              selectingDate={selectingDate}
              setSelectedDate={setSelectedDate}
            />
            <div
              style={{ scrollbarWidth: "thin" }}
              id="gameListBox"
              className=" w-[371px] p-3  mobile:hidden tablet:block space-y-3 rounded-lg bg-[#FBFBFB]  h-[409px] overflow-y-scroll"
            >
              {!displayCollapsedList &&
                allGamesData?.data.map((game: GameDetailField) => {
                  return (
                    <div key={game.id}>
                      <MatchItem
                        game={game}
                        handleSearchCoords={handleSearchCoords}
                      />
                    </div>
                  );
                })}
              {/* // /> */}
              {!displayCollapsedList ||
                (allGamesData?.data.length < 1 && (
                  <NoGamesAvailableBox data={allGamesData} />
                ))}
              {displayCollapsedList &&
                allGamesData?.data.map((game: GameDetailField) => {
                  for (const address of filteredGames) {
                    if (address === game.court.address) {
                      return (
                        <Link to={`/games/detail/${game.id}`} key={game.id}>
                          <FilteredMatchItem
                            game={game}
                            handleSearchCoords={handleSearchCoords}
                          />
                          <hr className="w-full bg-[#ECECEC] my-2" />
                        </Link>
                      );
                    }
                  }
                })}
            </div>
          </div>{" "}
          <NaverMapEL
            allGamesData={allGamesData}
            refetch={refetch}
            gameSearched={gameSearched}
            isGameSearched={isGameSearched}
            setFilteredGames={setFilteredGames}
            setDisplayCollapsedList={setDisplayCollapsedList}
          />
          <MobileViewDatesList setSelectedDate={setSelectedDate} />
        </div>
        <MobileViewGameList
          formatDate={formatDate}
          handleSearchCoords={handleSearchCoords}
          displayCollapsedList={displayCollapsedList}
          filteredGames={filteredGames}
        />
      </div>
    </main>
  );
};
