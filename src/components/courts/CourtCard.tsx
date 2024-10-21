import { Link } from "react-router-dom";
import { CourtsCardField } from "../../interfaces/courts";

const CourtCard = ({ court }: { court: CourtsCardField }) => {
  return (
    <Link
      to={`/courts/${court.id}`}
      className="p-4 bg-dark-card md:w-[350px] sm:w-[333px] h-[66px] flex flex-col justify-center rounded-[12px]"
    >
      <h1 className="font-bold text-primary-white truncate ">{court.name}</h1>
      <h2 className="text-[12px] text-[#a3a3a3] font-[500] truncate">
        {court.address} {court.address_detail}
      </h2>
    </Link>
  );
};

export default CourtCard;
