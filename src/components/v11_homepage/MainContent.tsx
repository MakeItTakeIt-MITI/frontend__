import filter from "../../assets/v11/filter.svg";
import NaverMap from "./NaverMap";
import GameListContainer from "./GameListContainer";
import FilteredStatus from "../v11_filterbox/FilteredStatus";

interface MainContentProps {
  handleDisplayFilterBox: () => void;
}

const MainContent = ({ handleDisplayFilterBox }: MainContentProps) => {
  return (
    <section className="bg-secondary-black h-[882px] pt-[3.75rem] pb-[6.25rem]">
      <div className="w-[768px] h-full mx-auto space-y-[2.62rem]">
        {/* Top */}
        <div className="space-y-5 text-[#fff]">
          <h1 className="font-[600] text-[32px]">MITI 경기 목록</h1>
          <p className="text-[20px] font-[400]">
            당신의 참여 기다리는 경기들입니다. 지금 참여하세요!
          </p>
        </div>
        {/* Bottom */}
        <div className="space-y-5">
          {/* Filter Row */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <FilteredStatus content="날짜" />
              <FilteredStatus content="경기 시작 시간" />
              <FilteredStatus content="경기 상태" />
            </div>
            <button type="button" onClick={handleDisplayFilterBox}>
              <img src={filter} alt="filter" />
            </button>
          </div>
          {/* Game list and map container */}
          <div className="flex gap-5 h-full ">
            {/* LIST */}
            <GameListContainer />
            {/* MAP */}
            {/* <div className="bg-light-dark w-[381px] h-[494px]">s</div> */}
            <NaverMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
