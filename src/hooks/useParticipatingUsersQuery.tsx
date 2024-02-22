import { useQuery } from "@tanstack/react-query";
import { getParticipatingUsers } from "../api/games";

export const useParticipatingUsersQuery = (gameId: number) => {
  return useQuery({
    queryKey: ["participants"],
    queryFn: () => getParticipatingUsers(gameId),
  });
};
