import background from "../../assets/v11/landing.png";
import HeroContext from "./HeroContext";

const HeroMobile = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "-65px",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[650px] w-full relative md:hidden"
    >
      <HeroContext />
    </section>
  );
};

export default HeroMobile;
