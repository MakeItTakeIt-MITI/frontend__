import { useState } from "react";

export const DateBox = () => {
  const [selected, setSelected] = useState(true);
  // const [startIndex, setStartIndex] = useState(0);

  const triggerSelected = () => {
    setSelected(!selected);
  };

  // const showNextDates = () => {
  //   setStartIndex(startIndex + 4);
  // };

  const availableDates = [];
  for (let i = 0; i < 5; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    availableDates.push(newDate);
  }
  return (
    <div className="flex justify-around items-center">
      {availableDates.map((date, index) => {
        return (
          <button
            key={index}
            className="flex flex-col items-center justify-center text-[14px] mobile:w-[60px] tablet:w-[80px] mobile:h-[52px] tablet:h-[60px] rounded-xl"
            onClick={triggerSelected}
          >
            <span>{date.toLocaleDateString("ko-kr", { day: "numeric" })}</span>
            <span>
              {date.toLocaleDateString("ko-kr", { weekday: "short" })}
            </span>
          </button>
        );
      })}
    </div>
  );
};
