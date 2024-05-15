import { useParams } from "react-router-dom";
import { useKakaoPayReadyMutation } from "../../hooks/payments/useKakaoPayReadyMutation";

interface GamePaymentBtnProp {
  isChecked: boolean;
}

export const GamePaymentButton: React.FC<GamePaymentBtnProp> = ({
  isChecked,
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
      disabled={!isChecked ? true : false}
      style={{
        backgroundColor: !isChecked ? "#E8E8E8" : "#4065F5",
        color: !isChecked ? "#969696" : "#fff",
      }}
      className="h-[48px] w-full rounded-lg  "
    >
      결제하기
    </button>
  );
};
