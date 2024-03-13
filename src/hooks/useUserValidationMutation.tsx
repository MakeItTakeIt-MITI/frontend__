import { useMutation } from "@tanstack/react-query";
import { userValidation } from "../api/validation";

type SetValidFunction = (value: boolean) => void;

interface EmailValidationProp {
  setValidEmail: SetValidFunction;
}

interface NicknameValidationProp {
  setValidNickname: SetValidFunction;
}

export const useValidateDuplicateEmail = ({
  setValidEmail,
}: EmailValidationProp) => {
  return useMutation({
    mutationFn: userValidation,
    onSuccess: () => setValidEmail(true),
  });
};
export const useValidateDuplicateNickname = ({
  setValidNickname,
}: NicknameValidationProp) => {
  return useMutation({
    mutationFn: userValidation,
    onSuccess: () => setValidNickname(true),
  });
};
