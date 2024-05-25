import { useQuery } from "@tanstack/react-query";
import { getUserWrittenReviews } from "../../api/reviews";

export const useGetUserWrittenReviewsQuery = (userId: number | null) => {
  return useQuery({
    queryKey: ["User Written Reviews"],
    queryFn: () => getUserWrittenReviews(userId),
  });
};
