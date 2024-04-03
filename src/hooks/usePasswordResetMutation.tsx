import { useMutation } from "@tanstack/react-query";
import { ResetPassField } from "../interface/authInterface";
import { requestPasswordReset } from "../api/auth";

export const usePasswordResetMutation = () => {
  return useMutation({
    mutationKey: ["reset-password"],
    mutationFn: (data: ResetPassField) => requestPasswordReset(data),
    onSuccess: (request) => {
      console.log(request);
    },
  });
};
