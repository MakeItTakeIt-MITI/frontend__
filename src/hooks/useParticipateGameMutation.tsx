import { useMutation } from "@tanstack/react-query";
import { userParticipateGame } from "../api/games";

export const useParticipateGameMutation = (gameId: number) => {
  return useMutation({
    mutationFn: () => userParticipateGame(gameId),
  });
};
