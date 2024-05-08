import { useMutation } from "@tanstack/react-query";
import { postQuestion } from "../../api/support";

export const usePostQuestionMutation = () => {
  return useMutation({
    mutationKey: ["post_question"],
    mutationFn: postQuestion,
    onSuccess: (response) => console.log(response),
  });
};
