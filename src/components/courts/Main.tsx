import CourtMap from "./CourtMap";
import dropdown from "../../assets/v11/drop.svg";
import search from "../../assets/v11/search.svg";
import CourtCard from "./CourtCard";
import { CITIES } from "../../constants/locations";
import { useState } from "react";

const Main = () => {
  const [displayDropbox, setDisplayDropbox] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const handleSelectCity = (input: string) => {
    setSelectedCity(input);
    setDisplayDropbox(false);
  };

  const handleDisplayDropbox = () => {
    setDisplayDropbox(!displayDropbox);
  };
  return (
    <div className="pt-[3.75rem] sm:px-[.81rem] md:px-[36px] pb-[6.25rem] flex flex-col  justify-center  gap-[2.62rem] mx-auto sm:w-full md:w-[768px]">
      {/* title */}
      <div className="space-y-[1.25rem] text-[#fff] sm:text-center md:text-start">
        <h1 className="text-[32px] font-[600]">경기 목록</h1>
        <h2 className="text-[20px] font-[400]">
          동네에 있는 경기장을 찾아보세요!
        </h2>
      </div>
      {/* middle section */}
      <div className="flex items-center sm:justify-center gap-[1.25rem]">
        {/* searchbar & list */}
        <div className="space-y-[1.25rem]">
          <div className="flex items-center gap-[0.75rem] h-[3rem]">
            {/* searchbar */}
            <div className="flex items-center justify-between bg-light-dark sm:w-[14.8125rem] md:w-[15.5rem] h-full py-[0.75rem] pl-[1.25rem] pr-[0.75rem] rounded-[0.75rem]">
              <input
                type="text"
                className="bg-light-dark text-secondary-white font-[500] courtsPlaceHolder"
                placeholder="경기장 (주소/경기장 명) 검색"
              />
              <img src={search} alt="search" />
            </div>

            {/* dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={handleDisplayDropbox}
                className=" bg-light-dark flex items-center justify-between h-full sm:w-[6.25rem] md:w-[7.625rem] rounded-[0.75rem] py-3 pl-5 pr-3"
              >
                <span className="text-primary-white sm:font-[400] md:font-[500] md:text-base sm:text-sm">
                  {selectedCity.length ? selectedCity : "전체"}
                </span>
                <img src={dropdown} alt="dropdown" className="size-[1.5rem]" />
              </button>
              {displayDropbox && (
                <ul className="overflow-y-scroll custom-scrollbar absolute left-0 right-0 top-14 rounded-[.75rem] w-full  h-[27.625rem] p-[.75rem] bg-light-dark flex flex-col ">
                  {CITIES.map((city) => (
                    <li
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
          {/* game list */}
          <div className="bg-light-dark sm:h-[29.5rem] md:h-[426px] w-full p-4 space-y-3 overflow-y-scroll rounded-[20px]  custom-scrollbar">
            {/* court item */}

            {/* if no items available */}
            {/* <NoResults /> */}
            {/* <div className="w-full h-full flex  flex-col gap-3 items-center justify-center ">
              <h1 className="text-primary-white text-[24px] font-bold ">
                조회 결과가 없습니다.
              </h1>
              <h2 className="text-sm font-[400] text-[#d4d4d4]">
                검색어와 필터를 변경하여 다른 경기를 찾아보세요!
              </h2>
            </div> */}
            <CourtCard />
            <CourtCard />
            <CourtCard />
            <CourtCard />
            <CourtCard />
            <CourtCard />
            <CourtCard />
          </div>
        </div>

        {/* <div></div> */}
        <CourtMap />
      </div>

      {/* bottom */}
      <div
        style={{
          background: "linear-gradient(97deg, #DAFEFF 11.57%, #9EEFF0 88.43%)",
        }}
        className="w-full h-[100px] rounded-xl px-10 sm:hidden md:flex items-center justify-between"
      >
        <p className="font-bold">
          편하게 농구게임에 참여하고 싶다면 <br />
          MITI를 이용해보세요!
        </p>
        <button
          style={{
            background:
              "linear-gradient(94deg, rgba(255, 255, 255, 0.42) 4.64%, rgba(255, 255, 255, 0.60) 96.13%)",
          }}
          className="px-4 py-3 rounded-lg text-sm font-[700] text-dark-card  "
        >
          MITI 앱으로 열기
        </button>
      </div>
    </div>
  );
};

export default Main;
