import { useMutation } from "@tanstack/react-query";
import { cancelGameParticipation } from "../../api/games";

export const useCancelParticipationMutation = (
  gameId: number | null,
  userId: number | null
) => {
  return useMutation({
    mutationFn: () => cancelGameParticipation(gameId, userId),
    onSuccess: (re) => {
      console.log(re);
    },
  });
};
