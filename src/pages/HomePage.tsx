import banner from "../assets/banner-2.svg";
import { Hero } from "../components/home/Hero";
import { AdvertisementBanner } from "../components/AdvertisementBanner";
import { MobileViewDatesList } from "../components/home/MobileViewDatesList";
import { useGetGamesDataQuery } from "../hooks/games/useGetGamesDataQuery";
import { DesktopViewDatesList } from "../components/home/DesktopViewDatesList";
import { GameDetailField } from "../interface/gameInterface";
import { MatchItem } from "../components/game/MatchItem";
import { useEffect, useState } from "react";
import { MobileViewGameList } from "../components/home/mobile/MobileViewGameList";
import { LoadingPage } from "./LoadingPage";
import { NaverMapEL } from "../components/naver/NaverMap";
import { NotFoundPage } from "./NotFoundPage";
import useGeolocationStore from "../store/useGeolocationStore";

import { Link } from "react-router-dom";
import { FilteredMatchItem } from "../components/game/FilteredMatchItem";

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
    <div className="  flex flex-col gap-6  w-full laptop:px-[13rem] tablet:px-[2rem] mx-auto  max-w-[90rem] tablet:mb-4 mobile:mb-16">
      <Hero
        backgroundImage={banner}
        launchText="MITI 서비스 런칭"
        recruitText="MITI와 함께, 경기 모집부터"
        managementText="관리, 결제, 매칭까지 한번에."
      />
      <div className="flex  tablet:flex-row mobile:flex-col tablet:gap-10 mobile:gap-4 mobile:-mt-4 ">
        <div className="flex flex-col gap-4">
          <DesktopViewDatesList
            selectingDate={selectingDate}
            setSelectedDate={setSelectedDate}
          />
          <div className=" mobile:hidden tablet:block flex flex-col gap-4 rounded-lg bg-[#FBFBFB]  h-[409px] overflow-y-scroll">
            {!displayCollapsedList &&
              allGamesData &&
              allGamesData?.data.map((game: GameDetailField) => {
                return (
                  <div key={game.id}>
                    <MatchItem
                      game={game}
                      handleSearchCoords={handleSearchCoords}
                    />
                    <hr className="w-full bg-[#ECECEC] my-2" />
                  </div>
                );
              })}
            {displayCollapsedList &&
              allGamesData.data.map((game: GameDetailField) => {
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
      />
      <div className="mobile:px-4 tablet:px-0 mb-2">
        <AdvertisementBanner />
      </div>
    </div>
  );
};
