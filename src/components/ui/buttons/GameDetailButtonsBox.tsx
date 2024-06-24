import { Link, useParams } from "react-router-dom";
import { GameDetailField } from "../../../interface/gameInterface";
import { SubmitButton } from "./SubmitButton";
import { Active, Edit, Inactive, RedButton } from "./Button.stories";

interface GameDetailButtonProps {
  gameDetail: GameDetailField;
}

export const GameDetailButtonsBox = ({ gameDetail }: GameDetailButtonProps) => {
  const { id, title } = useParams();
  const gameIdParam = Number(id);
  const gameTitleParam = title;

  return (
    <div className="laptop:static mobile:fixed mobile:bottom-[80px] tablet:bottom-[40px] mobile:px-4 laptop:px-0  mobile:w-full text-[14px]">
      {gameDetail?.game_status === "open" && gameDetail?.is_host && (
        <Link to={`/games/detail/${gameIdParam}/edit`}>
          <SubmitButton children="경기 수정하기" {...Edit.args} />
        </Link>
      )}

      {gameDetail?.game_status === "open" &&
        !gameDetail?.is_participated &&
        !gameDetail?.is_host && (
          <Link to={`/games/detail/${gameIdParam}/${gameTitleParam}/join`}>
            <SubmitButton children="경기 참가하기" {...Active.args} />
          </Link>
        )}
      {gameDetail?.game_status === "open" && gameDetail?.is_participated && (
        <Link to={`/games/cancel-participation/${gameDetail?.id}`}>
          <SubmitButton children="참여 취소하기" {...RedButton.args} />
        </Link>
      )}

      {gameDetail?.game_status === "canceled" && null}
      {gameDetail?.game_status === "closed" && (
        <div>
          <SubmitButton children="모집이 끝났습니다." {...Inactive.args} />
        </div>
      )}
      {gameDetail?.game_status === "completed" && (
        <Link to={`/games/detail/${gameIdParam}/review`}>
          <SubmitButton children="리뷰 작성하기" {...Active.args} />
        </Link>
      )}
    </div>
  );
};
