import banner from "../assets/banner-2.svg";
import { KakaoMap } from "../components/kakao/KakaoMap";
import { GameDetailCard } from "../components/main/GameDetailCard";
import { Hero } from "../components/main/Hero";
import { DateBox } from "../components/main/DateBox";

export const Home = () => {
  return (
    // <div className="w-full mx-auto max-w-[90rem] px-[13rem] bg-red-200">

    <div className="w-full tablet:max-w-[90rem] tablet:px-[13rem] mx-auto ">
      <Hero
        backgroundImage={banner}
        launchText="MITI 서비스 런칭"
        recruitText="MITI와 함께, 경기 모집부터"
        managementText="관리, 결제, 매칭까지 한번에."
      />
      <KakaoMap />
      <div className="flex items-center m-4 gap-4 overflow-hidden ">
        <DateBox />
      </div>
      <div className="mx-[16px] mt-[20px] mb-[30px]">
        <span>16개의 매치</span>
      </div>
      <div className="mx-[16px] flex flex-col gap-4">
        <GameDetailCard />
        <GameDetailCard />
      </div>
      {/* <SectionTitle title="⚡ 마감 ️12시간 전 매칭" /> */}
    </div>
  );
};
