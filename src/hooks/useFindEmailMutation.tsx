import { useMutation } from "@tanstack/react-query";
import { requestLostEmail } from "../api/auth";
import { FindEmailField } from "../interface/user-edit-interface";

export const useFindEmailMutation = (
  setPhoneAuthSuccess: (arg: boolean) => void,
  setStatusCode: (arg: number) => void
) => {
  return useMutation({
    mutationKey: ["find_email"],
    mutationFn: (data: FindEmailField) => requestLostEmail(data),
    onSuccess: (response) => {
      console.log(response);

      // 201
      if (response.status_code === 201) {
        console.log(response);
        setStatusCode(201);
        return setPhoneAuthSuccess(true);
      } else if (response.status_code === 404) {
        setStatusCode(404);
        return setPhoneAuthSuccess(false);
      } else {
        return;
      }

      // 404
    },
  });
};
