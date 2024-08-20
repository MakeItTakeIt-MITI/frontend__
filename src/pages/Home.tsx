import { useEffect, useState } from "react";
import Hero from "../components/home/Hero";
import MainContent from "../components/home/MainContent";
import GameFilterContainer from "../components/game-filter/GameFilterContainer";
import Footer from "../components/common/Footer";
import { useGamesDataHook } from "../hooks/useGamesDataHook";
import useDateSelectionStore from "../store/useDateSelectionStore";
import useTimeFieldStore from "../store/useTimeStore";
import useStatusSelectionStore from "../store/useStatusSelectionStore";

export const Home = () => {
  // react hooks
  const [displayFilterBox, setDisplayFilterBox] = useState(false);

  //zustand store
  const { yearMonthDay } = useDateSelectionStore();
  const { formattedFullTime } = useTimeFieldStore();
  const { selectedStatuses } = useStatusSelectionStore();

  // data fetching
  const { data: allGamesData, refetch } = useGamesDataHook({
    startdate: yearMonthDay,
    starttime: formattedFullTime,
    status: selectedStatuses,
  });

  const handleCloseFilterBox = () => {
    setDisplayFilterBox(false);
  };

  const handleDisplayFilterBox = () => {
    setDisplayFilterBox(true);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = displayFilterBox ? "hidden" : "auto";
    }

    refetch();
  }, [displayFilterBox, allGamesData, refetch, selectedStatuses]);
  return (
    <>
      {displayFilterBox && (
        <GameFilterContainer handleCloseFilterBox={handleCloseFilterBox} />
      )}

      <Hero />
      <MainContent
        handleDisplayFilterBox={handleDisplayFilterBox}
        allGamesData={allGamesData?.data}
      />
      <Footer />
    </>
  );
};
