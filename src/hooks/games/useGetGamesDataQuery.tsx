import { useQuery } from "@tanstack/react-query";
import { getAllGames } from "../../api/games";

export const useGetGamesDataQuery = (date: string) => {
  return useQuery({
    queryKey: ["allGames"],
    queryFn: () => getAllGames(date),
    // retry: 2,
  });
};
