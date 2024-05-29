export const UserPaymentStatusBox = () => {
  return (
    <div className="w-[412px] px-5 py-[15px] bg-white rounded-lg border-b border-gray-200 justify-between items-center inline-flex">
      <div className="w-[87px] h-3.5 text-neutral-400 text-xs font-normal font-['Pretendard'] leading-[14px]">
        어니언수제어묵
        <br />
        <br />
      </div>
      <div className="w-[131px] h-[18px] text-blue-600 text-base font-bold font-['Pretendard'] leading-[18px]">
        ₩ 10,000
      </div>
      <div className="w-[57px] h-[15px] justify-center items-center gap-2.5 flex">
        <div className="w-[37px] h-[15px] relative">
          <div className="w-[37px] h-[15px] left-0 top-0 absolute bg-red-200 rounded-sm" />
          <div className="w-[37px] h-[15px] left-0 top-0 absolute text-center text-red-600 text-[10px] font-semibold font-['Pretendard'] leading-[13px]">
            대기중
          </div>
        </div>
      </div>
    </div>
  );
};
