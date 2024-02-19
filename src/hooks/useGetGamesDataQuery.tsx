import { useQuery } from "@tanstack/react-query";
import { getAllGames } from "../api/games";

export const useGetGamesDataQuery = () => {
  return useQuery({
    queryKey: ["allGames"],
    queryFn: () => getAllGames(),
    retry: 2,
  });
};
