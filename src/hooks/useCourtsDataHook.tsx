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
    getNextPageParam: (page) => {
      const { current_index, end_index } = page.data;
      console.log("currrent index", current_index);
      console.log("End index:", end_index);

      const nextPage = current_index + 1;
      const hasNextPage = nextPage <= end_index;

      return hasNextPage ? nextPage : undefined;
    },
  });
};
