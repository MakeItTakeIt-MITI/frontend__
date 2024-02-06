interface DateProp {
  gameDate: Date;
}

export const DateBox = ({ gameDate }: DateProp) => {
  return (
    <div
      style={{ width: "100px", height: "60px" }}
      className="flex flex-col justify-center items-center  bg-[#FBFBFB] rounded-xl text-[14px]"
    >
      <span>{gameDate.toLocaleDateString("ko-kr", { day: "numeric" })}</span>
      <span>{gameDate.toLocaleDateString("ko-KR", { weekday: "long" })}</span>
    </div>
  );
};
