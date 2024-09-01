import filter from "../../assets/v11/filter.svg";
import NaverMap from "./NaverMap";
import GameListContainer from "./GameListContainer";
import FilteredStatus from "../game-filter/FilteredStatus";
import useGameFilterStore from "../../store/useGameFilterStore";
import useTimeFieldStore from "../../store/useTimeStore";
import useStatusSelectionStore from "../../store/useStatusSelectionStore";
import useDateSelectionStore from "../../store/useDateSelectionStore";
import { Game } from "../../interfaces/games";
import { useState } from "react";

interface MainContentProps {
  handleDisplayFilterBox: () => void;
  allGamesData: Game[];
}

const MainContent = ({
  handleDisplayFilterBox,
  allGamesData,
}: MainContentProps) => {
  const {
    selectedStatus,
    selectedDate,
    selectedTimeDate,
    resetSelectedDate,
    resetSelectedTimeDate,
    resetSelectedStatus,
  } = useGameFilterStore();
  const [selected, setSelected] = useState(false);

  const { resetTimeField } = useTimeFieldStore();
  const { resetStatuses } = useStatusSelectionStore();
  const { resetDateField } = useDateSelectionStore();

  const handleResetDateField = () => {
    resetSelectedDate();
    resetDateField();
  };

  const handleResetTimeField = () => {
    resetSelectedTimeDate();
    resetTimeField();
  };

  const handleResetGameStatus = () => {
    resetSelectedStatus();
    resetStatuses();
  };

  const handleSetSelected = () => {
    setSelected(!selected);
  };

  return (
    <section className="bg-secondary-black h-[882px] sm:px-[0.81rem] md:px-0  pt-[3.75rem]  sm:pb-[3.75rem] md:pb-[6.25rem]">
      <div className=" sm:w-full  md:w-[768px] sm:px-[0.5rem] md:px-0 h-full mx-auto sm:space-y-[1.75rem] md:space-y-[2.62rem]">
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
          <>
            {/* Filter Row  & non-mobile */}
            <div className="flex items-center justify-between w-full ">
              <div className=" flex  items-center justify-start gap-3    md:px-0  sm:overflow-x-scroll sm:overflow-y-hidden md:overflow-hidden  ">
                <FilteredStatus
                  handleDisplayFilterBox={handleDisplayFilterBox}
                  content={selectedDate}
                  // content={currentMonth}
                  resetStatus={handleResetDateField}
                />
                <FilteredStatus
                  content={selectedTimeDate}
                  handleDisplayFilterBox={handleDisplayFilterBox}
                  resetStatus={handleResetTimeField}
                />
                <FilteredStatus
                  content={selectedStatus}
                  handleDisplayFilterBox={handleDisplayFilterBox}
                  resetStatus={handleResetGameStatus}
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
          </>
          {/* Game list and map container */}
          <div className="flex gap-5 h-full ">
            <GameListContainer allGamesData={allGamesData} />
            <NaverMap
              allGamesData={allGamesData}
              handleSetSelected={handleSetSelected}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
