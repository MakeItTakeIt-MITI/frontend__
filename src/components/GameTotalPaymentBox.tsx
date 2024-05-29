export const GameTotalPaymentBox = ({ detailData }: any) => {
  return (
    <div className="w-[453px] p-3 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-3.5 inline-flex">
      <div className="text-neutral-800 text-base font-bold font-['Pretendard'] leading-[18px]">
        정산 정보
      </div>
      <div className="h-[98px] flex-col justify-start items-center gap-3 flex">
        <div className="w-[429px] justify-between items-center inline-flex">
          <div className="w-[130px] h-4 text-stone-500 text-sm font-normal font-['Pretendard'] leading-none">
            경기 참여비
          </div>
          <div className="w-[130px] h-4 text-right text-zinc-800 text-sm font-normal font-['Pretendard'] leading-none">
            {detailData.data.game.fee.toLocaleString("ko-KR", {
              style: "currency",
              currency: "KRW",
            })}
          </div>
        </div>
        <div className="w-[429px] h-[0px] border border-gray-200"></div>
        <div className="w-[429px] justify-between items-center inline-flex">
          <div className="w-[130px] h-4 text-stone-500 text-sm font-normal font-['Pretendard'] leading-none">
            정산 수수료
          </div>
          <div className="w-[130px] h-4 text-right text-zinc-800 text-sm font-normal font-['Pretendard'] leading-none">
            {detailData.data.commission.toLocaleString("ko-KR", {
              style: "currency",
              currency: "KRW",
            })}
          </div>
        </div>
        <div className="w-[429px] h-[0px] border border-gray-200"></div>
        <div className="w-[429px] justify-between items-center inline-flex">
          <div className="w-[130px] h-[18px] text-neutral-800 text-base font-bold font-['Pretendard'] leading-[18px]">
            현재 정산 금액
          </div>
          <div className="w-[130px] text-right text-rose-500 text-base font-bold font-['Pretendard'] leading-[18px]">
            {detailData.data.final_settlement_amount.toLocaleString("ko-KR", {
              style: "currency",
              currency: "KRW",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
