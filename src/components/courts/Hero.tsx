const Hero = () => {
  return (
    <div className="h-[20rem] flex items-center justify-center bg-[#000]">
      {/* content */}
      <div className="flex flex-col gap-[1.25rem] text-[#fff]">
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
