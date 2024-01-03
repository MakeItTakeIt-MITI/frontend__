import { useState } from "react";

export const DateBox = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col items-center justify-center mobile:mx-4 tablet:mx-8 text-[14px] mobile:w-[60px] tablet:w-[80px] mobile:h-[52px] tablet:h-[60px] bg-[#4065F6] text-white rounded-xl">
      <span> {date.toLocaleDateString("ko-kR", { day: "numeric" })}</span>
      <span>{date.toLocaleDateString("ko-kR", { weekday: "short" })}</span>
    </div>
  );
};
