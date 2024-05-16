import { useParams } from "react-router-dom";
import { useGetPaymentInfoQuery } from "../../hooks/payments/useGetPaymentInfoQuery";
import { LoadingPage } from "../../pages/LoadingPage";
import { NotFoundPage } from "../../pages/NotFoundPage";

export const GamePaymentInfoBox = () => {
  const { id } = useParams();
  const gameIdParam = Number(id);

  const {
    data: paymentDetails,
    isPending,
    isError,
  } = useGetPaymentInfoQuery(gameIdParam);

  if (isPending) {
    return <LoadingPage />;
  }
  if (isError) {
    return <NotFoundPage />;
  }

  const gameFee =
    paymentDetails?.data.payment_information.payment_amount.game_fee_amount;
  const commissionFee =
    paymentDetails?.data.payment_information.payment_amount.commission_amount;
  // const totalAmount =
  //   paymentDetails?.data.payment_information.payment_amount.game_fee_amount;
  const vatFee =
    paymentDetails?.data.payment_information.payment_amount.vat_amount;
  const promotionDiscount =
    paymentDetails?.data.payment_information.discount_amount.promotion_amount;
  const finalPaymentAmount =
    paymentDetails?.data.payment_information.final_payment_amount;

  return (
    <div className="p-3 space-y-[14px] border-gray-200">
      <h1 className="font-bold text-[hsl(0,0%,13%)]">결제 및 할인 정보</h1>
      <div className="flex justify-between text-[14px] text-[#666]">
        <span>경기 참여비</span>
        <span>
          {gameFee.toLocaleString("ko-KR", {
            currency: "KRW",
            style: "currency",
          })}
        </span>
      </div>
      <div className="flex justify-between text-[14px] text-[#666]">
        <span>결제 수수료</span>
        <span>
          {commissionFee.toLocaleString("ko-KR", {
            currency: "KRW",
            style: "currency",
          })}
        </span>
      </div>
      <hr className="bg-[#E8E8E8] h-[1px] w-full" />
      <div className="flex justify-between text-[14px] text-[#666]">
        <span>VAT</span>
        <span>
          {" "}
          {vatFee.toLocaleString("ko-KR", {
            style: "currency",
            currency: "KRW",
          })}
        </span>
      </div>
      <hr className="bg-[#E8E8E8] h-[1px] w-full" />
      <div className="flex justify-between text-[14px] font-[400] text-[#4065F5]">
        <span>프로모션 할인</span>
        <span>
          {promotionDiscount.toLocaleString("ko-KR", {
            currency: "KRW",
            style: "currency",
          })}
        </span>
      </div>
      <hr className="bg-[#E8E8E8] h-[1px] w-full" />
      <div className="flex justify-between font-bold text-black">
        <span>총 결제 금액</span>
        <span className="text-[#F45858]">
          {finalPaymentAmount.toLocaleString("ko-KR", {
            currency: "KRW",
            style: "currency",
          })}
        </span>
      </div>
    </div>
  );
};
