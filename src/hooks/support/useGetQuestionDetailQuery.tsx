import { useQuery } from "@tanstack/react-query";
import { viewQuestionDetail } from "../../api/support";

export const useGetQuestionDetailQuery = (valid_qna_id: number) => {
  return useQuery({
    queryKey: ["Question detail data"],
    queryFn: () => viewQuestionDetail(valid_qna_id),
  });
};
