import { Link, useNavigate, useParams } from "react-router-dom";
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
import { useForm } from "react-hook-form";
import { GameEditParameters } from "../../interface/gameInterface";
import { useEditGameDetailMutation } from "../../hooks/games/useEditGameDetailMutation";

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

  const { handleSubmit, register } = useForm<GameEditParameters>();
  const { mutate: editGameMutate, data: editGameResponse } =
    useEditGameDetailMutation(gameIdParam);

  const isSubmit = (data: GameEditParameters) => {
    editGameMutate(data);
  };

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
            <EditGameDetailsBox
              register={register}
              gameDetail={gameDetail.data}
              editGameResponse={editGameResponse}
            />
            <hr className="mobile:block laptop:hidden w-full h-[8px] bg-gray-100" />
            <div className="laptop:static mobile:fixed mobile:bottom-[80px] mobile:px-4 laptop:px-0  mobile:w-full text-[14px]">
              <Link to={`/games/detail/${gameIdParam}/edit`}>
                <button
                  onClick={handleSubmit(isSubmit)}
                  className=" w-full  h-[48px] bg-[#52A2D0] rounded-lg text-white "
                >
                  {" "}
                  경기 수정하기
                </button>
              </Link>
            </div>
          </div>
          <div className="laptop:w-[453px] laptop:space-y-2 mobile:space-y-0">
            <div className="space-y-2 p-3 border border-gray-200  rounded-lg">
              <GameDetailHeader gameDetail={gameDetail.data} />
              <GameDetailInfoBox gameDetail={gameDetail.data} />
            </div>
            <GameDetailExtraInfoBox gameDetail={gameDetail.data} />
          </div>
        </div>
      </div>
    </section>
  );
};
