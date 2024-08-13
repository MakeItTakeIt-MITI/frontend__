import TimePicker from "./TimePicker";

const MobileFilterTimeField = () => {
  return (
    <div className="py-[1.25rem] px-[1.31rem] space-y-[0.75rem] sm:block md:hidden">
      <h2 className="text-sm font-[600] text-secondary-white">시간</h2>
      <div>
        {/* time selection */}

        <div></div>
        {/* <TimePicker /> */}
        {/* 이후 경기 */}
        <h3 className="text-sm font-[400] text-primary-white">이후 경기</h3>
      </div>
    </div>
  );
};

export default MobileFilterTimeField;
