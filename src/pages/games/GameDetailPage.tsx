import { useParams } from "react-router-dom";
import { useGetGameDetailQuery } from "../../hooks/games/useGetGameDetailQuery";
import { LoadingPage } from "../LoadingPage";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";

import { NotFoundPage } from "../NotFoundPage";
import { GameDetailHeader } from "../../components/game/GameDetailStatusBox";
import { GameDetailInfoBox } from "../../components/game/GameDetailInfoBox";
import { GameDetailParticipantsBox } from "../../components/game/GameDetailParticipantsBox";
import { GameDetailHostInfoBox } from "../../components/game/GameDetailHostInfoBox";
import { GameDetailExtraInfoBox } from "../../components/game/GameDetailExtraInfoBox";
import { GameDetailButtonsBox } from "../../components/game/GameDetailButtonsBox";
export const GameDetailPage = () => {
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
    <>
      <NavigateToPrevContainer children="경기 상세" />

      <div className=" relative laptop:w-[500px]  laptop:min-h-[735px] h-full mb-16   mobile:w-full mx-auto  laptop:border border-gray-300   rounded-lg flex flex-col gap-1.5 ">
        <div className="space-y-2 laptop:p-6 mobile:p-3">
          <GameDetailHeader gameDetail={gameDetail.data} />
          <GameDetailInfoBox gameDetail={gameDetail.data} />
        </div>
        <hr className="w-full h-[8px] bg-gray-100" />
        <GameDetailParticipantsBox gameDetail={gameDetail.data} />
        <hr className="w-full h-[8px] bg-gray-100" />
        <GameDetailHostInfoBox gameDetail={gameDetail.data} />
        <hr className="w-full h-[8px] bg-gray-100" />
        <GameDetailExtraInfoBox gameDetail={gameDetail.data} />
        <GameDetailButtonsBox gameDetail={gameDetail.data} />

        {/* <AdvertisementBanner /> */}
      </div>
    </>
  );
};
