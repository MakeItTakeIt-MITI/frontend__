import { DATES } from "../../constants/calender";
import useCurrentMonthStore from "../../store/useCurrentMonthStore";
import DateCard from "./DateCard";

const FilterCalenderField = () => {
  const datesList = DATES();

  const { currentMonth } = useCurrentMonthStore();

  return (
    <div className="py-[2rem] px-[2.5rem] space-y-[0.75rem]">
      <div className="flex items-center gap-[0.75rem]">
        <h1 className="font-bold text-primary-white">날짜</h1>
        <span className="font-[400] text-[12px] text-[#D4D4D4]">
          {currentMonth}월
        </span>
      </div>

      <div className="flex items-center gap-[0.5rem] overflow-x-auto ">
        {datesList.map((date, index) => (
          <DateCard
            key={index}
            dayOfWeek={date.dayKorean}
            date={date.date}
            month={date.month}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterCalenderField;
