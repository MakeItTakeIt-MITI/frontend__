import banner from "../assets/banner-2.svg";
import { KakaoMap } from "../components/kakao/KakaoMap";
import { GameDetailCard } from "../components/main/GameDetailCard";
import { Hero } from "../components/main/Hero";

export const Home = () => {
  const availableDates = [];
  for (let i = 0; i < 4; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    availableDates.push(newDate);
  }

  // 다음 날짜 표시 함수
  const displayMoreDates = () => {};

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
        {/* <DateBox /> */}
        {availableDates.map((date, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-[14px] mobile:w-[60px] tablet:w-[80px] mobile:h-[52px] tablet:h-[60px] bg-[#4065F6] text-white rounded-xl"
            >
              <span>
                {date.toLocaleDateString("ko-kr", { day: "numeric" })}
              </span>
              <span>
                {date.toLocaleDateString("ko-kr", { weekday: "short" })}
              </span>
            </div>
          );
        })}

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
