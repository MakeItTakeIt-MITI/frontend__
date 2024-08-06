import { useEffect, useState } from "react";
import Hero from "../components/\bv11_homepage/Hero";
import MainContent from "../components/\bv11_homepage/MainContent";
import GameFilterContainer from "../components/v11_filterbox/GameFilterContainer";

export const Home = () => {
  const [displayFilterBox, setDisplayFilterBox] = useState(false);

  // FILTER TAB ITEMS
  const [selectedDate, setSelectedDate] = useState<string>("날짜");
  const [selectedTimeDate, setSelectedTimeDate] =
    useState<string>("경기 시작 시간");
  const [selectedStatus, setSelectedStatus] = useState<string>("경기 상태");

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
  }, []);
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
