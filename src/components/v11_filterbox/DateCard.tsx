type DateCard = {
  dayOfWeek: string;
  date: string | number;
  month: string | number;
  setDateField: (arg: string) => void;
  index: number;
  dateField: string;
};

const DateCard = ({
  dayOfWeek,
  date,
  month,
  setDateField,
  dateField,
}: DateCard) => {
  const currentMonth = new Date().getMonth() + 1;

  const displayDate = `${month}.${date} (${dayOfWeek})`;
  const handleFilterDate = (date: string) => {
    setDateField(date);
  };

  const isSelected = dateField === displayDate;

  return (
    <div
      onClick={() => handleFilterDate(displayDate)}
      className="flex items-center gap-[0.5rem] hover:cursor-pointer"
    >
      {currentMonth !== month && date === 1 && (
        <p className="font-bold text-sm text-primary-teal px-1 mx-[calc(0.5rem - 16)] w-[32px]">
          {month}월
        </p>
      )}
      <div className="flex flex-col items-center gap-[0.5rem]">
        <h2
          style={{
            color:
              dayOfWeek === "일" ? "#FF4079" : isSelected ? "#fff" : "#525252",
          }}
          className={`text-[12px] font-[300] 
        ${dayOfWeek !== "일" && !isSelected ? "text-[#525252]" : "text-[#171717]"}
      `}
        >
          {dayOfWeek}
        </h2>

        <div
          style={{
            backgroundColor: isSelected ? "#7FEEF0" : "#262626",
            color: isSelected ? "#171717" : "#080505",
            borderRadius: isSelected ? "100px" : "0px",
          }}
          className={`size-[2rem] flex items-center justify-center font-bold text-sm `}
        >
          {date}
        </div>
      </div>
    </div>
  );
};

export default DateCard;
