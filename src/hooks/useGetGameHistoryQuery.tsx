import { useQuery } from "@tanstack/react-query";
import { getMyGameHistory } from "../api/games";

export const useGetGameHistoryQuery = (userId: number) => {
  return useQuery({
    queryKey: ["Guest Game History"],
    queryFn: () => getMyGameHistory(userId),
  });
};
