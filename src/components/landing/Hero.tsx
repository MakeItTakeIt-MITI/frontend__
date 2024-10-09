import hero from "../../assets/v11/landing-hero-bg.png";
import "./landing.css";

import HeroContext from "./HeroContext";
const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="relative h-[800px] w-full sm:hidden md:block"
    >
      {/* <img src={} alt="" /> */}
      <HeroContext />
    </section>
  );
};

export default Hero;
