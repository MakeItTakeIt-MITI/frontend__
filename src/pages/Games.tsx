import { useEffect, useState } from "react";
import Hero from "../components/games/Hero";
import MainContent from "../components/games/MainContent";
import GameFilterContainer from "../components/game-filter/GameFilterContainer";
import Footer from "../components/common/Footer";
import { useGamesDataHook } from "../hooks/useGamesDataHook";
import useDateSelectionStore from "../store/useDateSelectionStore";
import useTimeFieldStore from "../store/useTimeStore";
import useStatusSelectionStore from "../store/useStatusSelectionStore";
import { DATES } from "../constants/calender";
import useGameFilterStore from "../store/useGameFilterStore";

export const Games = () => {
  const INITIAL_DATES = DATES();
  const FIRST_DATE = INITIAL_DATES[0];
  const initialDateField = `${FIRST_DATE.month}.${FIRST_DATE.date} (${FIRST_DATE.dayKorean})`;
  const yearMonthToDate = `${FIRST_DATE.year}-${FIRST_DATE.formattedMonth}-${FIRST_DATE.formattedDate}`;

  // react hooks
  const [displayFilterBox, setDisplayFilterBox] = useState(false);

  //zustand store
  const { yearMonthDay, setYearMonthDay, setDateField } =
    useDateSelectionStore();
  const { formattedFullTime, resetTimeField } = useTimeFieldStore();
  const { selectedStatuses, resetStatuses } = useStatusSelectionStore();
  const { setSelectedDate, resetFilterHeader } = useGameFilterStore();

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

  const handleResetFilters = () => {
    setYearMonthDay(yearMonthToDate);
    setSelectedDate(initialDateField);
    setDateField(initialDateField);
    resetFilterHeader();
    resetTimeField();
    resetStatuses();
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
        <GameFilterContainer
          handleCloseFilterBox={handleCloseFilterBox}
          handleResetFilters={handleResetFilters}
        />
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
