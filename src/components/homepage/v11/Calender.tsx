import { DATES } from "../../../utils/calender";
import DateCard from "./DateCard";

const Calender = () => {
  DATES();
  return (
    <div className="py-[2rem] px-[2.5rem] space-y-[0.75rem]">
      <div className="flex items-center gap-[0.75rem]">
        <h1 className="font-bold text-primary-white">날짜</h1>
        <span className="font-[400] text-[12px] text-[#D4D4D4]">8월</span>
      </div>
      <div className="flex items-center gap-[0.5rem]">
        <DateCard />
      </div>
      {/* <DateCard />
      <DateCard /> */}
    </div>
  );
};

export default Calender;
