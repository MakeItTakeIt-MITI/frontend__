import { useMutation } from "@tanstack/react-query";
import { userValidation } from "../api/validation";

type SetValidFunction = (value: boolean) => void;

interface EmailValidationProp {
  setValidEmail: SetValidFunction;
}

export const useValidateDuplicateEmail = ({
  setValidEmail,
}: EmailValidationProp) => {
  return useMutation({
    mutationFn: userValidation,
    onSuccess: () => setValidEmail(true),
  });
};
export const useValidateDuplicateNickname = () => {
  return useMutation({
    mutationFn: userValidation,
  });
};
