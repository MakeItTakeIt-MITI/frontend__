import { useParams } from "react-router-dom";
import useUserDataStore from "../../store/useUserDataStore";
import { useCancelParticipationMutation } from "../../hooks/games/useCancelParticipationMutation";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { useGetGameDetailQuery } from "../../hooks/games/useGetGameDetailQuery";
import { GameDetailMap } from "../../components/naver/GameDetailMap";
import { GameDetailHeader } from "../../components/game/GameDetailStatusBox";
import { GameDetailInfoBox } from "../../components/game/GameDetailInfoBox";
import { GameDetailExtraInfoBox } from "../../components/game/GameDetailExtraInfoBox";
import { LoadingPage } from "../LoadingPage";
import { NotFoundPage } from "../NotFoundPage";
import { GameRefundPaymentDetailBox } from "../../components/game/GameRefundPaymentDetailBox";
import { GameRefundAgreementInfoBox } from "../../components/game/GameRefundAgreementInfoBox";
import { useState } from "react";
import { AlertModal } from "../../components/common/AlertModal";
import { ParticipationCancelled } from "../../stories/Modal.stories";

export const GameCancelParticipationPage = () => {
  const [checked, setChecked] = useState(false);

  const { id } = useParams();
  const gameIdParam = Number(id);

  const {
    data: gameDetail,
    isLoading,
    isError,
  } = useGetGameDetailQuery(gameIdParam);
  const participationId = gameDetail?.data?.participation?.id;

  const { mutate: cancelParticipation, data: cancelResponse } =
    useCancelParticipationMutation(gameIdParam, participationId);

  const handleCancelParticipation = () => {
    cancelParticipation();
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <NotFoundPage />;
  }

  return (
    <section className="laptop:my-[30px] ">
      <NavigateToPrevContainer children="경기 취소하기" />

      <div className=" relative laptop:w-[915px]  laptop:min-h-[735px] h-full mb-16   mobile:w-full mx-auto laptop:mb-0  mobile:mb-[140px]  rounded-lg flex flex-col gap-1.5 ">
        {cancelResponse?.status_code === 200 && (
          <AlertModal {...ParticipationCancelled.args} />
        )}
        <GameDetailMap gameDetail={gameDetail?.data} />
        <div className="flex laptop:flex-row laptop:space-x-2 mobile:space-x-0 mobile:flex-col">
          <div className="laptop:w-[453px] laptop:space-y-2 mobile:space-y-0">
            <GameRefundPaymentDetailBox
              gameIdParam={gameIdParam}
              participationId={participationId}
            />
            <GameRefundAgreementInfoBox
              checked={checked}
              setChecked={setChecked}
            />
            <div className="laptop:static mobile:fixed mobile:bottom-[80px] mobile:px-4 laptop:px-0  mobile:w-full text-[14px]">
              <button
                onClick={handleCancelParticipation}
                disabled={checked ? false : true}
                style={{ backgroundColor: checked ? "#F64061" : "#E8E8E8" }}
                className=" w-full h-[48px]  rounded-lg text-white "
              >
                참여 취소하기
              </button>
            </div>
          </div>
          <div className="laptop:w-[453px] laptop:space-y-2 mobile:space-y-0">
            <div className="space-y-2 p-3 laptop:border border-gray-200 rounded-lg">
              <GameDetailHeader gameDetail={gameDetail?.data} />
              <GameDetailInfoBox gameDetail={gameDetail?.data} />
            </div>
            <hr className="mobile:block laptop:hidden w-full h-[8px] bg-gray-100" />
            <GameDetailExtraInfoBox gameDetail={gameDetail?.data} />
          </div>
        </div>
      </div>
    </section>
  );
};
