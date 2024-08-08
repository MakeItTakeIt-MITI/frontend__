import hero from "../../assets/v11/hero.png";
import hero_shadow from "../../assets/v11/hero-shadow.png";
import playstore from "../../assets/v11/google-play.svg";
import applestore from "../../assets/v11/apple-store.svg";

const Hero = () => {
  return (
    <>
      {/* Non-mobile */}
      <section className="sm:hidden md:block w-full h-[20rem] bg-primary-green">
        <div className="  flex justify-end items-center pr-[11rem]">
          <div className=" w-[511px] h-[120px] flex flex-col gap-4 text-[#fff]">
            <span className="font-bold">MITI 서비스 런칭</span>
            <h1 className="text-[44px] font-bold">
              오늘 퇴근하고 농구 어떠세요?{" "}
            </h1>
            <span className="text-5 font-[400]">
              당신 근처의 경기를 지금 찾아보세요.
            </span>
          </div>
          <div className="w-[549px]">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="sm:block md:hidden  bg-full bg-cover bg-no-repeat px-[1.25rem] pb-[60px] bg-primary-green">
        {/* img */}
        <div className="mx-auto   ">
          <img src={hero_shadow} alt="hero shadow" className="h-full w-full" />
        </div>
        <div className="space-y-10">
          {/* text */}
          <div className="space-y-6 flex flex-col items-center text-[#fff]">
            <div className="space-y-3 flex flex-col items-center font-bold">
              <h2 className="text-sm ">MITI 서비스 런칭</h2>
              <h1 className="text-2xl ">오늘 퇴근하고 농구 어떠세요? </h1>
            </div>
            <h3 className="font-[300] text-sm">
              당신 근처의 경기를 지금 찾아보세요.
            </h3>
          </div>
          {/* app */}
          <div className="flex  items-center justify-center gap-[14px] text-[#fff]    py-2 px-4">
            <button
              type="button"
              className=" rounded-[10px] h-10  flex gap-2 items-center py-2 px-4 bg-dark-card"
            >
              <img src={playstore} alt="playstore" />
              <span className="font-bold text-[12px] ">Google Play</span>
            </button>
            <button
              type="button"
              className=" rounded-[10px] h-10 flex gap-2 items-center py-2 px-4 bg-dark-card"
            >
              <img src={applestore} alt="applestore" />
              <span className="font-bold text-[12px] ">Apple Store</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
