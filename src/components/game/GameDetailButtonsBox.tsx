import { Link, useParams } from "react-router-dom";
import { GameDetailBoxProp } from "../../interface/gameInterface";

export const GameDetailButtonsBox = ({ gameDetail }: GameDetailBoxProp) => {
  const { id } = useParams();
  const gameIdParam = Number(id);

  return (
    <div className="p-3 text-[14px]">
      {gameDetail.is_host && (
        <Link to={`/games/detail/${gameIdParam}/join`}>
          <button className=" w-full h-[48px] bg-[#52A2D0] rounded-lg text-white ">
            {" "}
            경기 수정하기
          </button>
        </Link>
      )}

      {!gameDetail.is_participated && (
        <Link to={`/games/detail/${gameIdParam}/join`}>
          <button className=" w-full h-[48px] bg-[#4065F6] rounded-lg text-white ">
            {" "}
            경기 참가하기
          </button>
        </Link>
      )}
      {gameDetail.is_participated && (
        <Link to={`/games/detail/${gameIdParam}/join`}>
          <button className=" w-full h-[48px] bg-[#F64061] rounded-lg text-white ">
            {" "}
            참여 취소하기
          </button>
        </Link>
      )}
    </div>
  );
};
