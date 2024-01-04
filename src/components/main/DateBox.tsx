import { useState } from "react";

export const DateBox = () => {
  const [selected, setSelected] = useState(true);

  const triggerSelected = () => {
    setSelected(!selected);
  };

  const availableDates = [];
  for (let i = 0; i < 5; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    availableDates.push(newDate);
  }
  return (
    <>
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
    </>
  );
};
