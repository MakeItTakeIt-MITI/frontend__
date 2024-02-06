import { DateBox } from "./DateBox";

export const DatesListContainer = () => {
  //   const koreanDayOfWeek = date.toLocaleDateString("ko-KR", { weekday: "long" });

  const availableDates = [];
  for (let i = 0; i <= 14; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    availableDates.push(date);
  }

  return (
    <div className="flex gap-4">
      {availableDates.map((gameDate) => {
        return <DateBox gameDate={gameDate} />;
      })}
    </div>
  );
};
