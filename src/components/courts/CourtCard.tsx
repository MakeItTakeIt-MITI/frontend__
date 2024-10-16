import { Link } from "react-router-dom";
// import { Court } from "../../interfaces/games";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CourtCard = ({ court }: any) => {
  return (
    <Link
      to={`/courts/${court.id}`}
      className="p-4 bg-dark-card w-full h-[66px] flex flex-col justify-center rounded-[12px]"
    >
      <h1 className="font-bold text-primary-white ">{court.name}</h1>
      <h2 className="text-[12px] text-[#a3a3a3] font-[500]">
        {court.address} {court.address_detail}
      </h2>
    </Link>
  );
};

export default CourtCard;
