import banner from "../assets/banner-2.svg";
import { Hero } from "../components/main/Hero";
import { AdvertisementBanner } from "../components/AdvertisementBanner";

import { KakaoMap } from "../components/kakao/KakaoMap";

import { GameDetailCard } from "../components/main/mobile/GameDetailCard";
import { DatesListContainer } from "../components/main/DatesListContainer";
import { useGetGamesDataQuery } from "../hooks/useGetGamesDataQuery";
import { DateSelectorBox } from "../components/main/browser/DateSelectorBox";
import { GameDetailField } from "../interface/gameInterface";
import { MatchListDetail } from "../components/game/MatchesListContainer";
import { useState } from "react";

export const Home = () => {
  const [selectingDate, setSelectedDate] = useState(new Date());
  const formatDate = selectingDate.toISOString().split("T")[0];
  console.log(formatDate);

  const { data: allGamesData, refetch, isPending } = useGetGamesDataQuery();
  console.log(allGamesData);

  return (
    <div className="flex flex-col gap-6  w-full tablet:px-[13rem] mx-auto  max-w-[90rem]">
      <Hero
        backgroundImage={banner}
        launchText="MITI 서비스 런칭"
        recruitText="MITI와 함께, 경기 모집부터"
        managementText="관리, 결제, 매칭까지 한번에."
      />
      <div className=" flex flex-col ">
        <div className="flex tablet:flex-row mobile:flex-col tablet:gap-10 mobile:gap-4 ">
          <div className="flex flex-col gap-4">
            <DateSelectorBox
              selectingDate={selectingDate}
              setSelectedDate={setSelectedDate}
            />
            <div className="mobile:hidden tablet:block px-4 py-2 flex flex-col gap-4 rounded-lg bg-[#FBFBFB]  h-[409px] overflow-y-scroll">
              {allGamesData?.data.map((game: GameDetailField) => {
                return (
                  <>
                    <MatchListDetail game={game} />
                    <hr className="w-full bg-[#ECECEC] my-2" />
                  </>
                );
              })}
            </div>
          </div>{" "}
          <KakaoMap allGamesData={allGamesData} />
          <DatesListContainer isPending={isPending} />
        </div>
      </div>
      {/* <div className=" flex mobile:flex-col  mobile:gap-4 tablet:flex-row tablet:flex-wrap  items-center   "> */}
      <GameDetailCard />
      {/* </div> */}

      <AdvertisementBanner />
    </div>
  );
};
