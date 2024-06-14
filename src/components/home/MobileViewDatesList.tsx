import { useState } from "react";

interface DateBoxProps {
  setSelectedDate: (arg: Date) => void;
}

export const MobileViewDatesList = ({ setSelectedDate }: DateBoxProps) => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [today, setToday] = useState<string | null>(new Date().toDateString());

  const availableDates = [];

  for (let i = 0; i < 16; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    availableDates.push(newDate);
  }

  const handleSelectDate = (input: Date, index: number) => {
    setSelectedDate(input);
    setToday(null);
    setSelected(input);
    console.log(index);
  };

  return (
    <div className="flex gap-4 px-4 items-center  overflow-y-scroll py-2">
      <div className="flex gap-4 justify-center items-center">
        {availableDates.map((date, index) => {
          return (
            <button
              key={index}
              className="flex flex-col items-center justify-center text-[14px] w-[60px]  h-[52px]  rounded-xl "
              onClick={() => handleSelectDate(date, index)}
              style={{
                backgroundColor:
                  date.toDateString() === today ||
                  selected?.toDateString() === date.toDateString()
                    ? " #4065f6 "
                    : "#f2f2f2",
                color:
                  date.toDateString() === today ||
                  selected?.toDateString() === date.toDateString()
                    ? "#fff"
                    : "#707070",
              }}
            >
              <span>
                {date.toLocaleDateString("ko-kr", { day: "numeric" })}
              </span>
              <span>
                {date.toLocaleDateString("ko-kr", { weekday: "short" })}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
