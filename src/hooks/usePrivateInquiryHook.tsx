import { useMutation } from "@tanstack/react-query";
import { privateInquiry } from "../api/support";

export const usePrivateInquiryHook = () => {
  return useMutation({
    mutationFn: privateInquiry,
  });
};
