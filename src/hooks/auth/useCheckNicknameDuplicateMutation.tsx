import { useMutation } from "@tanstack/react-query";
import { userValidation } from "../../api/validation";
import { ValidationField } from "../../interface/usersInterface";

export const useCheckNicknameDuplicateMutation = () => {
  return useMutation({
    mutationKey: ["update_user_info"],
    mutationFn: (data: ValidationField) => userValidation(data),
  });
};
