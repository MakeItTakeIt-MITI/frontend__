import { useQuery } from "@tanstack/react-query";
import { getMyHostHistory } from "../api/games";

export const useGetHostHistoryQuery = (userId: number) => {
  return useQuery({
    queryKey: ["Host's Game History"],
    queryFn: () => getMyHostHistory(userId),
  });
};
