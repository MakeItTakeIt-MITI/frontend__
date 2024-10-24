import { useEffect, useState } from "react";
import MainContent from "../components/games/MainContent";
import GameFilterContainer from "../components/game-filter/GameFilterContainer";
import Footer from "../components/common/Footer";
import { useGamesDataHook } from "../hooks/useGamesDataHook";
import useDateSelectionStore from "../store/useDateSelectionStore";
import useTimeFieldStore from "../store/useTimeStore";
import useStatusSelectionStore from "../store/useStatusSelectionStore";

import useCurrentMonthStore from "../store/useCurrentMonthStore";

import hero from "../assets/v11/hero.png";
import mobile_hero from "../assets/v11/mobile-hero.png";
import { useFilterBox } from "../hooks/game-list-filters/useFilterBox";
import { useFilterBoxSettings } from "../hooks/game-list-filters/useFilterBoxSettings";

export const Games = () => {
  const [displayFilterBox, setDisplayFilterBox] = useState<boolean>(false);

  // react custom hooks
  const { handleToggleFilterBox } = useFilterBox(
    displayFilterBox,
    setDisplayFilterBox
  );
  const { handleResetFilters, handleApplyFilters } =
    useFilterBoxSettings(setDisplayFilterBox);

  //zustand store
  const { yearMonthDay } = useDateSelectionStore();
  const { formattedFullTime } = useTimeFieldStore();
  const { selectedStatuses } = useStatusSelectionStore();
  const { currentMonth } = useCurrentMonthStore();

  // fetch game list API
  const {
    data: allGamesData,
    refetch,
    isLoading,
  } = useGamesDataHook({
    startdate: yearMonthDay,
    starttime: formattedFullTime,
    status: selectedStatuses,
  });

  useEffect(() => {
    refetch();
  }, [selectedStatuses, refetch, displayFilterBox]);

  return (
    <>
      <HeroSection />
      <MobileHeroSection />
      <MainContent
        handleToggleFilterBox={handleToggleFilterBox}
        allGamesData={allGamesData?.data}
        isLoading={isLoading}
      />
      {displayFilterBox && (
        <GameFilterContainer
          handleToggleFilterBox={handleToggleFilterBox}
          handleResetFilters={handleResetFilters}
          handleApplyFilters={handleApplyFilters}
          currentMonth={currentMonth}
        />
      )}
      <Footer />
    </>
  );
};

const HeroSection = () => (
  <section className="sm:hidden md:block w-full h-[20rem] bg-primary-green">
    <div className="flex justify-end items-center pr-[11rem]">
      <div className="w-[511px] h-[120px] flex flex-col gap-4 text-[#fff]">
        <span className="font-bold">MITI 서비스 런칭</span>
        <h1 className="text-[44px] font-bold">오늘 퇴근하고 농구 어떠세요? </h1>
        <span className="text-5 font-[400]">
          당신 근처의 경기를 지금 찾아보세요.
        </span>
      </div>
      <div className="w-[549px]">
        <img src={hero} alt="hero" />
      </div>
    </div>
  </section>
);

const MobileHeroSection = () => (
  <section className="sm:block md:hidden h-[16.125rem] bg-full bg-cover bg-no-repeat bg-primary-green relative">
    <div className="mx-auto">
      <img src={mobile_hero} alt="hero shadow" className="h-full w-full" />
    </div>
    <div className="space-y-10">
      <div className="flexCenter flex-col gap-[1.5rem] text-[#fff] absolute bottom-[3.75rem] left-0 right-0 ">
        <div className="flexCenter flex-col gap-[0.75rem] font-bold">
          <h2 className="text-sm ">MITI 서비스 런칭</h2>
          <h1 className="text-2xl ">오늘 퇴근하고 농구 어떠세요? </h1>
        </div>
        <h3 className="font-[300] text-sm">
          당신 근처의 경기를 지금 찾아보세요.
        </h3>
      </div>
    </div>
  </section>
);
