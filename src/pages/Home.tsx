// import { Hero } from "../components/main/Hero";
import banner from "../assets/banner-2.svg";
// import { SectionTitle } from "../components/main/SectionTitle";
import { KakaoMap } from "../components/kakao/KakaoMap";
import { DateBox } from "../components/main/DateBox";
import { GameDetailCard } from "../components/main/GameDetailCard";
import { Hero } from "../components/main/Hero";

export const Home = () => {
  const availableDates = [];
  for (let i = 0; i < 14; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    availableDates.push(newDate);
  }

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
      <div className="flex items-center m-4 gap-4">
        <DateBox />
        <DateBox />
        <DateBox />
        <DateBox />
        {/* {availableDates?.map((dateList, index) => ())} */}
      </div>
      <div className="mx-[16px] flex flex-col gap-4">
        <GameDetailCard />
        <GameDetailCard />
      </div>
      {/* <SectionTitle title="⚡ 마감 ️12시간 전 매칭" /> */}
    </div>
  );
};
