import Footer from "../components/common/Footer";
import Hero from "../components/landing/Hero";

const Landing = () => {
  return (
    <div className=" w-full bg-[#000]">
      {/* first layer */}
      <Hero />

      {/* second layer */}
      <div className="w-full h-[800px] bg-dark-card"></div>
      <div className="w-full h-[800px] bg-secondary-black"></div>
      <div className="w-full h-[800px] bg-light-dark"></div>
      <Footer />
    </div>
  );
};

export default Landing;
