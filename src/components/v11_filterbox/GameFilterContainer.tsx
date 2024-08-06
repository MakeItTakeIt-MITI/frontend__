import { useEffect, useState } from "react";

import FilterTimeField from "./FilterTimeField";
import FilterButtonsField from "./FilterButtonsField";
import FilterCalenderField from "./FilterCalenderField";
import FilterHeader from "./FilterHeader";
import FilterStatusField from "./FilterStatusField";
import { DAYSTATUS } from "../../constants/calender";

interface GameFilterProps {
  handleCloseFilterBox: () => void;
  selectedDate: string;
  setSelectedDate: (arg: string) => void;
  selectedTimeDate: string;
  setSelectedTimeDate: (arg: string) => void;
  selectedStatus: string;
  setSelectedStatus: (arg: string) => void;
}

const GameFilterContainer = ({
  handleCloseFilterBox,
  selectedDate,
  setSelectedDate,
  selectedTimeDate,
  setSelectedTimeDate,
  selectedStatus,
  setSelectedStatus,
}: GameFilterProps) => {
  const day = DAYSTATUS(); //현재 오전/오후 상태

  const date = new Date();
  const hours = String(date.getHours());

  // game time fields
  const [selectedDayStatus, setSelectedDayStatus] = useState<string>(day);
  const [selectedHour, setSelectedHour] = useState<string>(hours);
  const [selectedMinute, setSelectedMinute] = useState<string>("00");

  const timeFormat = `${selectedDayStatus} ${selectedHour}:${selectedMinute}`;
  console.log(timeFormat);

  const handleResetField = () => {
    setSelectedDate("날짜");
    setSelectedTimeDate("경기 시작 시간");
    setSelectedStatus("경기 상태");
  };

  const handleApplyFilters = () => {
    setSelectedTimeDate(timeFormat);
  };

  useEffect(() => {}, [
    setSelectedDayStatus,
    selectedDayStatus,
    selectedHour,
    selectedMinute,
  ]);

  return (
    <section
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.64)",
      }}
      className=" fixed top-0 right-0 bottom-0 left-0 h-full  z-[999] "
    >
      <div className="rounded-tl-[20px] rounded-tr-[20px] absolute right-0 bottom-0 left-0 mx-auto w-[48rem]   bg-secondary-black">
        <FilterHeader
          handleCloseFilterBox={handleCloseFilterBox}
          selectedDate={selectedDate}
          selectedStatus={selectedStatus}
          selectedTimeDate={selectedTimeDate}
        />
        <hr className="border-[#404040] " />
        <FilterCalenderField />
        <hr className="border-[#404040] " />
        <FilterTimeField
          selectedDayStatus={selectedDayStatus}
          setSelectedDayStatus={setSelectedDayStatus}
          selectedHour={selectedHour}
          selectedMinute={selectedMinute}
          setSelectedHour={setSelectedHour}
          setSelectedMinute={setSelectedMinute}
        />
        <hr className="border-[#404040] " />
        <FilterStatusField />

        <hr className="border-[#404040] " />
        <FilterButtonsField
          handleResetField={handleResetField}
          handleApplyFilters={handleApplyFilters}
        />
      </div>
    </section>
  );
};

export default GameFilterContainer;
