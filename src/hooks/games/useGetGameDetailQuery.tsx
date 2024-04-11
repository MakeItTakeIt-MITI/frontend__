import { useQuery } from "@tanstack/react-query";
import { getGameDetail } from "../../api/games";

export const useGetGameDetailQuery = (gameId: number) => {
  return useQuery({
    queryKey: ["gameDetail"],
    queryFn: () => getGameDetail(gameId),
  });
};
