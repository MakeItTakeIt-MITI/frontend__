import { useMutation } from "@tanstack/react-query";
import { ResetPassField } from "../../interface/authInterface";
import { requestPasswordReset } from "../../api/auth";

export const useResetPassCodeMutation = () => {
  return useMutation({
    mutationKey: ["reset-password"],
    mutationFn: (data: ResetPassField) => requestPasswordReset(data),
    onSuccess: (request) => {
      if (request.status_code === 201) {
        const auth = request.data.authentication_token;
        localStorage.setItem("auth", auth);
      }
    },
  });
};
