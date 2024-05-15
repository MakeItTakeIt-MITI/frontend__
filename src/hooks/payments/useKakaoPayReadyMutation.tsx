import { useMutation } from "@tanstack/react-query";
import { kakaoPayStatusReady } from "../../api/payment";

export const useKakaoPayReadyMutation = (gameId: number | null) => {
  return useMutation({
    mutationKey: ["kakao payment ready"],
    mutationFn: () => kakaoPayStatusReady(gameId),
    onSuccess: (response) => {
      if (response.status_code === 201) {
        console.log(response.data.next_redirect_pc_url);
        const redirect = response.data.next_redirect_pc_url;
        window.open(redirect, "_blank");
      }
    },
  });
};
