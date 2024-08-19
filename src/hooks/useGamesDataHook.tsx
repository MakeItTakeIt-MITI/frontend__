import { useQuery } from "@tanstack/react-query";
import { getAllGames } from "../api/games";

export const useGamesDataHook = () => {
  return useQuery({
    queryKey: ["allGames"],
    queryFn: () => getAllGames(),
  });
};
