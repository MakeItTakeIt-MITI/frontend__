import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllCourts } from "../api/courts";

export const useCourtsDataHook = (
  search?: string | null | undefined,
  district?: string | null | undefined
) => {
  return useInfiniteQuery({
    queryKey: ["all courts data", search, district],
    queryFn: ({ pageParam = 1 }) => getAllCourts(pageParam, search, district),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.data.current_index + 1;
      const hasNextPage = nextPage <= lastPage.data.end_index;

      return hasNextPage ? nextPage : undefined;
    },
  });
};
