export const GameCardSkeleton = () => {
  return (
    <div className="sm:w-full md:w-full bg-dark-card border border-[#525252] rounded-xl p-4  sm:h-[7.5rem] md:h-[120px] space-y-3">
      <div className="space-y-2">
        <div className="w-[26px] h-[10px] bg-light-dark"></div>
        <div className="w-full h-[16px] bg-light-dark"></div>
      </div>
      <div className="space-y-2">
        <div className="w-[72px] h-[16px] bg-light-dark"></div>
        <div className="w-full h-[16px] flex justify-between">
          <div className="w-[42px] h-[16px] bg-light-dark"></div>{" "}
          <div className="w-[52px] h-[16px] bg-light-dark"></div>
        </div>
      </div>
    </div>
  );
};
