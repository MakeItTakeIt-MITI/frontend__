import { useQuery } from "@tanstack/react-query";
import { getMyHostHistory } from "../api/games";

export const useGetHostHistory = (userId: number) => {
  return useQuery({
    queryKey: ["host game history"],
    queryFn: () => getMyHostHistory(userId),
  });
};
