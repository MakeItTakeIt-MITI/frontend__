import games from "../../assets/v11/landing-games.png";

const Games = () => {
  return (
    <div className="w-full h-[800px] bg-dark-card flex justify-center gap-[78px] ">
      <div>
        <img src={games} alt="games mobile page" />
      </div>
      <div className="flex  items-center justify-start">
        <div className="space-y-3">
          <h1 className="text-primary-teal font-bold text-[18px]">경기 조회</h1>
          <h2 className="text-white text-[52px] font-bold">
            간편하게 경기를 조회하고 <br />
            바로 참여해보세요.
          </h2>
          <p className="text-[#E5E5E5] text-xl font-[400]">
            지도를 통해 내 주변의 경기를 빠르게 찾아보고 클릭 몇번으로 <br />
            간편하게 경기에 참여해보세요!
          </p>
          <button
            type="button"
            className="w-[180px] h-[54px] bg-[#D4D4D4] text-[#262626] text-[18px] font-bold rounded-[14.286px]"
          >
            경기 보러 가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Games;
