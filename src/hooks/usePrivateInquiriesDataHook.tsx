import { useQuery } from "@tanstack/react-query";
import { privateInquiriesData } from "../api/support";

export const usePrivateInquiriesDataHook = (page: number) => {
  return useQuery({
    queryKey: ["Private quiries list", page],
    queryFn: () => privateInquiriesData(page),
  });
};
