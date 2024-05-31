import { useQuery } from "@tanstack/react-query";
import { getPaymentHistory } from "../../api/account";

export const useGetPaymentHistory = (
  user_id: number | null,
  status: string | null
) => {
  return useQuery({
    queryKey: ["User Payment History"],
    queryFn: () => getPaymentHistory(user_id, status),
  });
};
