import { useMutation } from "@tanstack/react-query";
import { kakaoPayStatusApproved } from "../../api/payment";

export const useKakaoPayApprovedMutation = (
  request_id: string | null,
  pg_token: string | null
) => {
  return useMutation({
    mutationKey: ["Kakao payment approved"],
    mutationFn: () => kakaoPayStatusApproved(request_id, pg_token),
  });
};
