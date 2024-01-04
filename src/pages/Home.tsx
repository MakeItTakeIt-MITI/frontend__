import banner from "../assets/banner-2.svg";
import { KakaoMap } from "../components/kakao/KakaoMap";
import { GameDetailCard } from "../components/main/GameDetailCard";
import { Hero } from "../components/main/Hero";
import { DateBox } from "../components/main/DateBox";

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
        <GameDetailCard />
        <GameDetailCard />
      </div>
      {/* <SectionTitle title="⚡ 마감 ️12시간 전 매칭" /> */}
      <div className="bg-gray-200 relative mobile:w-screen mobile:px-[4rem] mobile:h-[40px] tablet:w-[1024px] tablet:h-[180px] border border-2-[#E8E8E8] rounded-xl my-[40px]">
        <div className="absolute top-[16px] right-[16px] w-[60px] h-[32px] rounded-[4px] bg-[#FED500]">
          <span className="text-center text-white font-bold flex items-center justify-center h-full">
            Ad
          </span>
        </div>
      </div>
    </div>
  );
};
