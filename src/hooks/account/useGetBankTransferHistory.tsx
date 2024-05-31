import { useQuery } from "@tanstack/react-query";
import { getBankTransferHistory } from "../../api/account";

export const useGetBankTransferHistory = (
  user_id: number | null,
  status: string | null
) => {
  return useQuery({
    queryKey: ["Bank Transfer History"],
    queryFn: () => getBankTransferHistory(user_id, status),
  });
};
