import { useMutation } from "@tanstack/react-query";
import { editGameDetail } from "../../api/games";
import { GameEditParameters } from "../../interface/gameInterface";

export const useEditGameDetailMutation = (game_id: number) => {
  return useMutation({
    mutationKey: ["edit game details"],
    mutationFn: (option: GameEditParameters) => editGameDetail(game_id, option),
    onSuccess: (response) => {
      if (response?.status_code === 200) {
        window.location.reload();
      }
    },
  });
};
