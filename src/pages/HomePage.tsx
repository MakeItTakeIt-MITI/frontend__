import banner from "../assets/banner-2.svg";
import { Hero } from "../components/home/Hero";
import { AdvertisementBanner } from "../components/AdvertisementBanner";
import { KakaoMap } from "../components/kakao/KakaoMap";
import { MobileViewDatesList } from "../components/home/MobileViewDatesList";
import { useGetGamesDataQuery } from "../hooks/useGetGamesDataQuery";
import { DesktopViewDatesList } from "../components/home/DesktopViewDatesList";
import { GameDetailField } from "../interface/gameInterface";
import { MatchListDetail } from "../components/game/MatchesListContainer";
import { useEffect, useState } from "react";
import { MobileViewGameList } from "../components/home/mobile/MobileViewGameList";
import { LoadingPage } from "./LoadingPage";

export const HomePage = () => {
  const [selectingDate, setSelectedDate] = useState(new Date());
  const [searchAddress, setSearchAddress] = useState("");

  const formatDate = selectingDate.toISOString().split("T")[0];
  const {
    data: allGamesData,
    isPending,
    refetch,
  } = useGetGamesDataQuery(formatDate);

  const handleSearchAddress = (address: string) => {
    setSearchAddress(address);
  };

  useEffect(() => {
    refetch();
  }, [selectingDate, refetch, formatDate]);

  if (isPending) {
    return <LoadingPage />;
  }

  return (
    <div className="flex flex-col gap-6  w-full tablet:px-[13rem] mx-auto  max-w-[90rem] tablet:mb-4 mobile:mb-16">
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
          <div className="mobile:hidden tablet:block px-4 py-2 flex flex-col gap-4 rounded-lg bg-[#FBFBFB]  h-[409px] overflow-y-scroll">
            {allGamesData
              ? allGamesData?.data.map((game: GameDetailField) => {
                  return (
                    <div key={game.id}>
                      <MatchListDetail
                        game={game}
                        handleSearchAddress={handleSearchAddress}
                      />
                      <hr className="w-full bg-[#ECECEC] my-2" />
                    </div>
                  );
                })
              : null}
          </div>
        </div>{" "}
        <KakaoMap allGamesData={allGamesData} searchAddress={searchAddress} />
        <MobileViewDatesList setSelectedDate={setSelectedDate} />
      </div>
      <MobileViewGameList
        formatDate={formatDate}
        handleSearchAddress={handleSearchAddress}
      />
      <div className="mobile:px-4 tablet:px-0 mb-2">
        <AdvertisementBanner />
      </div>
    </div>
  );
};
