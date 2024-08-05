import { useState } from "react";
import drop from "../../../assets/v11/drop.svg";
import { GAMEDAYTYPE, GAMEHOUR, GAMEMINUTE } from "../../../constants/time";
import "./scrollbar.css";
import Dropdown from "./Dropdown";

type FilterTimeFieldProps = {
  selectedDayStatus: string;
  selectedHour: string;
  selectedMinute: string;
  setSelectedDayStatus: (arg: string) => void;
  setSelectedHour: (arg: string) => void;
  setSelectedMinute: (arg: string) => void;
};

const FilterTimeField = ({
  selectedDayStatus,
  selectedHour,
  selectedMinute,
  setSelectedDayStatus,
  setSelectedHour,
  setSelectedMinute,
}: FilterTimeFieldProps) => {
  const [displayDayOverplay, setDisplayDayOverloy] = useState(false);
  const [displayHourOverlay, setDisplayHourOverloy] = useState(false);
  const [displayMinutesOverplay, setDisplayMinutesOverloy] = useState(false);
  return (
    <div className="py-[2rem] px-[2.5rem] space-y-[1.25rem]">
      <h1 className="font-bold text-secondary-white">시간</h1>
      <div className="flex items-center gap-[2.5rem]">
        <div className="space-x-[1.25rem] flex items-center">
          {/* 오전 /오후 */}
          {/* 오전 /오후 */}
          <div className="space-x-[0.5rem] flex items-center">
            <Dropdown
              label="오전 / 오후"
              options={GAMEDAYTYPE}
              selectedOption={selectedDayStatus}
              onSelect={setSelectedDayStatus}
            />
          </div>

          {/* HOURS */}
          <div className="space-x-[0.5rem] flex items-center">
            <Dropdown
              label="시"
              options={GAMEHOUR}
              selectedOption={selectedHour}
              onSelect={setSelectedHour}
            />
            <span className="font-[300] text-[#A3A3A3]">시</span>
          </div>

          {/* Minutes */}
          <div className="space-x-[0.5rem] flex items-center">
            <Dropdown
              label="분"
              options={GAMEMINUTE}
              selectedOption={selectedMinute}
              onSelect={setSelectedMinute}
            />
            <span className="font-[300] text-[#A3A3A3]">분</span>
          </div>

          {/* ----- */}
        </div>
        <h2 className="text-primary-white font-bold">이후 경기</h2>
      </div>
    </div>
  );
};

export default FilterTimeField;
