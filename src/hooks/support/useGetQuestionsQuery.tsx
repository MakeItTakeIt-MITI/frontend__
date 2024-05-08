import { useQuery } from "@tanstack/react-query";
import { viewQuestions } from "../../api/support";

export const useGetQuestionsQuery = () => {
  return useQuery({
    queryKey: ["User questions"],
    queryFn: viewQuestions,
  });
};
