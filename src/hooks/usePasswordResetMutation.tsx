import { useMutation } from "@tanstack/react-query";
import { EmailAuth } from "../interface/authInterface";
import { requestPasswordReset } from "../api/auth";

export const usePasswordResetMutation = () => {
  return useMutation({
    mutationFn: (data: EmailAuth) => requestPasswordReset(data),
  });
};
