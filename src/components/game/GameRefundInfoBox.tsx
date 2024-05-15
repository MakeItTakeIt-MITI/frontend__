import checked_box from "../../assets/games/refund_agreement_checked.svg";
import unchecked_box from "../../assets/games/refund_agreement_unchecked.svg";

interface RefundInfoBoxProp {
  isChecked: boolean;
  setIsChecked: (arg: boolean) => void;
}

export const GameRefundInfoBox: React.FC<RefundInfoBoxProp> = ({
  isChecked,
  setIsChecked,
}) => {
  const handleCheckAgreement = () => {
    setIsChecked(!isChecked);
  };
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
      <h2 className="font-bold">모집 실패로 인한 환불</h2>
      <ul className="text-[12px] space-y-2 pl-2">
        <li>
          경기 시작전까지 최소 모집 인원이 모집되지 않은경우 해당 경기는
          취소됩니다.
        </li>
        <li>
          모집 실패로 인한 경기 취소시, 결제한 금액은 자동 환불처리되며 포인트
          및 할인을 제외한 금액이 환불됩니다.
        </li>
      </ul>
      <div className="flex gap-[7px]">
        <h3
          style={{ color: !isChecked ? "#333" : "#4065F5" }}
          className=" text-[16px] font-bold"
        >
          결제 및 환불 정책을 확인하였으며, 동의합니다.{" "}
        </h3>
        <button onClick={handleCheckAgreement}>
          {!isChecked ? (
            <img src={unchecked_box} alt="checkbox" />
          ) : (
            <img src={checked_box} alt="checkbox" />
          )}
        </button>
        {/* <input type="checkbox" name="" id="" className="rounded-full" /> */}
      </div>
    </div>
  );
};
