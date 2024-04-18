import { useMutation } from "@tanstack/react-query";
import { oAuthKakaoLogin } from "../../api/auth";

export const useKakaoLoginMutation = (setModal: (arg: boolean) => void) => {
  return useMutation({
    mutationKey: ["kakao_login"],
    mutationFn: oAuthKakaoLogin,
    onSuccess: (response) => {
      if (response.error_code === 302) {
        setModal(true);
      }

      if (response.status_code === 200) {
        console.log(response);
      }
    },
  });
};
