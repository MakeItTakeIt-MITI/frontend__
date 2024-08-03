import { useState } from "react";

interface DateBoxProps {
  selectingDate: Date;
  setSelectedDate: (arg: Date) => void;
}

export const DesktopViewDatesList = ({
  selectingDate,
  setSelectedDate,
}: DateBoxProps) => {
  const [displayDates, setDisplayDates] = useState(false);
  const availableDates = [];

  for (let i = 0; i < 14; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    availableDates.push(newDate);
  }

  const handleDisplayDates = () => {
    setDisplayDates(!displayDates);
  };

  const handleSelectDate = (input: Date) => {
    setSelectedDate(input);
  };

  return (
    <div className="relative tablet:block mobile:hidden ">
      <div
        onClick={handleDisplayDates}
        className="  flex items-center justify-between p-4   rounded-lg bg-[#FBFBFB] hover:cursor-pointer"
      >
        <span className="font-bold leading-[20.8px] ">
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
        <div
          onMouseLeave={() => setDisplayDates(false)}
          className=" absolute right-0 top-[56px] py-2 px-4 left-0 w-full rounded-lg bg-[#FBFBFB] z-[999]  "
        >
          {availableDates &&
            availableDates.map((date, index) => {
              return (
                <div
                  className=" z-999  w-full h-full hover:font-bold text-gray-400 hover:text-black rounded-2 "
                  key={index}
                  onClick={() => handleSelectDate(date)}
                >
                  <p className="mb-2 hover:text-[16px]  hover:cursor-pointer">
                    {displayDates &&
                      date.toLocaleDateString("ko-KR", {
                        timeZone: "Asia/Seoul",
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        weekday: "long",
                      })}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
