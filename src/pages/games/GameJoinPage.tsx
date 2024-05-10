import { useParams } from "react-router-dom";
import { useGetGameDetailQuery } from "../../hooks/games/useGetGameDetailQuery";
import { LoadingPage } from "../LoadingPage";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { NotFoundPage } from "../NotFoundPage";

import { GameDetailHostInfoBox } from "../../components/game/GameDetailHostInfoBox";
import { GameDetailExtraInfoBox } from "../../components/game/GameDetailExtraInfoBox";
import { GameDetailMap } from "../../components/naver/GameDetailMap";
import { GamePaymentInfoBox } from "../../components/game/GamePaymentInfoBox";
import { KakaoPayButton } from "../../components/kakao/KakaoPayButton";
import { GameRefundInfoBox } from "../../components/game/GameRefundInfoBox";

export const GameJoinPage = () => {
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
        <GameDetailMap gameDetail={gameDetail.data} />
        <div className="flex laptop:flex-row laptop:space-x-2 mobile:space-x-0 mobile:flex-col">
          <div className="laptop:w-[453px] laptop:space-y-2 mobile:space-y-0">
            <div className="space-y-2 p-3 laptop:border  rounded-lg">
              <GamePaymentInfoBox />
            </div>
            <div className="p-3 space-y-3 border border-gray-200 rounded-lg">
              <h2 className="font-bold">결제 수단</h2>
              <KakaoPayButton />
            </div>
            <GameRefundInfoBox />
            <button className="h-[48px] w-full rounded-lg bg-[#E8E8E8] text-[#969696]">
              결제하기
            </button>
          </div>
          <div className="laptop:w-[453px] laptop:space-y-2 mobile:space-y-0">
            <GameDetailHostInfoBox gameDetail={gameDetail.data} />
            <GameDetailExtraInfoBox gameDetail={gameDetail.data} />
          </div>
        </div>
      </div>
    </section>
  );
};
