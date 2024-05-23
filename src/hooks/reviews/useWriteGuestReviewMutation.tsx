import { useMutation } from "@tanstack/react-query";
import { writeGuestReview } from "../../api/reviews";
import { useNavigate, useParams } from "react-router-dom";

export const useWriteGuestReviewMutation = (
  userId: number | null,
  participationId: number | null
) => {
  const navigate = useNavigate();
  const { id } = useParams();
  return useMutation({
    mutationFn: (data) => writeGuestReview(userId, participationId, data),
    onSuccess: (response) => {
      if (response.status_code === 201) {
        navigate(`/games/detail/${id}/review`);
      }
    },
  });
};
