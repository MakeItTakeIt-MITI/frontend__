import { useEffect, useState } from "react";
import Hero from "../components/home/Hero";
import MainContent from "../components/home/MainContent";
import GameFilterContainer from "../components/game-filter/GameFilterContainer";
import Footer from "../components/common/Footer";

export const Home = () => {
  const [displayFilterBox, setDisplayFilterBox] = useState(false);

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
  }, [displayFilterBox]);
  return (
    <>
      {displayFilterBox && (
        <GameFilterContainer handleCloseFilterBox={handleCloseFilterBox} />
      )}

      <Hero />
      <MainContent handleDisplayFilterBox={handleDisplayFilterBox} />
      <Footer />
    </>
  );
};
