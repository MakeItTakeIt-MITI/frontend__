import { HeroCarousel } from "../components/home/Hero";
import { MobileViewDatesList } from "../components/home/MobileViewDatesList";
import { useGetGamesDataQuery } from "../hooks/games/useGetGamesDataQuery";
import { DesktopViewDatesList } from "../components/home/DesktopViewDatesList";
import { useEffect, useState } from "react";
import { MobileViewGameList } from "../components/home/MobileViewGameList";
import { NaverMapEL } from "../components/naver/NaverMap";
import { NotFoundPage } from "./NotFoundPage";
import useGeolocationStore from "../store/useGeolocationStore";
import { DesktopGameListContainer } from "../components/home/DesktopGameListContainer";
import { HomeSkeleton } from "../components/home/HomeSkeleton";

export const HomePage = () => {
  const [selectingDate, setSelectedDate] = useState(new Date());
  const [gameSearched, isGameSearched] = useState(false);
  const { setCurrentMyLocation } = useGeolocationStore();

  const [filteredGames, setFilteredGames] = useState<string[]>([]);
  const [displayCollapsedList, setDisplayCollapsedList] = useState(false);

  const formatDate = selectingDate?.toISOString().split("T")[0];
  const today = new Date().toISOString().split("T")[0];

  const {
    data: allGamesData,
    isPending,
    refetch,
    isError,
  } = useGetGamesDataQuery(formatDate ? formatDate : today);

  const handleSearchCoords = (latitude: number, longitude: number) => {
    isGameSearched(true);

    setCurrentMyLocation(latitude, longitude);
    refetch();
  };
  useEffect(() => {
    refetch();
  }, [selectingDate, refetch, formatDate, allGamesData, filteredGames]);

  if (isError) {
    return <NotFoundPage />;
  }

  return (
    <>
      {isPending ? (
        <HomeSkeleton />
      ) : (
        <section className="laptop:mb-[69px] mobile:my-0">
          <div className="  flex flex-col gap-6  w-full   mx-auto  max-w-[1024px] ">
            <HeroCarousel />
            <div className="flex   tablet:gap-10   ">
              <div className="space-y-4">
                <DesktopViewDatesList
                  selectingDate={selectingDate}
                  setSelectedDate={setSelectedDate}
                />
                <DesktopGameListContainer
                  allGamesData={allGamesData}
                  displayCollapsedList={displayCollapsedList}
                  handleSearchCoords={handleSearchCoords}
                  filteredGames={filteredGames}
                />
              </div>{" "}
              <NaverMapEL
                allGamesData={allGamesData}
                refetch={refetch}
                gameSearched={gameSearched}
                isGameSearched={isGameSearched}
                filteredGames={filteredGames}
                setFilteredGames={setFilteredGames}
                setDisplayCollapsedList={setDisplayCollapsedList}
                displayCollapsedList={displayCollapsedList}
              />
            </div>
            <MobileViewDatesList setSelectedDate={setSelectedDate} />

            <MobileViewGameList
              formatDate={formatDate}
              handleSearchCoords={handleSearchCoords}
              displayCollapsedList={displayCollapsedList}
              filteredGames={filteredGames}
            />
          </div>
        </section>
      )}
    </>
  );
};
