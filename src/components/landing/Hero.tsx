import background from "../../assets/v11/landing-bg.png";
import googlePlay from "../../assets/v11/google-play-black.svg";
import appleStore from "../../assets/v11/apple-store-black.svg";
const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative h-[800px] w-full"
    >
      <div className="z-30  flex flex-col justify-end h-full  space-y-[2rem] pl-[22.5rem] pb-[8.44rem]">
        <h1 className=" h-10 text-[#eafeff] text-[40px] font-bold  leading-[60px]">
          MITI 서비스 런칭
        </h1>
        <h2 className="text-[#fff] text-[52px] font-bold  leading-[78px]">
          농구 경기 더 쉽게, 더 즐겁게!
        </h2>
        <p className="text-[#fff] text-xl leading-[30px]">
          번거로움은 빼고 농구에 재미를 더하세요! <br />
          지금 다운로드하고 오늘 퇴근 후에 농구 어떠세요?
        </p>

        <div className="flex items-center gap-4 text-primary-white">
          <button
            type="button"
            className="text-[18px] font-bold flex items-center justify-center gap-3 bg-[#7FEEF6] h-[58px] w-[180px] rounded-[14px] text-secondary-black"
          >
            <img src={googlePlay} alt="Google store" />
            <p>Google Play</p>
          </button>
          <button
            type="button"
            className="text-[18px] font-bold flex items-center justify-center gap-3 bg-[#7FEEF6] h-[58px] w-[180px] rounded-[14px] text-secondary-black"
          >
            <img src={appleStore} alt="Apple Store" />
            <p>App Store</p>
          </button>
          <button> </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
