import { useQuery } from "@tanstack/react-query";
import { getRefundFeeDetails } from "../../api/payment";

export const useGetRefundFeeDetailsQuery = (
  gameId: number | null,
  userId: number | null
) => {
  return useQuery({
    queryKey: ["refund fee details"],
    queryFn: () => getRefundFeeDetails(gameId, userId),
  });
};
