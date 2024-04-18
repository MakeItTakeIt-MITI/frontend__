import markerSvg from "../../assets/Map_Pin.svg";
import peopleSvg from "../../assets/people.svg";
import badge from "../../assets/authentication-badge.svg";
import reviewStar from "../../assets/star-review.png";
import { Link, useParams } from "react-router-dom";
import { useGetGameDetailQuery } from "../../hooks/games/useGetGameDetailQuery";
import { LoadingPage } from "../LoadingPage";
import { useUserInfoQuery } from "../../hooks/games/useUserInfoQuery";
import useUserDataStore from "../../store/useUserDataStore";
import { MatchInfoParticipantsBox } from "../../components/game/host/MatchInfoParticipantsBox";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { MatchTags } from "../../components/game/MatchTags";
import {
  GameCancelledTag,
  GameFinishedTag,
  RecruitingCompletedTag,
  RecruitingTag,
} from "../../stories/Tags.stories";
import { NotFoundPage } from "../NotFoundPage";
export const MatchDetailsPage = () => {
  const { id } = useParams();
  const { userId } = useUserDataStore();
  const gameIdParam = Number(id);
  const {
    data: gameDetail,
    isLoading,
    isError,
  } = useGetGameDetailQuery(gameIdParam);

  const { data: gameData } = useUserInfoQuery(userId);
  const userEmail = gameData?.data.email;
  const hostEmail = gameDetail?.data.host.email;

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <NotFoundPage />;
  }

  return (
    <section className="laptop:my-4 mobile:my-0 h-full ">
      <NavigateToPrevContainer children="경기 상세" />

      <div className="relative laptop:w-[500px]  laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4  rounded-lg flex flex-col gap-5 ">
        {/* <div className="w-full laptop:px-[13rem] tablet:px-[2rem]  tablet:max-w-[90rem] tablet:mb-0 mx-auto mobile:mb-[4rem] pt-10 pb-4 "> */}
        {/* <div className=" mobile:w-full tablet:w-[560px] tablet:mb-0 mx-auto mobile:mb-[4rem] py-3"> */}

        <div className="flex  flex-col ">
          <div className=" ">
            <div className="tablet:flex tablet:flex-col tablet:gap-1 tablet:items-start">
              {gameDetail.data.game_status === "open" && (
                <MatchTags {...RecruitingTag.args} />
              )}
              {gameDetail.data.game_status === "canceled" && (
                <MatchTags {...GameCancelledTag.args} />
              )}
              {gameDetail.data.game_status === "closed" && (
                <MatchTags {...RecruitingCompletedTag.args} />
              )}
              {gameDetail.data.game_status === "completed" && (
                <MatchTags {...GameFinishedTag.args} />
              )}
              <p className="font-bold text-[#222] tablet:text-[20px]">
                {gameDetail?.data.title}
              </p>
              <p className="text-[#999] mobile:text-[14px] tablet:text-[16px] ">
                {gameDetail?.data.startdate}{" "}
                {gameDetail?.data.starttime.slice(0, 5)} ~{" "}
                {gameDetail?.data.endtime.slice(0, 5)}
              </p>
            </div>
            <div className="flex flex-col gap-2 my-[16px] mobile:text-[14px] tablet:text-[16px] text-[#444]">
              <div className="flex gap-1">
                <img
                  src={markerSvg}
                  alt="pin icon"
                  className="tablet:w-[20px]"
                />
                <p>
                  {" "}
                  {gameDetail?.data.court.address}{" "}
                  {gameDetail?.data.court.address_detail}
                </p>
              </div>

              <div className="flex gap-1">
                <img
                  src={peopleSvg}
                  alt="peoples icon"
                  className="tablet:w-[20px]"
                />
                <p>
                  총 {gameDetail?.data.max_invitation}명 중{" "}
                  {gameDetail?.data.num_of_confirmed_participations}명 모집 완료
                </p>
              </div>
            </div>
            <p className="text-[#4065F6] font-bold text-[16px]">
              {gameDetail?.data.fee.toLocaleString("ko-KR", {
                style: "currency",
                currency: "KRW",
              })}
            </p>
          </div>
        </div>
        <div>
          {userEmail === hostEmail ? <MatchInfoParticipantsBox /> : null}
          {/* <hr className="h-[8px] w-full bg-gray-200" /> */}
          <div className="flex flex-col gap-2 mobile:px-[16px] mobile:py-[18px] ">
            <p className="text-[#222] font-bold tablet:text-[18px]">
              호스트 소개
            </p>
            <div className="flex items-center gap-2">
              <div className="rounded-[50%] bg-gray-300 w-[40px] h-[40px]"></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <p className="text-[#444] font-bold">
                    {/* {" "} */}
                    {gameDetail?.data.host.nickname} 님
                  </p>
                  <img src={badge} alt="user verified badge" />
                </div>
                <div className="flex gap-0.5 w-[250px] mobile:text-[14px] tablet:text-[16x] text-[#222]">
                  <img
                    src={reviewStar}
                    alt="review star"
                    className="w-[16px] h-[16px]"
                  />
                  <img
                    src={reviewStar}
                    alt="review star"
                    className="w-[16px] h-[16px]"
                  />
                  <img
                    src={reviewStar}
                    alt="review star"
                    className="w-[16px] h-[16px]"
                  />
                  <img
                    src={reviewStar}
                    alt="review star"
                    className="w-[16px] h-[16px]"
                  />
                  <img
                    src={reviewStar}
                    alt="review star"
                    className="w-[16px] h-[16px]"
                  />

                  <p className="ml-[4px]">5.0</p>
                  <p className="ml-[8px] underline">후기 0</p>
                </div>
              </div>
            </div>
            <p className="text-[#666] ">
              나이, 키, 성별 상관 없습니다. 농구를 잘 모르시는 분들도
              환영합니다. 즐겁게 농구하는 즐농팀입니다. 과격하고 승리에
              집착하시는 분들은 사양합니다.
            </p>
          </div>
          <hr className="h-[8px] w-full bg-gray-200" />
          <div className=" flex flex-col gap-4 mobile:px-[16px] mobile:py-[18px]">
            <p className="text-[#222] font-bold tablet:text-[18px]">
              모집 정보
            </p>
            <div>
              <h4 className="text-[#444] font-bold mobile:text-[14px] tablet:text-[16px]">
                준비물
              </h4>
              <p> {gameDetail?.data.info}</p>
            </div>

            <div>
              <p className="text-[#222]">
                예약은 무조건 입금순으로 하겠습니다.
              </p>
            </div>
          </div>

          {gameDetail.data.is_host === true ? (
            <Link to={`/games/detail/${gameIdParam}/join`}>
              <button className=" w-full h-[50px] bg-[#4065F6] rounded-[8px] text-white ">
                {" "}
                매치 상태 변경
              </button>
            </Link>
          ) : (
            <Link to={`/games/detail/${gameIdParam}/join`}>
              <button className=" w-full h-[50px] bg-[#4065F6] rounded-[8px] text-white ">
                {" "}
                매치 참가하기
              </button>
            </Link>
          )}
        </div>

        {/* <AdvertisementBanner /> */}
      </div>
    </section>
  );
};
