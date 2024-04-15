import { useQuery } from "@tanstack/react-query";
import { getHostGameHistory } from "../../api/games";

export const useGetHostHistoryQuery = (
  userId: number | null,
  page_number: number,
  game_status?: string | null
) => {
  return useQuery({
    queryKey: ["Host's Game History"],
    queryFn: () => getHostGameHistory(userId, page_number, game_status),
  });
};
