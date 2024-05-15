import React, { useState } from "react";
import kakao_pay_icon_enabled from "../../assets/payment/kakao_pay_btn_enabled.svg";
import kakao_pay_icon_disabled from "../../assets/payment/kakao_pay_btn_disabled.svg";

interface KakaoPayButtonProp {
  setPaymentMethodSelected: (arg: boolean) => void;
  paymentMethodSelected: boolean;
}
export const KakaoPayButton: React.FC<KakaoPayButtonProp> = ({
  setPaymentMethodSelected,
  paymentMethodSelected,
}) => {
  return (
    <button
      onClick={() => {
        setPaymentMethodSelected(!paymentMethodSelected);
      }}
      style={{
        backgroundColor: paymentMethodSelected ? "#FFF100" : "#FFF",
        border: !paymentMethodSelected ? "1px solid #E8E8E8" : "none",
      }}
      role="kakao-payment-btn"
      className=" w-full bg-[#FFF100] h-[48px]  rounded-lg text-[14px] font-bold flex items-center justify-center"
    >
      <img
        src={
          paymentMethodSelected
            ? kakao_pay_icon_enabled
            : kakao_pay_icon_disabled
        }
        alt="kakao icon"
        className=""
      />
    </button>
  );
};
