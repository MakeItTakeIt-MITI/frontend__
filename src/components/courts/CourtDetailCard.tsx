import time from "../../assets/v11/time.svg";
import participants from "../../assets/v11/participants.svg";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CourtDetailCard = ({ game }: any) => {
  return (
    <Link
      key={game.id}
      to={`/games/${game.id}`}
      className="flex flex-col justify-center space-y-3 w-full sm:h-[7.5rem] md:h-[120px] bg-dark-card border border-[#525252] rounded-xl p-4"
    >
      {/* Status and title */}
      <div className="space-y-2">
        <span className="flex items-center justify-center text-[10px] rounded-[0.125rem] max-w-[2.8125rem] w-full md:h-[1.125rem]  text-[#009799] bg-[#b9dbdc] ">
          모집 완료
          {game.status}
        </span>
        <h1 className="font-bold  text-[#E5E5E5]">
          {/* 수원 매탄 공원 4 vs 4 (주차 12자리) */}
          {game.title}
        </h1>
      </div>
      {/* Game Information */}
      <div className="flex justify-between items-end">
        {/* TIME  & PLAYERS*/}
        <div className="space-y-[4.5px] text-[#E5E5E5] text-[12px]">
          <div className="flex gap-1">
            <img src={time} alt="time" />
            <span>15:30~ 18:00 </span>
          </div>

          <div className="flex gap-1">
            <img src={participants} alt="participants" />
            <span>15/18</span>
          </div>
        </div>
        {/* FEE */}
        <h2 className="text-primary-teal font-bold">₩23,000</h2>
      </div>
    </Link>
  );
};

export default CourtDetailCard;
