import { useMutation } from "@tanstack/react-query";
import { userParticipateGame } from "../../api/games";
import { useNavigate } from "react-router-dom";
import { ParticipantField } from "../../interface/gameInterface";

export const useParticipateGameMutation = (gameId: number) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: ParticipantField) => userParticipateGame(gameId, data),
    onSuccess: () => {
      navigate("/games/join/submitted");
    },
    onError: () => {
      console.error();
    },
  });
};
