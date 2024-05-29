import { UserPaymentStatusBox } from "./UserPaymentStatusBox";

export const ParticipantsPaymentStatusBox = () => {
  return (
    <div className="w-[453px] h-[686px] overflow-y-auto p-3 bg-white rounded-lg border border-gray-200 justify-start items-start gap-3 inline-flex">
      <div className="w-[411px] flex-col justify-start items-start inline-flex">
        <div className="w-[412px] px-3 pt-3 pb-5 bg-white rounded-lg border-b border-gray-200 justify-start items-start gap-2.5 inline-flex">
          <div className="text-neutral-800 text-base font-bold font-['Pretendard'] leading-[18px]">
            참여자 정산 정보
          </div>
        </div>

        <UserPaymentStatusBox />
        <UserPaymentStatusBox />
        <UserPaymentStatusBox />
        <UserPaymentStatusBox />
        <UserPaymentStatusBox />
      </div>
      <div className="w-[121px] h-1.5 origin-top-left -rotate-90 bg-zinc-300 rounded-lg" />
    </div>
  );
};
