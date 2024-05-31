import { useQuery } from "@tanstack/react-query";
import { getPaymentDetails } from "../../api/account";

export const useGetPaymentDetails = (
  user_id: number | null,
  settlement_id: number | null
) => {
  return useQuery({
    queryKey: ["Payment details"],
    queryFn: () => getPaymentDetails(user_id, settlement_id),
  });
};
