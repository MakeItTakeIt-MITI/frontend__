import GameStatusItem from "../\bv11_homepage/GameStatusItem";
import { GAMESTATUS } from "../../constants/status";

const FilterStatusField = () => {
  return (
    <div className="md:py-[2rem] md:px-[2.5rem] sm:py-[1.25rem] sm:px-[1.31rem] space-y-[1.25rem]">
      <h1 className="sm:font-[600] md:font-bold sm:text-sm md:text-base text-secondary-white">
        경기 상태
      </h1>
      <div className="sm:gap-[0.5rem] md:gap-[1rem] flex justify-center items-center">
        {GAMESTATUS.map((status, index) => (
          <GameStatusItem content={status} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FilterStatusField;
