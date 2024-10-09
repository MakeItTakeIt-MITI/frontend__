import googlePlay from "../../assets/v11/google-play-teal.svg";
import appleStore from "../../assets/v11/apple-store-teal.svg";

const HeroContext = () => {
  return (
    <div className="z-30  flex flex-col justify-end h-full  space-y-[2rem] sm:px-[1.5rem] md:pl-[22.5rem] md:pb-[8.44rem] sm:pb-[calc(5.87rem+0.75rem)] ">
      <p className=" opacity-0 toast md:text-[#A3A3A3]   md:text-[40px] sm:text-[#EBFFFF] sm:text-[24px] font-bold  ">
        MITI 서비스 런칭
      </p>
      <p className="opacity-0 toast text-[#fff]  md:text-[52px] sm:text-[24px]  font-bold  ">
        농구 경기 더 쉽게, 더 즐겁게!
      </p>
      <p className="opacity-0 toast text-[#fff]  sm:text-sm md:text-xl font-[400] ">
        번거로움은 빼고 농구에 재미를 더하세요! <br />
        지금 다운로드하고 오늘 퇴근 후에 농구 어떠세요?
      </p>
      <div
        className={`shake flex items-center sm:justify-center md:justify-start sm:gap-3 md:gap-4 text-primary-white sm:px-[17.5px] md:px-0  `}
      >
        <button
          type="button"
          className="text-[18px] text-sm font-[600] flex items-center justify-center gap-3 bg-[#363636]  sm:h-[45px] md:h-[58px] sm:w-[140px] md:w-[180px] rounded-[14px] text-[#BFF9FA] "
        >
          <img src={googlePlay} alt="Google store" />
          <p>Google Play</p>
        </button>
        <button
          type="button"
          className="text-[18px] text-sm font-[600] flex items-center justify-center gap-3 bg-[#363636] sm:h-[45px] md:h-[58px] sm:w-[140px] md:w-[180px] rounded-[14px] text-[#BFF9FA] "
        >
          <img src={appleStore} alt="Apple Store" />
          <p>App Store</p>
        </button>
      </div>{" "}
    </div>
  );
};

export default HeroContext;
