import hero from "../assets/v11/landing.png";
import Footer from "../components/common/Footer";
const Landing = () => {
  return (
    <div className=" w-full  flex justify-center flex-col bg-[#000]">
      {/* first layer */}
      <div
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "800px",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[800px]"
      ></div>

      {/* second layer */}
      <div className="w-full h-[800px] bg-dark-card"></div>
      <div className="w-full h-[800px] bg-secondary-black"></div>
      <div className="w-full h-[800px] bg-light-dark"></div>
      <Footer />
    </div>
  );
};

export default Landing;
