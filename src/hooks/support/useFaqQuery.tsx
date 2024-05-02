import { useQuery } from "@tanstack/react-query";
import { frequentlyAskedQuestions } from "../../api/support";

export const useFaqQuery = () => {
  return useQuery({
    queryKey: ["FAQ"],
    queryFn: frequentlyAskedQuestions,
  });
};
