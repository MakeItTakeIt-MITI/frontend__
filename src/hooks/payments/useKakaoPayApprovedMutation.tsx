import { useMutation } from "@tanstack/react-query";
import axiosUrl from "../../utils/axios";

export const useKakaoPayApprovedMutation = (
  request_id: string | null,
  pg_token: string | null
) => {
  return useMutation({
    mutationKey: ["Kakao payment approved"],
    mutationFn: async () => {
      try {
        const response = await axiosUrl.post(
          `/payments/kakao/approve/${request_id}?pg_token=${pg_token}`
        );
        return response.data;
      } catch {
        throw new Error();
      }
    },
    onSuccess: (response) => {
      console.log(response);
    },
  });
};
