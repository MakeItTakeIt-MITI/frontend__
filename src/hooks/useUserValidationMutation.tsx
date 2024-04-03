import { useMutation } from "@tanstack/react-query";
import { userValidation } from "../api/validation";

type SetValidFunction = (value: boolean) => void;

export const useValidateDuplicateEmail = (setValidEmail: SetValidFunction) => {
  return useMutation({
    mutationFn: userValidation,
    onSuccess: () => setValidEmail(true),
  });
};
export const useValidateDuplicateNickname = (
  setValidNickname: SetValidFunction
) => {
  return useMutation({
    mutationFn: userValidation,
    onSuccess: () => setValidNickname(true),
  });
};
