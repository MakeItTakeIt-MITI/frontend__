import payment from "../../assets/v11/landing-payment.png";

const Payments = () => {
  return (
    <div className="w-full h-[800px] bg-light-dark flex">
      <img src={payment} alt="payments landing" />
      <div className="flex items-center justify-end w-full">
        <div className="space-y-3">
          <h1 className="text-primary-teal font-bold text-[18px]">경기 정산</h1>
          <h2 className="text-white text-[52px] font-bold">
            번거로운 정산은 MITI가, <br />
            농구만 즐기세요!
          </h2>
          <p className="text-[#E5E5E5] text-xl font-[400]">
            수많은 게스트의 참가비 일일이 관리하기 힘드시죠? <br />
            이제 참가비는 MITI가 자동으로 정산해 드리니 농구만 즐기세요
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payments;
