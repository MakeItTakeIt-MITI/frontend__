import { Link } from "react-router-dom";
import right_arrow_lg from "../../../assets/svg/right-arrow-lg.svg";

interface CourtsCardProps {
  key?: number;
  path?: string;
  address: string;
  address_detail: string;
}

export const CourtsCard = ({
  path = "",
  address,
  address_detail,
}: CourtsCardProps) => {
  return (
    <Link
      to={path}
      className="w-full h-[67px] border border-gray-200 rounded-xl  p-3 flex items-center justify-between"
    >
      <div className="space-y-[7px] w-[256px] truncate">
        <h1 className="text-zinc-800 text-base font-bold leading-18">
          {address}
        </h1>
        <h2 className="text-neutral-400 text-xs font-medium leading-none">
          {address_detail}
        </h2>
      </div>
      <img src={right_arrow_lg} alt="right arrow" />
    </Link>
  );
};
