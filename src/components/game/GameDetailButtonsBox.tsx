import { Link, useParams } from "react-router-dom";
import { GameDetailBoxProp } from "../../interface/gameInterface";

export const GameDetailButtonsBox = ({ gameDetail }: GameDetailBoxProp) => {
  const { id } = useParams();
  const gameIdParam = Number(id);

  console.log();

  return (
    <div className="laptop:p-6 mobile:p-3 text-[14px]">
      {gameDetail.game_status === "open" && gameDetail?.is_host && (
        <Link to={`/games/detail/${gameIdParam}/join`}>
          <button className=" w-full h-[48px] bg-[#52A2D0] rounded-lg text-white ">
            {" "}
            경기 수정하기
          </button>
        </Link>
      )}

      {gameDetail.game_status === "open" && !gameDetail?.is_participated && (
        <Link to={`/games/detail/${gameIdParam}/join`}>
          <button className=" w-full h-[48px] bg-[#4065F6] rounded-lg text-white ">
            {" "}
            경기 참가하기
          </button>
        </Link>
      )}
      {gameDetail.game_status === "open" && gameDetail?.is_participated && (
        <Link to={`/games/detail/${gameIdParam}/join`}>
          <button className=" w-full h-[48px] bg-[#F64061] rounded-lg text-white ">
            {" "}
            참여 취소하기
          </button>
        </Link>
      )}

      {gameDetail.game_status === "canceled" && (
        <div>
          <button
            disabled
            className=" w-full h-[48px] bg-[#969696] rounded-lg text-[#E8E8E8] "
          >
            {" "}
            취소된 경기입니다.
          </button>
        </div>
      )}
      {gameDetail.game_status === "closed" && (
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
      {gameDetail.game_status === "completed" && (
        <div>
          <button
            disabled
            className=" w-full h-[48px] bg-[#969696] rounded-lg text-[#E8E8E8] "
          >
            {" "}
            이미 종료된 경기입니다.
          </button>
        </div>
      )}
    </div>
  );
};
