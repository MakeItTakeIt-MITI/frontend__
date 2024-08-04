// import { MobileViewDatesList } from "../components/homepage/MobileViewDatesList";
// import { useGetGamesDataQuery } from "../hooks/games/useGetGamesDataQuery";
// import { DesktopViewDatesList } from "../components/homepage/DesktopViewDatesList";
// import { useEffect, useState } from "react";
// import { MobileViewGameList } from "../components/homepage/MobileViewGameList";
// import { NaverMapEL } from "../components/naver/NaverMap";
// import { NotFoundPage } from "../app/routes/NotFoundPage";
// import useGeolocationStore from "../store/useGeolocationStore";
// import { DesktopGameListContainer } from "../components/homepage/DesktopGameListContainer";
// import Hero, { HeroCarousel } from "../components/homepage/Hero";

import Footer from "../components/common/Footer";
import Hero from "../components/homepage/v11/Hero";
import MainContent from "../components/homepage/v11/MainContent";

export const Home = () => {
  // const [selectingDate, setSelectedDate] = useState(new Date());
  // const [gameSearched, isGameSearched] = useState(false);
  // const { setCurrentMyLocation } = useGeolocationStore();

  // const [filteredGames, setFilteredGames] = useState<string[]>([]);
  // const [displayCollapsedList, setDisplayCollapsedList] = useState(false);

  // const formatDate = selectingDate?.toISOString().split("T")[0];
  // const today = new Date().toISOString().split("T")[0];

  // const {
  //   data: allGamesData,
  //   isPending,
  //   refetch,
  //   isError,
  // } = useGetGamesDataQuery(formatDate ? formatDate : today);

  // const handleSearchCoords = (latitude: number, longitude: number) => {
  //   isGameSearched(true);

  //   setCurrentMyLocation(latitude, longitude);
  //   refetch();
  // };
  // useEffect(() => {
  //   refetch();
  // }, [
  //   selectingDate,
  //   refetch,
  //   formatDate,
  //   allGamesData,
  //   displayCollapsedList,
  //   filteredGames,
  // ]);

  // if (isError) {
  //   return <NotFoundPage />;
  // }

  return (
    <main
      style={{
        scrollbarWidth: "thin",
      }}
      className=""
    >
      <Hero />
      <MainContent />
      {/* <section className="laptop:mb-[69px] mobile:my-0  tablet:px-[80px] laptop:px-0  ">
        <div className="  flex flex-col gap-6  w-full   mx-auto  max-w-[1024px] ">
          <HeroCarousel />
          <div className="flex   laptop:gap-10   ">
            <div className="space-y-4 tablet:hidden laptop:block">
              <DesktopViewDatesList
                selectingDate={selectingDate}
                setSelectedDate={setSelectedDate}
              />
              <DesktopGameListContainer
                allGamesData={allGamesData}
                displayCollapsedList={displayCollapsedList}
                handleSearchCoords={handleSearchCoords}
                filteredGames={filteredGames}
                isPending={isPending}
              />
            </div>{" "}
            <NaverMapEL
              allGamesData={allGamesData}
              refetch={refetch}
              gameSearched={gameSearched}
              isGameSearched={isGameSearched}
              setFilteredGames={setFilteredGames}
              setDisplayCollapsedList={setDisplayCollapsedList}
              displayCollapsedList={false}
            />
          </div>
          <div className="laptop:hidden mobile:block tablet:block ">
            {" "}
            <MobileViewDatesList setSelectedDate={setSelectedDate} />
            <MobileViewGameList
              formatDate={formatDate}
              handleSearchCoords={handleSearchCoords}
              displayCollapsedList={displayCollapsedList}
              filteredGames={filteredGames}
            />
          </div>
        </div>
      </section> */}
    </main>
  );
};
