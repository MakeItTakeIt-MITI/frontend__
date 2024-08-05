import { useEffect, useState } from "react";

import FilterTimeField from "./FilterTimeField";
import FilterButtonsField from "./FilterButtonsField";
import FilterCalenderField from "./FilterCalenderField";
import FilterHeader from "./FilterHeader";
import FilterStatusField from "./FilterStatusField";
import { DAYSTATUS } from "../../constants/calender";

interface GameFilterProps {
  handleCloseFilterBox: () => void;
}

const GameFilterContainer = ({ handleCloseFilterBox }: GameFilterProps) => {
  const day = DAYSTATUS(); //현재 오전/오후 상태

  const date = new Date();
  const hours = String(date.getHours());

  const [selectedDate, setSelectedDate] = useState<string>("날짜");
  const [selectedStatus, setSelectedStatus] = useState("경기 상태");
  const [selectedTimeDate, setSelectedTimeDate] = useState("경기 시작 시간");

  const [selectedDayStatus, setSelectedDayStatus] = useState<string>(day);
  const [selectedHour, setSelectedHour] = useState<string>(hours);
  const [selectedMinute, setSelectedMinute] = useState<string>("00");

  // const gameTimeFormat = `${selectedDate} ${selectedHour}:${selectedMinute}`; //경기 시작 시간

  const handleResetField = () => {
    setSelectedDate("날짜");
    setSelectedTimeDate("경기 시작 시간");
    setSelectedStatus("경기 상태");
  };

  useEffect(() => {
    // setSelectedDayStatus(day);
  }, [setSelectedDayStatus, selectedDayStatus]);
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
        <FilterButtonsField handleResetField={handleResetField} />
      </div>
    </section>
  );
};

export default GameFilterContainer;
