import { useState } from "react";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { GameHistoryContainer } from "../../components/game/host/GameHistoryContainer";
import { useParticipationHistoryInfiniteQuery } from "../../hooks/games/useParticipationHistoryInfiniteQuery";
import useUserDataStore from "../../store/useUserDataStore";
import { CourtDetailMap } from "../../components/naver/CourtDetailMap";
import { getCourtDetailQuery } from "../../hooks/courts/getCourtDetailQuery";
import { useParams } from "react-router-dom";

export const CourtDetailPage = () => {
  const [gameStatusQuery, setGameStatusQuery] = useState("");
  const { userId } = useUserDataStore();
  const { id } = useParams();
  const courtIdParam = Number(id);

  const {
    data: gameHistory,

    fetchNextPage,
    hasNextPage,
  } = useParticipationHistoryInfiniteQuery(userId, gameStatusQuery);

  const { data: courtDetailData } = getCourtDetailQuery(courtIdParam);

  console.log(courtDetailData);

  return (
    <section className="laptop:my-[69px] mobile:mb-16">
      <NavigateToPrevContainer children="경기장 상세 정보" />

      <div className="flex laptop:flex-row mobile:flex-col  justify-between   laptop:max-w-[1024px] mobile:w-full mx-auto">
        {" "}
        <div className="laptop:max-w-[431px]  space-y-[25px]">
          <CourtDetailMap courtData={courtDetailData} />
          <div className="flex flex-col justify-center laptop:mx-0 mobile:mx-3 p-3 tracking-tight rounded-lg border border-gray-200 border-solid ">
            <div className="flex gap-5 justify-between whitespace-wrap">
              <div className="flex flex-col justify-center py-px">
                <div className="text-lg font-bold leading-5 text-ellipsis text-zinc-800">
                  {courtDetailData?.data.name}
                </div>
                <div className="mt-4 text-xs font-medium leading-4 text-ellipsis text-neutral-400">
                  경기도 용인시 수지구 동천로 417-1
                  {courtDetailData?.data.address}
                  {courtDetailData?.data.address_detail}
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a4e445f2d7ab7fee90edf0dff720f5c6c472c2e4e0c5f950d928ff869629c4f?"
              />
            </div>
            <div className="mt-5 text-xs font-medium leading-5 text-zinc-900">
              {courtDetailData?.data.info}
            </div>
          </div>
        </div>
        <div
          style={{ scrollbarWidth: "thin" }}
          className=" laptop:w-[530px] bg-[#FBFBFB]  laptop:h-[738px] mobile:h-full   mobile:w-full mx-auto   p-3 rounded-lg flex flex-col gap-10 "
        >
          <GameHistoryContainer
            data={gameHistory}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        </div>
      </div>
    </section>
  );
};
