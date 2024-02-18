import banner from "../assets/banner-2.svg";
import { Hero } from "../components/main/Hero";
import { AdvertisementBanner } from "../components/AdvertisementBanner";

import { KakaoMap } from "../components/kakao/KakaoMap";

import { GameDetailCard } from "../components/main/mobile/GameDetailCard";
import { DatesListContainer } from "../components/main/DatesListContainer";
import { useGetGamesDataQuery } from "../hooks/useGetGamesDataQuery";
import { DateSelectorBox } from "../components/main/browser/DateSelectorBox";
import { Link } from "react-router-dom";

export const Home = () => {
  const { data: allGamesData } = useGetGamesDataQuery();
  allGamesData?.data.map((court) => console.log(court.court.address));

  return (
    <div className="flex flex-col gap-6  w-full tablet:px-[13rem] mx-auto  max-w-[90rem]">
      <Hero
        backgroundImage={banner}
        launchText="MITI 서비스 런칭"
        recruitText="MITI와 함께, 경기 모집부터"
        managementText="관리, 결제, 매칭까지 한번에."
      />
      <div className=" flex flex-col ">
        <div className="flex tablet:flex-row mobile:flex-col tablet:gap-10 mobile:gap-4 ">
          <div className="flex flex-col gap-4">
            <DateSelectorBox />
            <div className="px-4 py-2 flex flex-col gap-4 rounded-lg bg-[#FBFBFB]  h-[409px] overflow-y-scroll">
              {allGamesData?.data.map((game) => {
                return (
                  <>
                    <Link
                      to={`/games/detail/${game.id}`}
                      key={game.id}
                      className=""
                    >
                      <div className="flex flex-col gap-1 ">
                        <h2 className="font-bold text-[18px] truncate">
                          {game.title}{" "}
                        </h2>
                        <p className="text-[14px] text-gray-500">
                          {`${game.startdate} ${game.starttime.slice(
                            0,
                            -3
                          )} ~ ${game.endtime.slice(0, -3)}`}
                        </p>
                        <p className="text-[14px] text-red-500 font-bold">
                          {game.fee.toLocaleString("ko-KR", {
                            style: "currency",
                            currency: "KRW",
                          })}
                        </p>
                      </div>
                    </Link>
                    <hr className="w-full bg-[#ECECEC] " />
                  </>
                );
              })}
            </div>
            {/* <DatesListContainer /> */}
            {/* <div>gamelist</div> */}
          </div>{" "}
          <KakaoMap allGamesData={allGamesData} />
        </div>
      </div>
      <div className=" flex mobile:flex-col  mobile:gap-4 tablet:flex-row tablet:flex-wrap  items-center   ">
        <GameDetailCard />
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
