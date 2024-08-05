const DateCard = ({ dayOfWeek, date, month }) => {
  return (
    <>
      {/* header */}

      {/* dates */}
      <div className="flex items-center gap-[0.5rem]">
        {/* date item */}
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
