type DateCard = {
  dayOfWeek: string;
  date: string | number;
  month: string | number;
};

const DateCard = ({ dayOfWeek, date, month }: DateCard) => {
  const currentMonth = new Date().getMonth() + 1;
  return (
    <>
      <div className="flex items-center gap-[0.5rem]">
        {currentMonth !== month && date === 1 && (
          <p className="font-bold text-sm text-[#7FEEF0] px-1 mx-[calc(0.5rem - 16)] w-[32px]">
            {month}월
          </p>
        )}
        <div className="flex flex-col items-center gap-[0.5rem]">
          <h2
            style={{ color: dayOfWeek === "일" ? "#FF4079" : "#f1f1f1" }}
            className="text-[12px] font-[300]"
          >
            {dayOfWeek}
          </h2>
          <div className="size-[2rem] flex items-center justify-center font-bold text-sm rounded-full bg-[#7FEEF0]">
            {date}
          </div>
        </div>
      </div>
    </>
  );
};

export default DateCard;
