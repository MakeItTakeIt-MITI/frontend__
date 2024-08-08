import { useEffect, useState } from "react";

import FilterTimeField from "./FilterTimeField";
import FilterButtonsField from "./FilterButtonsField";
import FilterCalenderField from "./FilterCalenderField";
import FilterHeader from "./FilterHeader";
import FilterStatusField from "./FilterStatusField";
import { DATES, DAYSTATUS } from "../../constants/calender";

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
  const datesList = DATES();

  // calender field
  // const [dateField, setDateField] = useState<string>("");
  const [dateField, setDateField] = useState<string>(() => {
    if (datesList.length > 0) {
      const firstDate = datesList[0];
      return `${firstDate.month}.${firstDate.date} (${firstDate.dayKorean})`;
    }
    return "";
  });

  // game time fields
  const [selectedDayStatus, setSelectedDayStatus] = useState<string>(day);
  const [selectedHour, setSelectedHour] = useState<string>("12");
  const [selectedMinute, setSelectedMinute] = useState<string>("00");
  const [timeFieldClicked, setTimeFieldClicked] = useState(false);

  // game status field
  const [status, setStatus] = useState("");

  const timeFormat = `${selectedDayStatus} ${selectedHour}:${selectedMinute}`;

  const handleResetField = () => {
    setSelectedDate("날짜");
    setSelectedTimeDate("경기 시작 시간");
    setSelectedStatus("경기 상태");
  };

  const handleApplyFilters = () => {
    // if (timeFieldClicked === true) {

    if (dateField.length > 1) {
      setSelectedDate(dateField);
    }
    setSelectedTimeDate(timeFormat);
    // }

    if (status.length >= 1 && status.length < 2) {
      setSelectedStatus(`${status}`);
    } else if (status.length > 1 && status.length <= 4) {
      const statusSpacing = `${status} `;
      setSelectedStatus(statusSpacing);
    }

    handleCloseFilterBox();
  };

  useEffect(() => {}, [
    selectedDayStatus,
    setSelectedDayStatus,
    setSelectedTimeDate,
    setSelectedStatus,
    selectedHour,
    selectedMinute,
    setStatus,
    status,
    timeFieldClicked,
    dateField,
  ]);

  return (
    <section
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.64)",
      }}
      className="overflow-hidden fixed top-0 right-0 bottom-0 left-0 h-full  z-[999] "
    >
      <div className="rounded-tl-[20px] rounded-tr-[20px] absolute right-0 bottom-0 left-0 mx-auto w-[48rem]   bg-secondary-black">
        <FilterHeader
          handleCloseFilterBox={handleCloseFilterBox}
          selectedDate={selectedDate}
          selectedStatus={selectedStatus}
          selectedTimeDate={selectedTimeDate}
        />
        <hr className="border-[#404040] " />
        <FilterCalenderField
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setDateField={setDateField}
          dateField={dateField}
        />
        <hr className="border-[#404040] " />
        <FilterTimeField
          selectedDayStatus={selectedDayStatus}
          setSelectedDayStatus={setSelectedDayStatus}
          selectedHour={selectedHour}
          selectedMinute={selectedMinute}
          setSelectedHour={setSelectedHour}
          setSelectedMinute={setSelectedMinute}
          setTimeFieldClicked={setTimeFieldClicked}
        />
        <hr className="border-[#404040] " />
        <FilterStatusField setStatus={setStatus} />

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
