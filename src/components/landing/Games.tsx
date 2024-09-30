import games from "../../assets/v11/landing-games.png";
import mobile_games from "../../assets/v11/landing-games-mobille.png";

const Games = () => {
  return (
    <div className="w-full sm:h-full md:h-[800px] bg-dark-card flex md:flex-row sm:flex-col-reverse sm:justify-end sm:items-center md:items-stretch  md:justify-center sm:gap-[102px] md:gap-[78px] ">
      <div>
        <img
          src={games}
          alt="games mobile page"
          className="sm:hidden md:block"
        />
        <img
          src={mobile_games}
          alt="games mobile page"
          className="sm:block md:hidden"
        />
      </div>
      <div className="flex  items-center justify-start md:pt-[0px] sm:pt-[70px]">
        <div className="space-y-3 md:text-left sm:text-right">
          <h1 className="text-primary-teal font-bold text-[18px]">경기 조회</h1>
          <h2 className="text-white sm:text-[24px] md:text-[52px] font-bold">
            간편하게 경기를 조회하고 <br />
            바로 참여해보세요.
          </h2>
          <p className="text-[#E5E5E5] sm:text-sm md:text-xl font-[400]">
            지도를 통해 내 주변의 경기를 빠르게 찾아보고 클릭 몇번으로 <br />
            간편하게 경기에 참여해보세요!
          </p>
          <button
            type="button"
            className="sm:w-[120px] md:w-[180px] sm:h-[40px] md:h-[54px] bg-[#D4D4D4] text-[#262626] sm:text-sm md:text-[18px] font-bold rounded-[14.286px]"
          >
            경기 보러 가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Games;
