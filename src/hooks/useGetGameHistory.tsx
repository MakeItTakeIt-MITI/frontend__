import { useQuery } from "@tanstack/react-query";
import { getMyGameHistory } from "../api/games";

export const useGetGameHistory = (userId: number) => {
  return useQuery({
    queryKey: ["host game history"],
    queryFn: () => getMyGameHistory(userId),
  });
};
