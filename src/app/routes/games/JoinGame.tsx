import { useParams } from "react-router-dom";
import { useGetGameDetailQuery } from "../../../hooks/games/useGetGameDetailQuery";
import { LoadingPage } from "../LoadingPage";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { NotFoundPage } from "../NotFoundPage";
import { UserReviewDetailCard } from "../../../components/game/UserReviewDetailCard";
import { GameDetailExtraInfoBox } from "../../../components/game/GameDetailExtraInfoBox";
import { DetailPageMap } from "../../../components/naver/DetailPageMap";
import { GamePaymentInfoBox } from "../../../components/game/GamePaymentInfoBox";
import { KakaoPayButton } from "../../../components/ui/buttons/KakaoPayButton";
import { GameRefundInfoBox } from "../../../components/game/GameRefundInfoBox";
import { useState } from "react";
import { GamePaymentButton } from "../../../components/payment/GamePaymentButton";

export const JoinGame = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [paymentMethodSelected, setPaymentMethodSelected] = useState(false);

  const { id } = useParams();
  const gameIdParam = Number(id);
  const {
    data: gameDetail,
    isLoading,
    isError,
  } = useGetGameDetailQuery(gameIdParam);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <NotFoundPage />;
  }

  return (
    <section className="laptop:my-[30px] ">
      <NavigateToPrevContainer children="경기 상세" />

      <div className=" relative laptop:w-[915px]  laptop:min-h-[735px] h-full mb-16   mobile:w-full mx-auto laptop:mb-0  mobile:mb-[140px]  rounded-lg flex flex-col gap-1.5 ">
        <DetailPageMap
          height="495px"
          width="100%"
          gameDetail={gameDetail.data}
        />{" "}
        <div className="flex laptop:flex-row laptop:space-x-2 mobile:space-x-0 mobile:flex-col">
          <div className="laptop:w-[453px] laptop:space-y-2 mobile:space-y-0">
            <div className="space-y-2 p-3 laptop:border  rounded-lg">
              <GamePaymentInfoBox />
            </div>
            <div className="p-3 space-y-3 border border-gray-200 rounded-lg">
              <h2 className="font-bold">결제 수단</h2>
              <KakaoPayButton
                setPaymentMethodSelected={setPaymentMethodSelected}
                paymentMethodSelected={paymentMethodSelected}
              />
            </div>
            <GameRefundInfoBox
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
            <GamePaymentButton
              isChecked={isChecked}
              paymentMethodSelected={paymentMethodSelected}
            />
          </div>
          <div className="laptop:w-[453px] laptop:space-y-2 mobile:space-y-0">
            <UserReviewDetailCard gameDetail={gameDetail.data} />
            <GameDetailExtraInfoBox gameDetail={gameDetail.data} />
          </div>
        </div>
      </div>
    </section>
  );
};
