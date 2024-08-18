import hero from "../../assets/v11/court_hero.png";

const Hero = () => {
  return (
    <div className="h-[20rem] flex items-center justify-center bg-[#000] relative">
      <img src={hero} alt="hero" className="h-full" />
      {/* content */}
      <div className="absolute top-0 bottom-0 left-[360px] w-[37.725rem] bg-[#151e1c] "></div>
      <div className="absolute top-0 bottom-0 flex flex-col justify-center gap-[1.25rem] text-[#fff] ">
        <p className="font-bold">MITI 서비스 런칭</p>
        <h1 className="font-bold  text-[44px]">
          우리 동네 농구 핫 플레이스는 어디?
        </h1>
        <p className="font-[400] text-[20px]">주변 경기장을 검색해보세요.</p>
      </div>
    </div>
  );
};

export default Hero;
