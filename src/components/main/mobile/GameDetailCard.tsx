import cardImg from "../../../assets/court.svg";

export const GameDetailCard = () => {
  return (
    <>
      <div className="mobile:block tablet:hidden px-[20px] ph-[16px] border border-[#E8E8E8] rounded-xl hover:cursor-pointer">
        <span className=" bg-[#C1E1FF] text-[##4065F6] text-[11px] font-[600]">
          1명 모집
        </span>
        <p className="font-bold text-[16px]">
          수원 매탄 공원 4 vs 4 (주차 12자리)
        </p>
        <p className="text-[#999] text-[14px]">2023. 11. 15 15:30~ 18:00</p>
        <p className="text-[#4065F6] font-bold text-[16px]">₩23,000</p>
      </div>
      <div className="mobile:hidden tablet:block flex flex-col  p-4 hover:cursor-pointer w-[237px] ">
        <div>
          <img src={cardImg} alt="" />
        </div>
        <div className="flex flex-col gap-2 border border-gray-200 p-3">
          <div>
            <span className="text-[#4065F6]  bg-[#C1E1FF] text-[12px] p-1 rounded-sm">
              1명 모집
            </span>
          </div>
          <h4 className="text-[16px] font-bold">
            수원 매탄 공원 4 vs 4 (주차 12자리)
          </h4>
          <p className="text-[#999] text-sm">2023. 11. 15 15:30~ 18:00</p>
          <p className="text-[#4065F6] font-bold">₩23,000</p>
        </div>
      </div>
      {/* <div className="mobile:hidden tablet:block p-4 w-[29rem]  border border-[#E8E8E8] rounded-xl hover:cursor-pointer">
        <span className=" bg-[#C1E1FF] text-[##4065F6] text-[11px] font-[600]">
          1명 모집
        </span>
        <p className="font-bold text-[16px]">
          수원 매탄 공원 4 vs 4 (주차 12자리)
        </p>
        <p className="text-[#999] text-[14px]">2023. 11. 15 15:30~ 18:00</p>
        <p className="text-[#4065F6] font-bold text-[16px]">₩23,000</p>
      </div> */}
    </>
  );
};
