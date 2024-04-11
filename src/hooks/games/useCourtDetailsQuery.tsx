import { getGameCourtDetails } from "../../api/games";
import { useQuery } from "@tanstack/react-query";

export const useCourtDetailsQuery = (address: string) => {
  return useQuery({
    queryKey: ["court_details"],
    queryFn: () => getGameCourtDetails(address),
  });
};
