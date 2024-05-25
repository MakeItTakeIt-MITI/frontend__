import { useQuery } from "@tanstack/react-query";
import { getUserWrittenReviewsDetails } from "../../api/reviews";

export const useGetMyWrittenReviewDetailQuery = (
  userId: number | null,
  reviewId: number | null
) => {
  return useQuery({
    queryKey: ["My Reviews Details"],
    queryFn: () => getUserWrittenReviewsDetails(userId, reviewId),
  });
};
