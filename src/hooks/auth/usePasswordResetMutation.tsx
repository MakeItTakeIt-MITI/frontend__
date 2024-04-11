import { useMutation } from "@tanstack/react-query";
import { ResetPassField } from "../../interface/authInterface";
import { requestPasswordReset } from "../../api/auth";

export const usePasswordResetMutation = (
  setErrorCode: (arg: number) => void,
  setSuccess: (arg: boolean) => void
) => {
  return useMutation({
    mutationKey: ["reset-password"],
    mutationFn: (data: ResetPassField) => requestPasswordReset(data),
    onSuccess: (request) => {
      console.log(request);
      const auth = request.data.authentication_token;
      localStorage.setItem("auth", auth);

      if (request.status_code === 201) {
        setSuccess(true);
      }

      if (request.error_code === 101) {
        setErrorCode(101);
      } else {
        setErrorCode(0);
      }
    },
  });
};
