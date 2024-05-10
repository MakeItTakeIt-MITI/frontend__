import { useNavigate, useParams } from "react-router-dom";
import useUserDataStore from "../../store/useUserDataStore";
import { useGetGameDetailQuery } from "../../hooks/games/useGetGameDetailQuery";
import { LoadingPage } from "../LoadingPage";
import { NotFoundPage } from "../NotFoundPage";
import { useEffect } from "react";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { GameDetailMap } from "../../components/naver/GameDetailMap";
import { GameDetailHeader } from "../../components/game/GameDetailStatusBox";
import { GameDetailInfoBox } from "../../components/game/GameDetailInfoBox";
import { GameDetailParticipantsBox } from "../../components/game/GameDetailParticipantsBox";
import { GameDetailButtonsBox } from "../../components/game/GameDetailButtonsBox";
import { GameDetailHostInfoBox } from "../../components/game/GameDetailHostInfoBox";
import { GameDetailExtraInfoBox } from "../../components/game/GameDetailExtraInfoBox";
import { EditGameDetailsBox } from "../../components/game/EditGameDetailsBox";

export const GameDetailEditPage = () => {
  const { userId } = useUserDataStore();
  const { id } = useParams();
  const gameIdParam = Number(id);
  const navigate = useNavigate();

  const {
    data: gameDetail,
    isLoading,
    isError,
  } = useGetGameDetailQuery(gameIdParam);

  console.log(gameDetail);

  console.log(gameDetail);

  useEffect(() => {
    if (!gameDetail?.data.is_host) {
      navigate(`/games/detail/${gameIdParam}`);
    }
  }, []);

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
            <hr className="mobile:block laptop:hidden w-full h-[8px] bg-gray-100" />
            {/* <GameDetailParticipantsBox gameDetail={gameDetail.data} /> */}
            <EditGameDetailsBox gameDetail={gameDetail.data} />
            <hr className="mobile:block laptop:hidden w-full h-[8px] bg-gray-100" />
            <GameDetailButtonsBox gameDetail={gameDetail.data} />
          </div>
          <div className="laptop:w-[453px] laptop:space-y-2 mobile:space-y-0">
            <div className="space-y-2 p-3 laptop:border border-gray-200 rounded-lg">
              <GameDetailHeader gameDetail={gameDetail.data} />
              <GameDetailInfoBox gameDetail={gameDetail.data} />
            </div>
            {/* <GameDetailHostInfoBox gameDetail={gameDetail.data} /> */}
            <GameDetailExtraInfoBox gameDetail={gameDetail.data} />
          </div>
        </div>
      </div>
    </section>
  );
};
