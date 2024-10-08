import { useQuery } from "@tanstack/react-query";
import { serviceTermsData } from "../api/support";

export const useServiceTermsDataHook = () => {
  return useQuery({
    queryKey: ["Service Agreements"],
    queryFn: serviceTermsData,
  });
};
