import { useQuery } from "@tanstack/react-query";
import { getUserWrittenReviews } from "../../api/reviews";

export const useGetUserWrittenReviewsQuery = (
  userId: number | null,
  review_type: string | null,
  page?: number | null | undefined
) => {
  return useQuery({
    queryKey: ["User Written Reviews"],
    queryFn: () => getUserWrittenReviews(userId, page, review_type),
  });
};
