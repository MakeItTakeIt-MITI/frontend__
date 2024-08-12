import filter from "../../assets/v11/filter.svg";
import NaverMap from "./NaverMap";
import GameListContainer from "./GameListContainer";
import FilteredStatus from "../v11_filterbox/FilteredStatus";
import useGameFilterStore from "../../store/useGameFilterStore";

interface MainContentProps {
  handleDisplayFilterBox: () => void;
}

const MainContent = ({ handleDisplayFilterBox }: MainContentProps) => {
  const { selectedStatus, selectedDate, selectedTimeDate } =
    useGameFilterStore();
  return (
    <section className="bg-secondary-black h-[882px] sm:px-[0.81rem] md:px-0  pt-[3.75rem]  sm:pb-[3.75rem] md:pb-[6.25rem]">
      <div className=" sm:w-full md:w-[768px] sm:px-[0.5rem] md:px-0 h-full mx-auto sm:space-y-[1.75rem] md:space-y-[2.62rem]">
        {/* Top */}
        <div className="space-y-5 sm:text-center md:text-left text-[#fff]">
          <h1 className="sm:font-bold md:font-[600] sm:text-[26px] md:text-[32px]">
            MITI 경기 목록
          </h1>
          <p className="sm:text-sm md:text-[20px] sm:font-[500] md:font-[400]">
            당신의 참여 기다리는 경기들입니다. 지금 참여하세요!
          </p>
        </div>
        {/* Bottom */}
        <div className="sm:space-y-[1.25rem] md:space-y-5">
          {/* Filter Row */}
          <div className="flex items-center justify-between md:w-full ">
            <div className=" flex mx-auto sm:px-[1.25rem] md:px-0 sm:w-[25rem] md:w-full sm:justify-center items-center md:justify-start sm:items-center sm:gap-2 md:gap-3 sm:overflow-x-scroll sm:overflow-y-hidden md:overflow-hidden">
              <FilteredStatus
                handleDisplayFilterBox={handleDisplayFilterBox}
                content={selectedDate}
              />
              <FilteredStatus
                content={selectedTimeDate}
                handleDisplayFilterBox={handleDisplayFilterBox}
              />
              <FilteredStatus
                content={selectedStatus}
                handleDisplayFilterBox={handleDisplayFilterBox}
              />
            </div>
            <button
              className="sm:hidden md:block"
              type="button"
              onClick={handleDisplayFilterBox}
            >
              <img src={filter} alt="filter" />
            </button>
          </div>
          {/* Game list and map container */}
          <div className="flex gap-5 h-full ">
            <GameListContainer />
            <NaverMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
