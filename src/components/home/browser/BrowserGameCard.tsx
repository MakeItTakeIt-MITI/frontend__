export const BrowserGameCard = () => {
  return (
    <div className="flex flex-col gap-2 p-4 hover:cursor-pointer">
      <div>
        <span className="text-[#4065F6] bg-[#C1E1FF] text-[13px] p-1 rounded-[2px]">
          1명 모집
        </span>
      </div>
      <h4 className="text-[18px] font-bold">
        수원 매탄 공원 4 vs 4 (주차 12자리)
      </h4>
      <p className="text-[#999] text-sm">2023. 11. 15 15:30~ 18:00</p>
      <p className="text-[#4065F6] font-bold">₩23,000</p>
      <hr className="w-full" />
    </div>
  );
};
