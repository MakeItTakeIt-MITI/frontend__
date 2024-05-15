import { useParams } from "react-router-dom";
import { useKakaoPayReadyMutation } from "../../hooks/payments/useKakaoPayReadyMutation";

interface GamePaymentBtnProp {
  isChecked: boolean;
  paymentMethodSelected: boolean;
}

export const GamePaymentButton: React.FC<GamePaymentBtnProp> = ({
  isChecked,
  paymentMethodSelected,
}) => {
  const { id } = useParams();
  const gameId = Number(id);

  const { mutate } = useKakaoPayReadyMutation(gameId);

  const handlePaymentReadyBtn = () => {
    mutate();
  };

  return (
    <button
      onClick={handlePaymentReadyBtn}
      disabled={!paymentMethodSelected || !isChecked ? true : false}
      style={{
        backgroundColor:
          !paymentMethodSelected || !isChecked ? "#E8E8E8" : "#4065F5",
        color: !paymentMethodSelected || !isChecked ? "#969696" : "#fff",
      }}
      className="h-[48px] w-full rounded-lg  "
    >
      결제하기
    </button>
  );
};
