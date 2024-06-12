import uncheckedIcon from "../../assets/games/refund_agreement_unchecked.svg";
import checkedIon from "../../assets/games/refund_agreement_checked.svg";

interface GameRefundAgreementProp {
  checked: boolean;
  setChecked: (arg: boolean) => void;
  refundDetails: {
    status_code: number;
  };
}

export const GameRefundAgreementInfoBox: React.FC<GameRefundAgreementProp> = ({
  checked,
  setChecked,
  refundDetails,
}) => {
  return (
    <div className="flex flex-col items-start p-3 text-xs tracking-tight leading-5 bg-white rounded-lg border border-gray-200 border-solid max-w-[453px] text-stone-500">
      <div className="text-base font-bold leading-5 text-black">
        참여 취소 수수료 규정
      </div>
      <div className="mt-5">기본 환불 수수료 250원</div>
      <div>경기 시작 36시간 전 - 환불 수수료 %</div>
      <div>경기 시작 18시간 전 - 환불 수수료 50%</div>
      <div>경기 시작 6시간 이내 - 취소 불가</div>
      {refundDetails?.status_code === 200 && (
        <button
          onClick={() => setChecked(!checked)}
          className="flex gap-2 pr-3 mt-3.5 text-base font-bold leading-5"
        >
          <h4 style={{ color: checked ? "#4065F5" : "#666" }}>
            위 환불 규정의 동의합니다.{" "}
          </h4>
          <img
            loading="lazy"
            src={checked ? checkedIon : uncheckedIcon}
            className="shrink-0 my-auto w-3.5 aspect-square"
          />
        </button>
      )}
    </div>
  );
};
