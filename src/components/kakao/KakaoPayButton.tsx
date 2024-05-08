import kakao_pay_icon from "../../assets/kakao_pay_icon.svg";

export const KakaoPayButton = () => {
  return (
    <a
      role="kakao-payment-btn"
      href="/"
      className=" w-full bg-[#FFF100] h-[48px]  rounded-lg text-[14px] font-bold flex items-center justify-center"
    >
      <img src={kakao_pay_icon} alt="kakao icon" className="" />
    </a>
  );
};
