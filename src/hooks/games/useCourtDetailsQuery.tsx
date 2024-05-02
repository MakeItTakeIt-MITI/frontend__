import { getGameCourtDetails } from "../../api/games";
import { useQuery } from "@tanstack/react-query";

export const useCourtDetailsQuery = () => {
  return useQuery({
    queryKey: ["court_details"],
    queryFn: () => getGameCourtDetails(),
  });
};
