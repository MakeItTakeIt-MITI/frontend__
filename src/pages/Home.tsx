import banner from "../assets/banner-2.svg";
import { Hero } from "../components/main/Hero";
import { AdvertisementBanner } from "../components/AdvertisementBanner";

import { KakaoMap } from "../components/kakao/KakaoMap";

import { GameDetailCard } from "../components/main/mobile/GameDetailCard";
import { DatesListContainer } from "../components/main/DatesListContainer";

export const Home = () => {
  return (
    <div className="w-full tablet:px-[13rem] mx-auto  max-w-[90rem]">
      <Hero
        backgroundImage={banner}
        launchText="MITI 서비스 런칭"
        recruitText="MITI와 함께, 경기 모집부터"
        managementText="관리, 결제, 매칭까지 한번에."
      />
      <div className=" flex flex-col px-2">
        <KakaoMap />

        <DatesListContainer />

        <div className=" flex mobile:flex-col mobile:gap-4 tablet:flex-row tablet:flex-wrap   ">
          <GameDetailCard />
        </div>
      </div>
      {/* <MobileHomeView /> */}
      {/* <BrowserHomeView /> */}

      <AdvertisementBanner />
    </div>
  );
};

{
  /* <KakaoMap />
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
      </div> */
}
