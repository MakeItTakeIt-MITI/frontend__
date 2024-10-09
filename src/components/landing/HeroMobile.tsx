import background from "../../assets/v11/mobile-landing.png";
import HeroContext from "./HeroContext";
import "./landing.css";

const HeroMobile = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[650px] w-full relative md:hidden"
    >
      <HeroContext />
    </section>
  );
};

export default HeroMobile;
