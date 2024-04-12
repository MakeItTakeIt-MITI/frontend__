import { useQuery } from "@tanstack/react-query";
import { getGuestGameHistory } from "../../api/games";

export const useGetGuestGameHistory = (userId: number | null) => {
  return useQuery({
    queryKey: ["Guest Game History"],
    queryFn: () => getGuestGameHistory(userId),
  });
};
