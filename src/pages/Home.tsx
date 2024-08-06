import { useEffect, useState } from "react";
import Hero from "../components/\bv11_homepage/Hero";
import MainContent from "../components/\bv11_homepage/MainContent";
import GameFilterContainer from "../components/v11_filterbox/GameFilterContainer";

export const Home = () => {
  const [displayFilterBox, setDisplayFilterBox] = useState(false);

  // FILTER TAB ITEMS
  const [selectedDate, setSelectedDate] = useState<string>("날짜");
  const [selectedTimeDate, setSelectedTimeDate] = useState("경기 시작 시간");
  const [selectedStatus, setSelectedStatus] = useState("경기 상태");

  const handleDisplayFilterBox = () => {
    setDisplayFilterBox(true);
  };
  const handleCloseFilterBox = () => {
    setDisplayFilterBox(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = displayFilterBox ? "hidden" : "auto";
    }
  }, [displayFilterBox]);
  return (
    <>
      {displayFilterBox && (
        <GameFilterContainer
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTimeDate={selectedTimeDate}
          setSelectedTimeDate={setSelectedTimeDate}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          handleCloseFilterBox={handleCloseFilterBox}
        />
      )}

      <Hero />
      <MainContent
        selectedDate={selectedDate}
        selectedTimeDate={selectedTimeDate}
        selectedStatus={selectedStatus}
        handleDisplayFilterBox={handleDisplayFilterBox}
      />
    </>
  );
};
