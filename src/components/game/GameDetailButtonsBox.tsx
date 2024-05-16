import { Link, useParams } from "react-router-dom";
import { GameDetailField } from "../../interface/gameInterface";

interface GameDetailButtonProps {
  gameDetail: GameDetailField;
  currentGameCancelAvailibility: string | number;
}

export const GameDetailButtonsBox = ({
  gameDetail,
  currentGameCancelAvailibility,
}: GameDetailButtonProps) => {
  const { id } = useParams();
  const gameIdParam = Number(id);

  return (
    <div className="laptop:static mobile:fixed mobile:bottom-[80px] mobile:px-4 laptop:px-0  mobile:w-full text-[14px]">
      {gameDetail?.game_status === "open" && gameDetail?.is_host && (
        <Link to={`/games/detail/${gameIdParam}/edit`}>
          <button className=" w-full h-[48px] bg-[#52A2D0] rounded-lg text-white ">
            {" "}
            경기 수정하기
          </button>
        </Link>
      )}

      {gameDetail?.game_status === "open" &&
        !gameDetail?.is_participated &&
        !gameDetail?.is_host && (
          <Link to={`/games/detail/${gameIdParam}/join`}>
            <button className=" w-full h-[48px] bg-[#4065F6] rounded-lg text-white ">
              {" "}
              경기 참가하기
            </button>
          </Link>
        )}
      {gameDetail?.game_status === "open" && gameDetail?.is_participated && (
        <Link to={`/games/cancel-participation/${gameDetail?.id}`}>
          <button
            disabled={currentGameCancelAvailibility !== 200 ? true : false}
            style={{
              backgroundColor:
                currentGameCancelAvailibility !== 200 ? "#E8E8E8" : "#F64061",
            }}
            className=" w-full h-[48px] b rounded-lg text-white "
          >
            {" "}
            {currentGameCancelAvailibility !== 200
              ? "참여를 취소할 수 없습니다"
              : "참여 취소하기"}
          </button>
        </Link>
      )}

      {gameDetail?.game_status === "canceled" && null}
      {gameDetail?.game_status === "closed" && (
        <div>
          <button
            disabled
            className=" w-full h-[48px] bg-[#969696] rounded-lg text-[#E8E8E8] "
          >
            {" "}
            모집이 끝났습니다.
          </button>
        </div>
      )}
      {gameDetail?.game_status === "completed" && (
        <Link to="/">
          <button className=" w-full h-[48px] bg-[#4065F6] rounded-lg text-white ">
            {" "}
            리뷰 작성하기
          </button>
        </Link>
      )}
    </div>
  );
};
