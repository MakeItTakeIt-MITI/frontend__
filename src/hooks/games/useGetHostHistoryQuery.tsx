import { useQuery } from "@tanstack/react-query";
import { getHostGameHistory } from "../../api/games";

export const useGetHostHistoryQuery = (userId: number | null) => {
  return useQuery({
    queryKey: ["Host's Game History"],
    queryFn: () => getHostGameHistory(userId),
  });
};
