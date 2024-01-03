export const DateBox = () => {
  const availableDates = [];
  for (let i = 0; i < 4; i++) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    availableDates.push(newDate);
  }
  return (
    <>
      {availableDates.map((date, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-[14px] mobile:w-[60px] tablet:w-[80px] mobile:h-[52px] tablet:h-[60px] bg-[#4065F6] text-white rounded-xl"
          >
            <span>{date.toLocaleDateString("ko-kr", { day: "numeric" })}</span>
            <span>
              {date.toLocaleDateString("ko-kr", { weekday: "short" })}
            </span>
          </div>
        );
      })}
    </>
  );
};
