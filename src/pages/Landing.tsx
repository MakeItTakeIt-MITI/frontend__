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
      <Footer />
    </div>
  );
};

export default Landing;
