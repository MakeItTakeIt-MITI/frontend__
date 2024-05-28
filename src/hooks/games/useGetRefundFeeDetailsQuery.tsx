import { useQuery } from "@tanstack/react-query";
import { getRefundFeeDetails } from "../../api/payment";

export const useGetRefundFeeDetailsQuery = (
  gameId: number | null,
  participation_id: number | null
) => {
  return useQuery({
    queryKey: ["Refund Payment Details"],
    queryFn: () => getRefundFeeDetails(gameId, participation_id),
  });
};
