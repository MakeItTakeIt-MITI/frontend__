import GameStatusItem from "../\bv11_homepage/GameStatusItem";
import { GAMESTATUS } from "../../constants/status";

type FilterStatusFieldProps = {
  setStatus: (arg: string) => void;
};

const FilterStatusField = ({ setStatus }: FilterStatusFieldProps) => {
  return (
    <div className="py-[2rem] px-[2.5rem] space-y-[1.25rem]">
      <h1 className="font-bold text-secondary-white">경기 상태</h1>
      <div className="space-x-[1rem] flex items-center">
        {GAMESTATUS.map((status) => (
          <GameStatusItem content={status} setStatus={setStatus} key={status} />
        ))}
      </div>
    </div>
  );
};

export default FilterStatusField;
