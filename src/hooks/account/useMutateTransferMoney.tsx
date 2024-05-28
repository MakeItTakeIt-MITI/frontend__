import { useMutation } from "@tanstack/react-query";
import axiosUrl from "../../utils/axios";
import { RequestTransferField } from "../../components/payment/BankTransferBox";

export const useMutateTransferMoney = (user_id: number | null) => {
  return useMutation({
    mutationFn: async (data: RequestTransferField) => {
      try {
        const response = await axiosUrl.post(
          `/users/${user_id}/accounts/bank-transfers`,
          data
        );
        return response.data;
      } catch {
        throw new Error();
      }
    },
  });
};
