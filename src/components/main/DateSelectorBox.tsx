import { useState } from "react";

export const DateSelectorBox = () => {
  const [selectingDate, setSelectedDate] = useState(new Date());
  const [displayDates, setDisplayDates] = useState(false);

  const handleDisplayDates = () => {
    setDisplayDates(!displayDates);
  };

  const availableDates = [];
  for (let i = 0; i < 14; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    availableDates.push(newDate);
  }

  return (
    <div
      onClick={handleDisplayDates}
      className=" hover:cursor-pointer relative flex items-center justify-between px-[1.1rem] py-[0.9rem] w-[307px] mb-[16px] h-[48px] rounded-8 bg-[#FBFBFB]"
    >
      <span className="font-bold leading-[20.8px]">
        {selectingDate.toLocaleDateString("ko-KR", {
          timeZone: "Asia/Seoul",
          year: "numeric",
          month: "numeric",
          day: "numeric",
          weekday: "long",
        })}
      </span>
    </div>
  );
};
