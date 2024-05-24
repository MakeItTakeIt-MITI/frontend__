import { useQuery } from "@tanstack/react-query";
import { getUserReviewFeedbackDetails } from "../../api/reviews";

export const useGetUserDetailReviewQuery = (
  userId: number | null,
  reviewId: number | null
) => {
  return useQuery({
    queryKey: ["User Detail Review"],
    queryFn: () => getUserReviewFeedbackDetails(userId, reviewId),
  });
};
