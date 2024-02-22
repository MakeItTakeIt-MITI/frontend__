import { useMutation } from "@tanstack/react-query";
import { createGameData } from "../api/games";

export const useHostGameMutation = () => {
  return useMutation({
    mutationFn: createGameData,
  });
};
