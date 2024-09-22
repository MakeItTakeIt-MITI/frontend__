import Footer from "../components/common/Footer";
import Hero from "../components/landing/Hero";
import games from "../assets/v11/landing-games.png";
import courts from "../assets/v11/landing-court.png";
import payment from "../assets/v11/landing-payment.png";
import Games from "../components/landing/Games";

const Landing = () => {
  return (
    <div className=" w-full bg-[#000]">
      {/* first layer */}
      <Hero />

      {/* second layer */}
      <Games />
      {/*  */}
      <div className="w-full h-[800px] bg-secondary-black">
        <img src={courts} alt="games mobile page" />
      </div>
      {/*  */}
      <div className="w-full h-[800px] bg-light-dark">
        <img src={payment} alt="games mobile page" />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
