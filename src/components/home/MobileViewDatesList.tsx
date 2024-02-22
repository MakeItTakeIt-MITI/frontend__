interface DateBoxProps {
  setSelectedDate: (arg: Date) => void;
}

export const MobileViewDatesList = ({ setSelectedDate }: DateBoxProps) => {
  // const [startIndex, setStartIndex] = useState(0);
  const availableDates = [];

  for (let i = 0; i < 16; i++) {
    const newDate = new Date();
    // newDate.setDate(newDate.getDate() + startIndex + i);
    newDate.setDate(newDate.getDate() + i);
    availableDates.push(newDate);
  }

  const today = new Date().toDateString();

  const handleSelectDate = (input: Date) => {
    setSelectedDate(input);
  };

  return (
    <div className="flex gap-4 px-4 items-center tablet:hidden  overflow-y-scroll">
      <div className="flex gap-4 justify-center items-center">
        {availableDates.map((date, index) => {
          return (
            <button
              key={index}
              className="flex flex-col items-center justify-center text-[14px] w-[60px]  h-[52px]  rounded-xl "
              onClick={() => handleSelectDate(date)}
              style={{
                backgroundColor:
                  date.toDateString() === today ? "#4065F6" : "#F2F2F2",
                color: date.toDateString() === today ? "#fff" : "#707070",
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
{
  /* <button onClick={handleLeftArrowClick}>
        <img src={leftArrow} alt="" />
      </button> */
}
{
  /* <button onClick={handleRightArrowClick}>
        <img src={rightArrow} alt="" className="rotate-180" />
      </button> */
}

// const handleRightArrowClick = () => {
//   if (startIndex <= 14) {
//     setStartIndex(startIndex + 4);
//   }
// };
// const handleLeftArrowClick = () => {
//   if (startIndex > 0) {
//     setStartIndex(startIndex - 4);
//   }
// };
