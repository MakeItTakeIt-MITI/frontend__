import { useQuery } from "@tanstack/react-query";
import { getUserPaymentHistory } from "../../api/payment";

export const getUserPaymentHistoryQuery = (userId: number | null) => {
  return useQuery({
    queryKey: ["User Transaction History"],
    queryFn: () => getUserPaymentHistory(userId),
  });
};
