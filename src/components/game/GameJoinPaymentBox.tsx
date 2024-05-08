export const GameJoinPaymentBox = ({ gameDetail }) => {
  return (
    <div className="p-3 space-y-[14px]">
      <div>결제 및 할인 정보</div>
      <div className="">
        <div className="flex justify-between">
          <span>경기 참여비</span>
          <span>₩ 10,000</span>
        </div>
        <div className="flex justify-between">
          <span>결제 수수료</span>
          <span>₩ 500</span>
        </div>
        <div className="flex justify-between">
          <span>VAT</span>
          <span>₩ 10,000</span>
        </div>
        <div className="flex justify-between">
          <span>할인</span>
          <span>₩ 500</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};
