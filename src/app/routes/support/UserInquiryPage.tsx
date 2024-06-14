import { useForm } from "react-hook-form";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { PostQuestionProps } from "../../../interface/supportInterace";
import { usePostQuestionMutation } from "../../../hooks/support/usePostQuestionMutation";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../../../components/ui/buttons/SubmitButton";
import {
  Active,
  Inactive,
} from "../../../components/ui/buttons/Button.stories";
import { FormLabel } from "../../../components/ui/forms/FormLabel";

export const UserInquiryPage = () => {
  const navigate = useNavigate();

  const { register, formState, handleSubmit, watch } =
    useForm<PostQuestionProps>();

  const { mutate: postQuestionMutate, data: postResponse } =
    usePostQuestionMutation();

  const handleSubmitPost = (data: PostQuestionProps) => {
    postQuestionMutate(data);
  };

  if (postResponse?.status_code === 201) {
    alert("빠른 시일내로 답변드리도록 하겠습니다.");
    navigate("/support/customer-service");
  }

  const watchContent = watch("content");

  return (
    <section
      onSubmit={handleSubmit(handleSubmitPost)}
      className="laptop:my-4 mobile:my-0 tablet:px-[80px] laptop:px-0 "
    >
      <NavigateToPrevContainer children="문의하기" />

      <form className="relative laptop:w-[500px] min-h-[735px]   mobile:w-full mx-auto  laptop:border border-gray-200  laptop:py-10 laptop:px-12 mobile:p-4 rounded-lg flex flex-col justify-between ">
        <h1 className="mobile:hidden tablet:block text-center font-bold text-2xl">
          문의하기
        </h1>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <FormLabel children="제목" id="title" />
            <input
              id="title"
              type="text"
              className="h-[50px] p-4 bg-[#f7f7f7] w-full rounded-lg"
              placeholder="제목을 입력해주세요."
              {...register("title", {
                required: true,
              })}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <FormLabel children="문의 내용" id="title" />
            <textarea
              id="title"
              className="min-h-[300px] p-4 bg-[#f7f7f7] w-full rounded-lg"
              placeholder="내용을 입력해주세요."
              {...register("content", {
                required: true,
              })}
            />
            <span
              style={{
                color: watchContent?.length > 300 ? "#F64061" : "#969696",
              }}
              className="text-end text-neutral-400
text-[10px]"
            >
              {watchContent?.length}/300 작성{" "}
            </span>
          </div>
        </div>

        {!formState.isValid || watchContent?.length > 300 ? (
          <SubmitButton children="문의하기" {...Inactive.args} />
        ) : (
          <SubmitButton children="문의하기" type="submit" {...Active.args} />
        )}
      </form>
    </section>
  );
};
