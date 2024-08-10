import { useEffect, useState } from "react";
import Hero from "../components/\bv11_homepage/Hero";
import MainContent from "../components/\bv11_homepage/MainContent";
import GameFilterContainer from "../components/v11_filterbox/GameFilterContainer";
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
