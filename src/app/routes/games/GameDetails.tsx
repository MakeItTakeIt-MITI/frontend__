import { useParams } from "react-router-dom";
import { useGetGameDetailQuery } from "../../../hooks/games/useGetGameDetailQuery";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { NotFoundPage } from "../NotFoundPage";
import { GameDetailParticipantsBox } from "../../../components/game/GameDetailParticipantsBox";
import { UserReviewDetailCard } from "../../../components/game/UserReviewDetailCard";
import { GameDetailExtraInfoBox } from "../../../components/game/GameDetailExtraInfoBox";
import { GameDetailButtonsBox } from "../../../components/ui/buttons/GameDetailButtonsBox";
import { DetailPageMap } from "../../../components/naver/DetailPageMap";
import { GameDetailsCard } from "../../../components/ui/cards/GameDetailsCard";
import { GameDetailSkeleton } from "../../../components/ui/skeleton/GameDetailSkeleton";

export const GameDetails = () => {
  const { id } = useParams();
  const gameIdParam = Number(id);
  const {
    data: gameDetail,
    isPending,
    isError,
  } = useGetGameDetailQuery(gameIdParam);

  if (isPending) {
    return <GameDetailSkeleton />;
  }

  if (isError) {
    return <NotFoundPage />;
  }

  return (
    <section className="laptop:my-[30px] mobile:my-0 tablet:my-0  ">
      <NavigateToPrevContainer children="경기 상세" />

      <div className=" relative laptop:w-[915px]  laptop:min-h-[735px] tablet:h-full h-full  mobile:w-full mx-auto laptop:mb-0 tablet:mb-0  mobile:mb-[140px]  rounded-lg flex flex-col gap-1.5 ">
        <DetailPageMap
          height="495px"
          width="100%"
          gameDetail={gameDetail.data}
        />
        <div className="flex laptop:flex-row laptop:space-x-2 mobile:space-x-0 mobile:flex-col">
          <div className="laptop:w-[453px] mobile:w-full tablet:w-full laptop:space-y-2 mobile:space-y-0">
            <GameDetailsCard data={gameDetail?.data} />
            <hr className="mobile:block laptop:hidden w-full h-[8px] bg-gray-100" />
            <GameDetailParticipantsBox gameDetail={gameDetail.data} />
            <hr className="mobile:block laptop:hidden w-full h-[8px] bg-gray-100" />
            <GameDetailButtonsBox gameDetail={gameDetail.data} />
          </div>
          <div className="laptop:w-[453px] mobile:w-full tablet:w-full laptop:space-y-2 mobile:space-y-0">
            <UserReviewDetailCard gameDetail={gameDetail.data} />
            <GameDetailExtraInfoBox gameDetail={gameDetail.data} />
          </div>
        </div>
      </div>
    </section>
  );
};
