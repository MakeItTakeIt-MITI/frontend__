import { useQuery } from "@tanstack/react-query";
import { faqList } from "../api/support";

export const useFaqDataHook = () => {
  return useQuery({
    queryKey: ["FAQ list"],
    queryFn: () => faqList(),
  });
};
