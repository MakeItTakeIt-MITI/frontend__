import { useQuery } from "@tanstack/react-query";
import { getCourtDetail } from "../../api/courts";

export const getCourtDetailQuery = (courtId: number | null) => {
  return useQuery({
    queryKey: ["Court details"],
    queryFn: () => getCourtDetail(courtId),
  });
};
