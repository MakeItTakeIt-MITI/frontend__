import { useState } from "react";
import rightArrow from "../../../assets/Chevron_Right_MD.svg";

export const MobileGameDatesContainer = () => {
  const [selected, setSelected] = useState(true);

  const triggerSelected = () => {
    setSelected(!selected);
  };

  const availableDates = [];
  for (let i = 0; i < 4; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    availableDates.push(newDate);
  }
  return (
    <div className="flex items-center py-4 justify-between ">
      <div
        className="w-9 h-9 bg-[#9C99B0] rounded-full flex items-center justify-center hover:cursor-pointer"
        hover:cursor-pointer
      >
        <img
          src={rightArrow}
          alt="left arrow"
          className="text-white rotate-180"
        />
      </div>
      {availableDates.map((date, index) => {
        return (
          <button
            key={index}
            className="flex flex-col items-center justify-center text-[14px] mobile:w-[60px] tablet:w-[80px] mobile:h-[52px] tablet:h-[60px] rounded-xl"
            style={
              selected && index === 0
                ? { backgroundColor: "#4065F6", color: "white" }
                : { backgroundColor: "#F2F2F2", color: "#707070" }
            }
            onClick={triggerSelected}
          >
            <span>{date.toLocaleDateString("ko-kr", { day: "numeric" })}</span>
            <span>
              {date.toLocaleDateString("ko-kr", { weekday: "short" })}
            </span>
          </button>
        );
      })}
      <div className="w-9 h-9 bg-[#9C99B0] rounded-full flex items-center justify-center hover:cursor-pointer">
        <img src={rightArrow} alt="left arrow" className="text-white" />
      </div>
    </div>
  );
};
