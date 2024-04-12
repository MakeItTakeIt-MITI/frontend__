import { useQuery } from "@tanstack/react-query";
import { getHostGameHistory } from "../../api/games";

export const useGetHostHistoryQuery = (
  userId: number | null,
  page_number: number
) => {
  return useQuery({
    queryKey: ["Host's Game History"],
    queryFn: () => getHostGameHistory(userId, page_number),
  });
};
