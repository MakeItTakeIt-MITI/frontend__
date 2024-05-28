import { useQuery } from "@tanstack/react-query";
import axiosUrl from "../../utils/axios";

export const useGetBankList = () => {
  return useQuery({
    queryKey: ["Bank List"],
    queryFn: async () => {
      try {
        const response = await axiosUrl.get("/constants?key=bank");
        return response.data;
      } catch {
        throw new Error();
      }
    },
  });
};
