import { useQuery } from "@tanstack/react-query";
import { getParticipantsDetails } from "../../api/games";

export const useGetParticipantsDetailsQuery = (gameId: number | null) => {
  return useQuery({
    queryKey: ["Participants Detail Info"],
    queryFn: () => getParticipantsDetails(gameId),
  });
};
