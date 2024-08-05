import { GAMESTATUS } from "../../../constants/status";
import GameStatusItem from "./GameStatusItem";

const FilterStatusField = () => {
  return (
    <div className="py-[2rem] px-[2.5rem] space-y-[1.25rem]">
      <h1 className="font-bold text-secondary-white">경기 상태</h1>
      <div className="space-x-[1rem] flex items-center">
        {GAMESTATUS.map((status) => (
          <GameStatusItem isSelected={false} content={status} key={status} />
        ))}
      </div>
    </div>
  );
};

export default FilterStatusField;
