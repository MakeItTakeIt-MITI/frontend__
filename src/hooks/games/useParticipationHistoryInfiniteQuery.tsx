import { useInfiniteQuery } from "@tanstack/react-query";
import axiosUrl from "../../utils/axios";

export const useParticipationHistoryInfiniteQuery = (
  userId: number | null,
  gameStatus?: string | null
) => {
  return useInfiniteQuery({
    queryKey: ["participation history"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axiosUrl.get(
        `/users/${userId}/participated-games?page=${pageParam}&game_status=${gameStatus}`
      );

      return response.data.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const nextPage = lastPage.current_index + 1;
      const hasNextPage = nextPage <= lastPage.end_index;

      return hasNextPage ? nextPage : null;
    },
  });
};
