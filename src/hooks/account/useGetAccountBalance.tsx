import { useQuery } from "@tanstack/react-query";
import { getAccountBalance } from "../../api/account";

export const useGetAccountBalance = (account_id: number | null) => {
  return useQuery({
    queryKey: ["Account Balance"],
    queryFn: () => getAccountBalance(account_id),
  });
};
