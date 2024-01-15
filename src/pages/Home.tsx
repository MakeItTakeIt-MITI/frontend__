import banner from "../assets/banner-2.svg";
import { KakaoMap } from "../components/kakao/KakaoMap";
import { GameDetailCard } from "../components/main/GameDetailCard";
import { Hero } from "../components/main/Hero";
import { DateBox } from "../components/main/DateBox";
import { AdvertisementBanner } from "../components/AdvertisementBanner";
import { DateSelectorBox } from "../components/main/DateSelectorBox";
import leftArrow from "../assets/Chevron_Left_MD.svg";
import rightArrow from "../assets/Chevron_Right_MD.svg";
import { BrowserHomeView } from "../components/main/BrowserHomeView";

export const Home = () => {
  return (
    // <div className="w-full mx-auto max-w-[90rem] px-[13rem] bg-red-200">

    <div className="w-full mobile:mb-[4rem]   tablet:max-w-[90rem] tablet:px-[13rem] mx-auto ">
      <Hero
        backgroundImage={banner}
        launchText="MITI 서비스 런칭"
        recruitText="MITI와 함께, 경기 모집부터"
        managementText="관리, 결제, 매칭까지 한번에."
      />
      <BrowserHomeView />
      {/* <KakaoMap />
      <div className="flex items-center py-4 justify-between ">
        <div
          className="w-9 h-9 bg-[#9C99B0] rounded-full flex items-center justify-center hover:cursor-pointer"
          hover:cursor-pointer
        >
          <img
            src={rightArrow}
            alt="left arrow"
            className="text-white rotate-180"
          />
        </div>
        <DateBox />
        <div className="w-9 h-9 bg-[#9C99B0] rounded-full flex items-center justify-center hover:cursor-pointer">
          <img src={rightArrow} alt="left arrow" className="text-white" />
        </div>
      </div>
      <div className="mx-[16px] mt-[20px] mb-[30px]">
        <span>16개의 매치</span>
      </div>
      <div className="mx-[16px] flex flex-col gap-4">
        <GameDetailCard />
        <GameDetailCard />
        <GameDetailCard />
        <GameDetailCard />
      </div> */}
      <AdvertisementBanner />
    </div>
  );
};
