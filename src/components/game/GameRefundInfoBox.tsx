export const GameRefundInfoBox = () => {
  return (
    <div className="p-3 space-y-3 laptop:border border-gray-200 rounded-lg">
      <h2 className="font-bold">결제 및 환불 정책</h2>
      <h3 className="text-[14px] font-bold">참여 취소 환불 수수료 정책</h3>
      <ul className="text-[12px] space-y-2 pl-2">
        <li>경기 시작 48시간 전 : 무료취소</li>
        <li>경기 시작 24시간 전 : 80% 환급</li>
        <li>경기 시작 12시간 전 : 50% 환급</li>
        <li>경기 시작 6시간 전 : 75% 환급</li>
        <li>경기 시작 2시간 전 : 참여 취소 불가</li>
        <li className="text-[#E92C2C]">
          경기 시작 2시간 이내인 경기에 참여할 경우 참여 취소가 불가능하니
          유의해주세요!
        </li>
      </ul>
    </div>
  );
};
