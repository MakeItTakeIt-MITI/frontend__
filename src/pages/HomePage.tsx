import banner from "../assets/banner-2.svg";
import { Hero } from "../components/home/Hero";
import { AdvertisementBanner } from "../components/AdvertisementBanner";
import { MobileViewDatesList } from "../components/home/MobileViewDatesList";
import { useGetGamesDataQuery } from "../hooks/games/useGetGamesDataQuery";
import { DesktopViewDatesList } from "../components/home/DesktopViewDatesList";
import { GameDetailField } from "../interface/gameInterface";
import { MatchListDetail } from "../components/game/MatchesListContainer";
import { useEffect, useState } from "react";
import { MobileViewGameList } from "../components/home/mobile/MobileViewGameList";
import { LoadingPage } from "./LoadingPage";
import { NaverMapEL } from "../components/naver/NaverMap";
import { NotFoundPage } from "./NotFoundPage";
import useGeolocationStore from "../store/useGeolocationStore";
import { MatchTags } from "../components/game/MatchTags";

import groupIcon from "../assets/people.svg";
import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../stories/Tags.stories";
import { Link } from "react-router-dom";
// import { KakaoMapV2 } from "../components/kakao/KakaoMapV2";
// import { KakaoMapV2 } from "../components/kakao/KakaoMapV2";
// import { NaverMapEL } from "../components/naver/NaverMap";

export const HomePage = () => {
  const [selectingDate, setSelectedDate] = useState(new Date());

  const [gameSearched, isGameSearched] = useState(false);
  const { setCurrentMyLocation } = useGeolocationStore();

  const [filteredGames, setFilteredGames] = useState<string[]>([]);
  const [displayCollapsedList, setDisplayCollapsedList] = useState(false);

  // const [gameClicked, isGameClicked] = useState(false);
  // const [displyModal, setDisplayModal] = useState(false);
  // console.log(filteredGames);

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
          <div className=" mobile:hidden tablet:block px-4 py-2 flex flex-col gap-4 rounded-lg bg-[#FBFBFB]  h-[409px] overflow-y-scroll">
            {!displayCollapsedList &&
              allGamesData &&
              allGamesData?.data.map((game: GameDetailField) => {
                return (
                  <div key={game.id}>
                    <MatchListDetail
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
                        <div
                          onClick={() => {
                            const { latitude, longitude } = game.court;
                            handleSearchCoords(
                              Number(latitude),
                              Number(longitude)
                            );
                          }}
                          className="hover:cursor-pointer"
                        >
                          <div className="flex flex-col   gap-1">
                            {game.game_status === "open" && (
                              <MatchTags {...RecruitingTag.args} />
                            )}
                            {game.game_status === "canceled" && (
                              <MatchTags {...GameCancelledTag.args} />
                            )}
                            {game.game_status === "closed" && (
                              <MatchTags {...RecruitingCompletedTag.args} />
                            )}
                            {game.game_status === "completed" && (
                              <MatchTags {...GameFinishedTag.args} />
                            )}

                            <h2 className="font-bold text-[18px] truncate">
                              {game.title}{" "}
                            </h2>
                            <p className="text-[14px] text-gray-500">
                              {`${game.starttime.slice(
                                0,
                                -3
                              )} ~ ${game.endtime.slice(0, -3)}`}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <img
                                  src={groupIcon}
                                  alt="group icon"
                                  className="w-5"
                                />
                                <p className="text-sm">
                                  {game.num_of_participations} /{" "}
                                  {game.max_invitation}
                                </p>
                              </div>
                              <p className="text-[14px] text-[#4065F6] font-bold">
                                {game.fee.toLocaleString("ko-KR", {
                                  style: "currency",
                                  currency: "KRW",
                                })}
                              </p>
                            </div>
                          </div>
                        </div>
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
