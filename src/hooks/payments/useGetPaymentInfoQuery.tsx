import { useQuery } from "@tanstack/react-query";
import { gamePaymentDetails } from "../../api/payment";

export const useGetPaymentInfoQuery = (gameId: number) => {
  return useQuery({
    queryKey: ["game_payment_info"],
    queryFn: () => gamePaymentDetails(gameId),
  });
};
