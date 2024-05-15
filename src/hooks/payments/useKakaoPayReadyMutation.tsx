import { useMutation } from "@tanstack/react-query";
import axiosUrl from "../../utils/axios";

export const useKakaoPayReadyMutation = (gameId: number | null) => {
  return useMutation({
    mutationKey: ["kakao payment ready"],
    mutationFn: async (data) => {
      try {
        const response = await axiosUrl.post(
          `/payments/kakao/ready/games/${gameId}`,
          data
        );
        return response.data;
      } catch {
        throw new Error();
      }
    },
    onSuccess: (response) => {
      console.log(response);

      if (response.status_code === 201) {
        console.log(response.data.next_redirect_pc_url);
        const redirect = response.data.next_redirect_pc_url;
        window.open(redirect, "_blank");
      }
    },
  });
};
