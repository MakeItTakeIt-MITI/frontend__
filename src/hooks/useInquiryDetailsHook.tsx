import { useMutation } from "@tanstack/react-query";
import { privateInquiryDetails } from "../api/support";
import { InquiryDetailField } from "../interfaces/support";

export const useInquiryDetailsHook = (
  inquiryId: number,
  password: InquiryDetailField,
  setErrorStatus: (arg: number) => void
) => {
  return useMutation({
    mutationFn: () =>
      privateInquiryDetails(inquiryId, password, setErrorStatus),
  });
};
