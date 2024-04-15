import { useQuery } from "@tanstack/react-query";
import { getGuestGameHistory } from "../../api/games";

export const useGetGuestGameHistory = (
  userId: number | null,
  gameStatus: string,
  pageNumber: number
) => {
  return useQuery({
    queryKey: ["Guest Game History"],
    queryFn: () => getGuestGameHistory(userId, gameStatus, pageNumber),
  });
};
