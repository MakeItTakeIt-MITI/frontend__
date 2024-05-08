import { useForm } from "react-hook-form";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { useState } from "react";
import { PostQuestionProps } from "../../interface/supportInterace";
import { usePostQuestionMutation } from "../../hooks/support/usePostQuestionMutation";
import { FormLabel } from "../../components/forms/FormLabel";
import { AlertModal } from "../../components/common/AlertModal";
import {
  InactiveUserNotification,
  InquirySubmitted,
} from "../../stories/Modal.stories";
import { useNavigate } from "react-router-dom";

export const UserInquiryPage = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const navigate = useNavigate();

  const { register, formState, handleSubmit } = useForm<PostQuestionProps>();

  const isFormEmpty =
    !formState.dirtyFields.title || !formState.dirtyFields.content;

  const { mutate: postQuestionMutate, data: postResponse } =
    usePostQuestionMutation();

  const handleSubmitPost = (data: PostQuestionProps) => {
    postQuestionMutate(data);
  };

  const handleCloseModal = () => setDisplayModal(false);

  if (postResponse?.status_code === 201) {
    // return (
    //   <AlertModal
    //     modal={displayModal}
    //     handleCloseModal={handleCloseModal}
    //     {...InactiveUserNotification.args}
    //   />
    // );
    alert("문의 작성을 완료하였습니다");
    navigate("/support/customer-service");
  }

  return (
    <section
      onSubmit={handleSubmit(handleSubmitPost)}
      className="laptop:my-4 mobile:my-0 "
    >
      <NavigateToPrevContainer children="문의하기" />

      <form className="relative laptop:w-[500px] min-h-[735px]   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-10 laptop:px-12 mobile:p-4 rounded-lg flex flex-col justify-between ">
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
              {...register("title")}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <FormLabel children="문의 내용" id="title" />
            <textarea
              id="title"
              className="min-h-[300px] p-4 bg-[#f7f7f7] w-full rounded-lg"
              placeholder="내용을 입력해주세요."
              {...register("content")}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isFormEmpty}
          className={`w-full h-[55px] rounded-lg ${
            isFormEmpty
              ? "bg-[#e8e8e8] text-[#969696]"
              : "bg-[#4065F6] text-white"
          }`}
        >
          문의하기
        </button>
      </form>
    </section>
  );
};
