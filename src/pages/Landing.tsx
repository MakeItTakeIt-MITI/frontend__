import Footer from "../components/common/Footer";
import Hero from "../components/landing/Hero";

import Games from "../components/landing/Games";
import Payments from "../components/landing/Payments";
import Courts from "../components/landing/Courts";
import HeroMobile from "../components/landing/HeroMobile";

const Landing = () => {
  return (
    <div className=" w-full bg-[#000]">
      <Hero />
      <HeroMobile />
      <Games />
      <Courts />
      <Payments />
      <div className="h-[32.5rem] w-full pt-[6.12rem] pb-[8.88rem] bg-primary-black">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
