import { Link } from "react-router-dom";
import chevron_right from "../../../assets/svg/right-arrow-lg.svg";

interface GameStatusCardProps {
  path: string;
  game_status: React.ReactNode;
  title: string;
  address: string;
  time: string;
}

export const GameStatusCard = ({
  path = "",
  game_status,
  title,
  address,
  time,
}: GameStatusCardProps) => {
  return (
    <Link
      to={path}
      className="border border-gray-200 bg-white rounded-lg p-2 w-full h-[95px] flex items-center justify-between"
    >
      <div className=" h-full truncate space-y-[6px] flex flex-col justify-center">
        {game_status}
        <h1 className="truncate text-zinc-800 text-base font-bold leading-[18px]">
          {title}
        </h1>
        <div className="text-neutral-400 text-xs font-medium leading-none space-y-[2px]">
          <p>{address}</p>
          <p>{time}</p>
        </div>
      </div>
      <img src={chevron_right} alt="right arrow icon" />
    </Link>
  );
};
