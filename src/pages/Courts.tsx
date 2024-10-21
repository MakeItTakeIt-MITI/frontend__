import Footer from "../components/common/Footer";

import hero from "../assets/v11/court_hero.png";
import { useEffect, useState } from "react";
import { useCourtsInfiniteDataHook } from "../hooks/useCourtsInfiniteDataHook";
import { useInView } from "react-intersection-observer";

import dropdown from "../assets/v11/drop.svg";
import search from "../assets/v11/search.svg";
import { CITIES } from "../constants/locations";
import CourtCard from "../components/courts/CourtCard";
import { Court } from "../interfaces/games";
import CourtMap from "../components/courts/CourtMap";
import MoveToAppBanner from "../components/common/MoveToAppBanner";

const Courts = () => {
  const [displayDropbox, setDisplayDropbox] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const {
    data: courtsData,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useCourtsInfiniteDataHook(searchInput, selectedCity);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const handleSelectCity = (input: string) => {
    setSelectedCity(input);
    setDisplayDropbox(false);
  };

  const handleDisplayDropbox = () => {
    setDisplayDropbox(!displayDropbox);
  };

  const handleSearchInput = () => {
    setSearchInput(input);
    refetch();
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  useEffect(() => {
    refetch();
  }, [selectedCity, setSelectedCity, refetch, searchInput, input]);

  return (
    <div className="bg-secondary-black ">
      <header className="sm:h-[16rem] md:h-[20rem] flex items-center justify-center bg-[#000] relative">
        <img src={hero} alt="hero" className="h-full " />
        <div className=" sm:hidden md:block absolute top-0 bottom-0 left-[360px] w-[37.725rem] bg-[#151e1c] "></div>
        <div className="absolute top-0 bottom-0 flex flex-col sm:items-center md:items-start justify-center gap-[1.25rem] text-[#fff] ">
          <p className="sm:text-sm md:text-base font-bold">MITI 서비스 런칭</p>
          <h1 className="font-bold  sm:text-[24px] md:text-[44px]">
            우리 동네 농구 핫 플레이스는 어디?
          </h1>
          <p className="sm:font-[300] md:font-[400] sm:text-[14px] md:text-[20px]">
            주변 경기장을 검색해 보세요.
          </p>
        </div>
      </header>

      <section className="pt-[3.75rem] sm:px-[.81rem] pb-[6.25rem] flex flex-col  justify-center  gap-[2.62rem] mx-auto sm:w-full md:w-[768px]">
        <div className="space-y-[1.25rem] text-[#fff] sm:text-center md:text-start">
          <h1 className="text-[32px] font-[600]">경기장 목록</h1>
          <h2 className="text-[20px] font-[400]">
            동네에 있는 경기장을 찾아보세요!
          </h2>
        </div>
        <div className="flex items-center sm:justify-center gap-[1.25rem]">
          <div className="space-y-[1.25rem]">
            <div className="flex items-center gap-[0.75rem] h-[3rem]">
              <div className="flex items-center justify-between bg-light-dark sm:w-[14.8125rem] md:w-[15.5rem] h-full py-[0.75rem] pl-[1.25rem] pr-[0.75rem] rounded-[0.75rem]">
                <input
                  type="text"
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-light-dark text-secondary-white font-[500] courtsPlaceHolder sm:w-[11rem] md:w-[12rem]"
                  placeholder="경기장 (주소/경기장 명) 검색"
                />
                <button
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearchInput();
                    }
                  }}
                  onClick={handleSearchInput}
                >
                  <img src={search} alt="search" />
                </button>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={handleDisplayDropbox}
                  className=" bg-light-dark flex items-center justify-between h-full sm:w-[6.25rem] md:w-[7.625rem] rounded-[0.75rem] py-3 pl-5 pr-3"
                >
                  <span className="text-primary-white sm:font-[400] md:font-[500] md:text-base sm:text-sm">
                    {selectedCity.length ? selectedCity : "전체"}
                  </span>
                  <img
                    src={dropdown}
                    alt="dropdown"
                    className="size-[1.5rem]"
                  />
                </button>
                {displayDropbox && (
                  <ul className="overflow-y-scroll custom-scrollbar absolute left-0 right-0 top-14 rounded-[.75rem] w-full  h-[27.625rem] p-[.75rem] bg-light-dark flex flex-col ">
                    {CITIES.map((city, index) => (
                      <li
                        key={index}
                        onClick={() => handleSelectCity(city)}
                        style={{
                          color: selectedCity !== city ? "#fff" : "#7FEEF0",
                        }}
                        className="cursor-pointer px-[0.5rem] py-[0.25rem] text-sm font-bold hover:bg-[#404040] hover:rounded-lg "
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="bg-light-dark sm:h-[29.5rem] md:h-[426px] w-full p-4 space-y-3 overflow-y-scroll rounded-[20px]  custom-scrollbar">
              {courtsData?.pages.map((page) => {
                return page.data.page_content.length > 0 ? (
                  page.data.page_content.map((court: Court) => (
                    <CourtCard key={court.id} court={court} />
                  ))
                ) : (
                  <div className="w-full h-full flex  flex-col gap-3 items-center justify-center ">
                    <h1 className="text-primary-white text-[24px] font-bold ">
                      조회 결과가 없습니다.
                    </h1>
                    <h2 className="text-sm font-[400] text-[#d4d4d4]">
                      검색어와 필터를 변경하여 다른 경기를 찾아보세요!
                    </h2>
                  </div>
                );
              })}
              {hasNextPage && (
                <div ref={ref} className="h-1 w-full opacity-0" />
              )}{" "}
            </div>
          </div>
          <CourtMap />
        </div>

        <MoveToAppBanner />
      </section>
      <Footer />
    </div>
  );
};

export default Courts;
