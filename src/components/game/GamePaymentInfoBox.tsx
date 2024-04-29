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

  return (
    <div className="laptop:p-6 mobile:p-3 space-y-[14px]">
      <h1 className="font-bold text-[hsl(0,0%,13%)]">결제 및 할인 정보</h1>
      <div className="flex justify-between text-[14px] text-[#666]">
        <span>경기 참여비</span>
        <span>
          ₩ {/* */}
          {paymentDetails?.data.payment_amount.game_fee_amount.toLocaleString(
            "ko-KR",
            {
              currency: "KRW",
            }
          )}
        </span>
      </div>
      <div className="flex justify-between text-[14px] text-[#666]">
        <span>결제 수수료</span>
        <span>
          {" "}
          {paymentDetails?.data.payment_amount.miti_commission_amount.toLocaleString(
            "ko-KR",
            {
              style: "currency",
              currency: "KRW",
            }
          )}
        </span>
      </div>
      <hr className="bg-[#E8E8E8] h-[1px] w-full" />
      <div className="flex justify-between text-[14px] text-[#666]">
        <span>VAT</span>
        <span>
          {" "}
          {paymentDetails?.data.payment_amount.vat_amount.toLocaleString(
            "ko-KR",
            {
              style: "currency",
              currency: "KRW",
            }
          )}
        </span>
      </div>
      <hr className="bg-[#E8E8E8] h-[1px] w-full" />
      <div className="flex justify-between text-[14px] text-[#4065F5]">
        <span>프로모션 할인</span>
        <span>₩0</span>
      </div>
      <hr className="bg-[#E8E8E8] h-[1px] w-full" />
      <div className="flex justify-between font-bold text-[#222]">
        <span>총 결제 금액</span>
        <span>
          ₩
          {paymentDetails?.data.payment_amount.game_fee_amount.toLocaleString(
            "ko-KR",
            {
              currency: "KRW",
            }
          )}
        </span>
      </div>
    </div>
  );
};
