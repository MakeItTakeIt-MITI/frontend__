import { useMutation } from "@tanstack/react-query";
import { requestSmsCode } from "../api/users";

export const useRequestSmsCodeMutation = () => {
  return useMutation({
    mutationFn: requestSmsCode,
  });
};
