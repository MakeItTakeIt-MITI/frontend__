import { Link } from "react-router-dom";
import Footer from "../components/common/Footer.tsx";
import right_arrow from "../assets/v11/games/right-arrow.svg";
import NewGameCard from "../components/games/NewGameCard.tsx";

export const GamesList = () => {
  return (
    <>
      <HeroSection />
      <MobileHeroSection />
      <section className="page-padding bg-secondary-black min-h-screen sm:px-[0.81rem] md:px-0  ">
        <div className=" page-layer sm:px-[0.5rem] md:px-0 h-full sm:space-y-[1.75rem] md:space-y-[2.62rem]">
          {/* Top */}
          <div className="flex justify-between w-full">
            <div className="space-y-5 sm:text-center md:text-left text-[#fff]">
              <h1 className="sm:font-bold md:font-[600] sm:text-[26px] md:text-[32px]">
                MITI 경기 목록
              </h1>
              <p className="sm:text-sm md:text-[20px] sm:font-[500] md:font-[400]">
                당신의 참여 기다리는 경기들입니다. 지금 참여하세요!
              </p>
            </div>

            <div className="flex items-center p-5">
              <Link to="/games" type="button" className="text-sm text-white">
                지도로 보기
              </Link>
              <img src={right_arrow} alt="right arrow" />
            </div>
          </div>
          <div className="sm:space-y-[1.25rem] md:space-y-[30px]">
            {/* search */}
            <div className="h-12 w-full">
              <input type="text" className="h-full p-3" />
            </div>
            {/* games */}
            <div className="w-full">
              <div className="sm:hidden md:block custom-scrollbar bg-light-dark sm:w-full md:w-full sm:h-[33.25rem] md:h-[1161px] sm:p-[0.5rem] md:p-4 rounded-[20px] space-y-3 overflow-y-scroll">
                <NewGameCard />
                <NewGameCard />
                <NewGameCard />
                <NewGameCard /> <NewGameCard />
                <NewGameCard />
                <NewGameCard />
                <NewGameCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const HeroSection = () => (
  <div className="bg-games_web bg-center bg-cover bg-no-repeat  h-[20rem] sm:hidden md:flex justify-center items-center bg-[#000] relative">
    {/* content */}
    <div className="absolute md:w-[768px] flex flex-col sm:items-center md:items-start justify-center gap-[1.25rem] text-[#fff] ">
      <p className="text-base font-bold text-primary-teal">MITI 서비스 런칭</p>
      <h1 className="font-bold  text-[44px]">오늘 퇴근하고 농구 어떠세요?</h1>
      <p className="font-[400] text-[20px]">
        당신 근처의 경기를 지금 찾아보세요.
      </p>
    </div>
  </div>
);

const MobileHeroSection = () => (
  <section className="bg-games_mobile bg-center bg-cover bg-no-repeat    sm:flex items-center  justify-center md:hidden h-[16.125rem]  ">
    <div className="flexCenter flex-col gap-[1.5rem] text-[#fff]  ">
      <div className="space-y-[.75rem] text-center">
        <p className="text-sm font-bold text-primary-teal">MITI 서비스 런칭</p>
        <h1 className="font-bold text-[24px]">오늘 퇴근하고 농구 어떠세요?</h1>
      </div>
      <h2 className="font-[300] text-sm">
        당신 근처의 경기를 지금 찾아보세요.{" "}
      </h2>
    </div>
  </section>
);
