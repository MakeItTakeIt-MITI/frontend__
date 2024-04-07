import { useMutation } from "@tanstack/react-query";
import { requestLostEmail } from "../api/auth";
import { FindEmailField } from "../interface/user-edit-interface";

export const useFindEmailMutation = () => {
  return useMutation({
    mutationKey: ["find_email"],
    mutationFn: (data: FindEmailField) => requestLostEmail(data),
    onSuccess: (response) => {
      console.log(response);
    },
  });
};
