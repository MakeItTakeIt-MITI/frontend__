import Footer from "../components/common/Footer";
import Hero from "../components/landing/Hero";

import Games from "../components/landing/Games";
import Payments from "../components/landing/Payments";
import Courts from "../components/landing/Courts";

const Landing = () => {
  return (
    <div className=" w-full bg-[#000]">
      <Hero />
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
