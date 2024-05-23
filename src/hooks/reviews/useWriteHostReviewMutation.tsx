import { useMutation } from "@tanstack/react-query";
import { writeHostReview } from "../../api/reviews";
import { useNavigate, useParams } from "react-router-dom";

export const useWriteHostReviewMutation = (gameId: number | null) => {
  const navigate = useNavigate();
  const { id } = useParams();
  return useMutation({
    mutationFn: (data: { rating: number; comment: string }) =>
      writeHostReview(gameId, data),
    onSuccess: (response) => {
      if (response.status_code === 201) {
        navigate(`/games/detail/${id}/review`);
      }
    },
  });
};
