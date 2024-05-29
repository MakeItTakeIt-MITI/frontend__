import { useQuery } from "@tanstack/react-query";
import { getMyReviews } from "../../api/reviews";

export const useGetMyReviewsQuery = (
  userId: number | null,
  review_type: string | null,
  page?: number | null | undefined
) => {
  return useQuery({
    queryKey: ["My Reviews"],
    queryFn: () => getMyReviews(userId, page, review_type),
  });
};
