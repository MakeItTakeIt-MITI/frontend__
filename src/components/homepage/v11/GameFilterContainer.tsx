import Calender from "./Calender";
import DateDropItem from "./DateDropItem";
import FilterItem from "./FilterItem";
import GameStatusItem from "./GameStatusItem";

const GameFilterContainer = () => {
  const date = new Date();
  console.log(date);

  return (
    <section
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.64)",
      }}
      className=" fixed top-0 right-0 bottom-0 left-0 h-full  z-[999] overflow-hidden"
    >
      <div className="rounded-tl-[20px] rounded-tr-[20px] absolute right-0 bottom-0 left-0 mx-auto w-[48rem]   bg-secondary-black">
        {/* Filter iteme */}
        <div className="p-[1.25rem] space-x-[0.5rem]">
          <FilterItem content="날짜" />
          <FilterItem content="경기 시작 시간" />
          <FilterItem content="경기 상태" />
        </div>
        <hr />
        {/* calender */}
        <Calender />
        <hr />
        {/* time  */}
        <div className="py-[2rem] px-[2.5rem] space-y-[1.25rem]">
          <h1 className="font-bold text-secondary-white">시간</h1>
          <div className="flex items-center gap-[2.5rem]">
            <div className="space-x-[1.25rem] flex items-center">
              <DateDropItem content="오전" />
              <DateDropItem content="10" timeFormat="시" />
              <DateDropItem content="23" timeFormat="분" />
            </div>
            <h2 className="text-primary-white font-bold">이후 경기</h2>
          </div>
        </div>
        <hr />
        {/* game status */}
        <div className="py-[2rem] px-[2.5rem] space-y-[1.25rem]">
          <h1 className="font-bold text-secondary-white">경기 상태</h1>
          <div className="space-x-[1rem] flex items-center">
            <GameStatusItem isSelected content="모집 중" />
            <GameStatusItem isSelected={false} content="모집 완료" />
            <GameStatusItem isSelected content="경기 완료" />
            <GameStatusItem isSelected={false} content="경기 취소" />
          </div>
        </div>
        <hr />
        {/* buttons */}
        <div className="py-[1.25rem] px-[1.31rem] flex items-center gap-[0.75rem]">
          <button
            type="button"
            className="w-[6.125rem] h-[3rem] py-[1rem] px-[1.25rem] flex items-center justify-center bg-[#737373] text-secondary-white font-[500] rounded-[0.5rem] "
          >
            초기화
          </button>

          <button className="w-full h-full p-[0.62rem] flex items-center justify-center rounded-[0.5rem] bg-[#7FEEF0] text-secondary-black font-bold">
            적용하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameFilterContainer;
