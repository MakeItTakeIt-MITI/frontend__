import { useInfiniteQuery } from "@tanstack/react-query";
import { getProceededCourtList } from "../../api/courts";

export const useGetCourtListInfiniteQuery = (courtId: number | null) => {
  return useInfiniteQuery({
    queryKey: ["courts procceeded finished list"],
    queryFn: ({ pageParam = 1 }) => getProceededCourtList(courtId, pageParam),

    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.current_index + 1;
      const hasNextPage = nextPage <= lastPage.end_index;

      return hasNextPage ? nextPage : null;
    },
  });
};
