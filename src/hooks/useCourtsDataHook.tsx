// import { useQuery } from "@tanstack/react-query";
// import { getAllCourts } from "../api/courts";

// export const useCourtsDataHook = (city?: string) => {
//   return useQuery({
//     queryKey: ["courts list", city],
//     queryFn: () => getAllCourts(city || ""),
//     enabled: !!city,
//   });
// };

import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllCourts } from "../api/courts";

export const useCourtsDataHook = (
  search?: string | null | undefined,
  district?: string | null | undefined
) => {
  return useInfiniteQuery({
    queryKey: ["all courts data"],
    queryFn: ({ pageParam = 1 }) => getAllCourts(search, pageParam, district),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.current_index + 1;
      const hasNextPage = nextPage <= lastPage.end_index;

      return hasNextPage ? nextPage : null;
    },
  });
};
