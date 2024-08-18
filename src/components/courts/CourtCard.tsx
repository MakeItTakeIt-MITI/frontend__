import { Link } from "react-router-dom";

const CourtCard = () => {
  return (
    <Link
      to="detail"
      className="p-4 bg-dark-card w-full h-[66px] flex flex-col justify-center rounded-[12px]"
    >
      <h1 className="font-bold text-primary-white ">더모스트 바스켓볼(수지)</h1>
      <h2 className="text-[12px] text-[#a3a3a3] font-[500]">
        서울특별시 한국동 한국로 123-456
      </h2>
    </Link>
  );
};

export default CourtCard;
