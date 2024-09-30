import background from "../../assets/v11/landing-bg.png";

import HeroContext from "./HeroContext";
const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative h-[800px] w-full sm:hidden md:block"
    >
      <HeroContext />
    </section>
  );
};

export default Hero;
