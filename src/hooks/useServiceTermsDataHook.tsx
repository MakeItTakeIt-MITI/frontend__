import { useQuery } from "@tanstack/react-query";
import { policesData } from "../api/support";

export const useServiceTermsDataHook = () => {
  return useQuery({
    queryKey: ["Service Agreements"],
    queryFn: policesData,
  });
};
