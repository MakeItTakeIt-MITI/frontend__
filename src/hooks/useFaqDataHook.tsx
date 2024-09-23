import { useQuery } from "@tanstack/react-query";
import { faqList } from "../api/support";

export const useFaqDataHook = (search?: string | undefined) => {
  return useQuery({
    queryKey: ["FAQ list"],
    queryFn: () => faqList(search),
  });
};
