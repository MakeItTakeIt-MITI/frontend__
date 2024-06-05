import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { useState } from "react";
import { LoadingPage } from "../LoadingPage";
import { useParams } from "react-router-dom";
import { UserReviewDetailCard } from "../../../components/reviews/UserReviewDetailCard";
import { useGetGameDetailQuery } from "../../../hooks/games/useGetGameDetailQuery";
import { ReviewPageMap } from "../../../components/naver/ReviewPageMap";
import { MatchTags } from "../../../components/game/MatchTags";
import { GameFinishedTag } from "../../../stories/Tags.stories";

import markerSvg from "../../../assets/Map_Pin.svg";
import peopleSvg from "../../../assets/people.svg";
import { useGetParticipantsDetailsQuery } from "../../../hooks/games/useGetParticipantsDetailsQuery";
import { NoListFoundMessageBox } from "../../../components/common/NoListFoundMessageBox";
import { GameReviewSkeleton } from "../../../components/ui/skeleton/GameReviewSkeleton";

export const ReviewGame = () => {
  const [loading, _setLoading] = useState(false);
  const { id } = useParams();
  const gameIdParam = Number(id);

  const { data: participantsData } =
    useGetParticipantsDetailsQuery(gameIdParam);
  const { data: gameData } = useGetGameDetailQuery(gameIdParam);

  return (
    <>
      {loading ? (
        <>
          <GameReviewSkeleton />
          <LoadingPage />
        </>
      ) : (
        <section className="laptop:my-5 mobile:mb-16  ">
          <NavigateToPrevContainer children="리뷰 작성하기" />

          <h1 className=" laptop:w-[981px] mx-auto mobile:hidden laptop:block px-3 mb-[32px] text-[26px] font-bold">
            경기 리뷰 남기기
          </h1>
          <div className="flex laptop:flex-row mobile:flex-col gap-5 laptop:px-3 mobile:px-1 laptop:w-[981px] laptop:h-[745px]  mx-auto ">
            <div className="laptop:max-w-[431px]  mobile:w-full space-y-5">
              <ReviewPageMap gameDetail={gameData?.data} />
              <div className="flex flex-col items-start p-3 text-sm font-medium tracking-tight leading-4 bg-white rounded-lg border border-gray-200 border-solid max-w-[431px]">
                <MatchTags {...GameFinishedTag.args} />
                <div className="mt-3.5 text-base font-bold leading-5 text-ellipsis text-neutral-800">
                  {gameData?.data.title}
                </div>
                <div className="mt-1 whitespace-nowrap text-ellipsis text-neutral-400">
                  {gameData?.data.startdate}{" "}
                  {gameData?.data.starttime.slice(0, 5)} ~{" "}
                  {gameData?.data.endtime.slice(0, 5)}
                </div>
                <div className="flex gap-1 mt-3.5 text-neutral-700">
                  <img
                    src={markerSvg}
                    alt="pin icon"
                    className="shrink-0 w-4 aspect-square"
                  />
                  <div>
                    {" "}
                    {gameData?.data.court.address}{" "}
                    {gameData?.data.court.address_detail}
                  </div>
                </div>
                <div className="flex gap-1 mt-1 text-neutral-700">
                  <img
                    src={peopleSvg}
                    alt="peoples icon"
                    className="shrink-0 w-4 aspect-square"
                  />
                  <div>
                    {" "}
                    총 {gameData?.data.max_invitation}명 중{" "}
                    {gameData?.data.num_of_confirmed_participations}명 모집 완료
                  </div>
                </div>
                <div className="mt-3.5 text-base font-bold leading-5 text-blue-600">
                  {gameData?.data.fee.toLocaleString("ko-KR", {
                    style: "currency",
                    currency: "KRW",
                  })}
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div className="laptop:w-[464px] space-y-2.5">
                <h2 className="text-xl font-[600] ">호스트 리뷰</h2>
                <div className="space-y-5 w-full h-[97px] p-3 rounded-lg border border-gray-200 ">
                  {participantsData?.data.participations.length !== 0 ? (
                    <UserReviewDetailCard data={gameData} isHost={true} />
                  ) : (
                    <div className="h-full flex items-center justify-center text-[#999] text-[14px] ">
                      호스트 리뷰를 이미 작성하셨습니다!
                    </div>
                  )}
                </div>
              </div>
              {/* bottom right */}
              <div className="space-y-2.5">
                <h2 className="text-xl font-[600]">게스트 리뷰</h2>
                {/* guest container list */}
                <div
                  style={{ scrollbarWidth: "thin" }}
                  className="space-y-5 h-[509px] p-3 rounded-lg border border-gray-200 overflow-y-auto"
                >
                  {participantsData?.data.participations.length !== 0 ? (
                    participantsData?.data.participations.map(
                      (participant: any) => {
                        return (
                          <UserReviewDetailCard
                            key={participant?.user.id}
                            participantData={participant.user}
                            isHost={false}
                          />
                        );
                      }
                    )
                  ) : (
                    <NoListFoundMessageBox
                      title="작성할 게스트 리뷰가 없습니다."
                      content="리뷰 남겨주셔서 감사합니다!"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
