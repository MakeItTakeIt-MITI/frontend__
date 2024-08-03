import time from "../../../assets/v11/time.svg";
import participants from "../../../assets/v11/participants.svg";
import { Link } from "react-router-dom";

const GameListCard = () => {
  return (
    <Link
      to=""
      className="flex flex-col justify-center space-y-3 w-full h-[120px] bg-dark-card border border-[#525252] rounded-xl p-4"
    >
      {/* Status and title */}
      <div className="space-y-2">
        <span className="p-1 text-[10px] h-[18px] bg-[#4152EB]">모집중</span>
        <h1 className="font-bold  text-[#E5E5E5]">
          수원 매탄 공원 4 vs 4 (주차 12자리)
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
        <h2 className="text-[#7FEEF0] font-bold">₩23,000</h2>
      </div>
    </Link>
  );
};

export default GameListCard;
