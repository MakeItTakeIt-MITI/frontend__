import Footer from "../components/common/Footer";
import Hero from "../components/landing/Hero";

import HeroMobile from "../components/landing/HeroMobile";

import Games from "../components/landing/Games";
import GamesMobile from "../components/landing/GamesMobile";
import Courts from "../components/landing/Courts";
import Payments from "../components/landing/Payments";
import CourtsMobile from "../components/landing/CourtsMobile";
import PaymentsMobile from "../components/landing/PaymentsMobile";

const Landing = () => {
  return (
    <div className=" w-full bg-[#000]">
      <Hero />
      <HeroMobile />
      <Games />
      <GamesMobile />
      <Courts />
      <CourtsMobile />
      <Payments />
      <PaymentsMobile />

      <div className="h-[32.5rem] w-full pt-[6.12rem] pb-[8.88rem] bg-primary-black">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
