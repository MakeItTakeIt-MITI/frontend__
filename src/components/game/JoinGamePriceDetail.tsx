interface MatchFeeProp {
  fee: number;
}
export const JoinGamePriceDetail = ({ fee }: MatchFeeProp) => {
  return (
    <div className="p-[16px] flex flex-col gap-4">
      <h4 className="font-bold">보증금 정보</h4>

      <div className="flex justify-between text-[14px]">
        <p className="text-[#666] ">경기 참여비 (보증금)</p>
        <p>
          {fee.toLocaleString("ko-KR", {
            style: "currency",
            currency: "KRW",
          })}
        </p>
      </div>
      <div className="flex justify-between text-[14px]">
        <p className="text-[#666] ">MITI 수수료</p>
        <p>₩0</p>
      </div>
      <hr className="max-w-[90rem] w-full mx-auto" />
      <div className="flex justify-between text-[14px]">
        <p className="text-[#666] font-bold text-[16px]">총 결제 금액</p>
        <p className="font-bold text-red-500 text-[16px]">
          {fee.toLocaleString("ko-KR", {
            style: "currency",
            currency: "KRW",
          })}
        </p>
      </div>
    </div>
  );
};
