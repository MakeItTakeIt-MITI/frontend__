import { useGetRefundFeeDetailsQuery } from "../../hooks/games/useGetRefundFeeDetailsQuery";

interface PaymentDetailProp {
  gameIdParam: number | null;
  participationId: number | null;
}

export const GameRefundPaymentDetailBox: React.FC<PaymentDetailProp> = ({
  gameIdParam,
  participationId,
}) => {
  const { data: refundDetails } = useGetRefundFeeDetailsQuery(
    gameIdParam,
    participationId
  );

  return (
    <div className="flex flex-col p-3 text-sm tracking-tight leading-4 bg-white rounded-lg border border-gray-200 border-solid max-w-[453px]">
      <div className="text-base font-bold leading-5 text-neutral-800">
        환불 정보
      </div>
      <div className="flex gap-5 justify-between mt-3.5">
        <div className="text-stone-500">경기 참여비</div>
        <div className="text-right text-zinc-800">
          {refundDetails?.data.payment_amount.total_amount.toLocaleString(
            "ko-KR",
            {
              currency: "KRW",
              style: "currency",
            }
          )}
        </div>
      </div>
      <div className="shrink-0 mt-3 h-px bg-gray-200 border border-gray-200 border-solid" />
      <div className="flex gap-5 justify-between mt-3">
        <div className="text-stone-500">결제 수수료</div>
        <div className="text-right text-zinc-800">
          {refundDetails?.data.commission_amount.payment_commission_amount.toLocaleString(
            "ko-KR",
            {
              currency: "KRW",
              style: "currency",
            }
          )}
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-3">
        <div className="text-stone-500">참여 취소 수수료</div>
        <div className="text-right text-zinc-800">
          {refundDetails?.data.commission_amount.cancelation_commission_amount.toLocaleString(
            "ko-KR",
            {
              currency: "KRW",
              style: "currency",
            }
          )}
        </div>
      </div>
      <div className="shrink-0 mt-3 h-px bg-gray-200 border border-gray-200 border-solid" />
      <div className="flex gap-5 justify-between mt-3 text-base font-bold leading-5">
        <div className="text-neutral-800">총 환불 금액</div>
        <div className="text-right text-rose-500">
          {refundDetails?.data.final_refund_amount.toLocaleString("ko-KR", {
            currency: "KRW",
            style: "currency",
          })}
        </div>
      </div>
    </div>
  );
};
