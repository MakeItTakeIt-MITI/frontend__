import { useMutation } from "@tanstack/react-query";
import { findEmail } from "../api/auth";

export const useFindEmailMutation = () => {
  return useMutation({
    mutationFn: findEmail,
  });
};
