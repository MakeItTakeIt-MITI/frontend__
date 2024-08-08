import { DATES } from "../../constants/calender";
import DateCard from "./DateCard";

type CalenderFieldProps = {
  selectedDate: string;
  setSelectedDate: (arg: string) => void;
  setDateField: (arg: string) => void;
  dateField: string;
};

const FilterCalenderField = ({
  setDateField,
  dateField,
}: CalenderFieldProps) => {
  const datesList = DATES();

  return (
    <div className="py-[2rem] px-[2.5rem] space-y-[0.75rem]">
      <div className="flex items-center gap-[0.75rem]">
        <h1 className="font-bold text-primary-white">날짜</h1>
        <span className="font-[400] text-[12px] text-[#D4D4D4]">월</span>
      </div>

      <div className="flex items-center gap-[0.5rem] overflow-x-auto ">
        {datesList.map((date, index) => (
          <DateCard
            key={index}
            dayOfWeek={date.dayKorean}
            date={date.date}
            month={date.month}
            setDateField={setDateField}
            dateField={dateField}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterCalenderField;
