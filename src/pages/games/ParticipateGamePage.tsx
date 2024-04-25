import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { GameDetailHeader } from "../../components/game/GameDetailStatusBox";
import { GameDetailInfoBox } from "../../components/game/GameDetailInfoBox";
import { GameDetailExtraInfoBox } from "../../components/game/GameDetailExtraInfoBox";
import { useParams } from "react-router-dom";
import { useGetGameDetailQuery } from "../../hooks/games/useGetGameDetailQuery";
import { GamePaymentInfoBox } from "../../components/game/GamePaymentInfoBox";
import { LoadingPage } from "../LoadingPage";
import { NotFoundPage } from "../NotFoundPage";
import kakaoPayIcon from "../../assets/kakao_pay_icon.svg";

export const ParticipateGamePage = () => {
  const { id } = useParams();
  const gameIdParam = Number(id);

  const {
    data: gameDetail,
    isError,
    isPending,
  } = useGetGameDetailQuery(gameIdParam);

  if (isPending) {
    return <LoadingPage />;
  }

  if (isError) {
    return <NotFoundPage />;
  }

  return (
    <>
      <NavigateToPrevContainer children="경기 상세" />
      <div className=" relative laptop:w-[500px]  laptop:min-h-[735px] h-full mb-16   mobile:w-full mx-auto  laptop:border border-gray-300   rounded-lg flex flex-col gap-1.5 ">
        <div className="laptop:px-6 mobile:p-3">
          <GameDetailHeader gameDetail={gameDetail.data} />
          <GameDetailInfoBox gameDetail={gameDetail.data} />
        </div>{" "}
        <hr className="w-full h-[8px] bg-gray-100" />
        <GameDetailExtraInfoBox gameDetail={gameDetail.data} />
        <hr className="w-full h-[8px] bg-gray-100" />
        <GamePaymentInfoBox />
        <hr className="w-full h-[8px] bg-gray-100" />
        <div className="p-3 space-y-4">
          <h1 className="font-bold">결제 수단</h1>
          <button className="bg-[#FFF100] rounded-xl w-full h-[48px] flex items-center justify-center ">
            <img src={kakaoPayIcon} alt="payment icon" />
          </button>
        </div>
      </div>
    </>
  );
};
