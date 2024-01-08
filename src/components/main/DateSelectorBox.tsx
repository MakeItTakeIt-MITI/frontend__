import { useState } from "react";

export const DateSelectorBox = () => {
  const [selectingDate, setSelectedDate] = useState(new Date());
  const [displayDates, setDisplayDates] = useState(false);

  const handleDisplayDates = () => {
    setDisplayDates(!displayDates);
  };

  const handleSelectDate = (input: Date) => {
    setSelectedDate(input);
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="10"
        viewBox="0 0 12 11"
        fill="none"
      >
        <path
          d="M10.59 0.365357L6 6.54619L1.41 0.365358L-4.61523e-07 2.26819L6 10.3654L12 2.26819L10.59 0.365357Z"
          fill="#454545"
        />
      </svg>
      {displayDates && (
        <div className="   border absolute flex flex-col gap-3 py-[0.9rem] top-[48px] left-0 px-[1.1rem] rounded-8 text-gray-400  bg-[#FBFBFB] w-full">
          {availableDates?.map((dateList, index) => (
            <span
              key={index}
              className="hover:cursor-pointer hover:text-black hover:font-bold"
              onClick={() => handleSelectDate(dateList)}
              style={{
                fontWeight:
                  selectingDate.toISOString().slice(0, 10) ===
                  dateList.toISOString().slice(0, 10)
                    ? 700
                    : 500,
                color:
                  selectingDate.toISOString().slice(0, 10) ===
                  dateList.toISOString().slice(0, 10)
                    ? "black"
                    : "gray-400",
              }}
            >
              {dateList.toLocaleDateString("ko-KR", {
                timeZone: "Asia/Seoul",
                year: "numeric",
                month: "numeric",
                day: "numeric",
                weekday: "long",
              })}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
