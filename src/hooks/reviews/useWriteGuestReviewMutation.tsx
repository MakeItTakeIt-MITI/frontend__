import { useMutation } from "@tanstack/react-query";
import { writeGuestReview } from "../../api/reviews";

export const useWriteGuestReviewMutation = (
  userId: number | null,
  participationId: number | null
) => {
  return useMutation({
    mutationFn: (data) => writeGuestReview(userId, participationId, data),
    onSuccess: (response) => {
      console.log(response);
    },
  });
};
