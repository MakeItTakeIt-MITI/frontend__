import { useMutation } from "@tanstack/react-query";
import { userParticipateGame } from "../api/games";
import { useNavigate } from "react-router-dom";
import { JoinGameField } from "../pages/UserJoinMatchPage";

export const useParticipateGameMutation = (
  gameId: number,
  data: JoinGameField
) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => userParticipateGame(gameId, data),
    onSuccess: () => {
      navigate("/games/join/submitted");
    },
  });
};
