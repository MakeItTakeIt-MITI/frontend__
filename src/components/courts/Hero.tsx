import hero from "../../assets/v11/court_hero.png";

const Hero = () => {
  return (
    <div className="sm:h-[16rem] md:h-[20rem] flex items-center justify-center bg-[#000] relative">
      <img src={hero} alt="hero" className="h-full " />
      {/* content */}
      <div className=" sm:hidden md:block absolute top-0 bottom-0 left-[360px] w-[37.725rem] bg-[#151e1c] "></div>
      <div className="absolute top-0 bottom-0 flex flex-col sm:items-center md:items-start justify-center gap-[1.25rem] text-[#fff] ">
        <p className="sm:text-sm md:text-base font-bold">MITI 서비스 런칭</p>
        <h1 className="font-bold  sm:text-[24px] md:text-[44px]">
          우리 동네 농구 핫 플레이스는 어디?
        </h1>
        <p className="sm:font-[300] md:font-[400] sm:text-[14px] md:text-[20px]">
          주변 경기장을 검색해 보세요.
        </p>
      </div>
    </div>
  );
};

export default Hero;
