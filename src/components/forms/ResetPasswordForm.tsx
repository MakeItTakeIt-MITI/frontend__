import { useForm } from "react-hook-form";
import { EmailAuth } from "../../interface/authInterface";
import { usePasswordResetMutation } from "../../hooks/usePasswordResetMutation";

export const ResetPasswordForm = () => {
  const { register, handleSubmit } = useForm<EmailAuth>({});
  const {
    mutate: mutatePassword,
    data,
    isError,
    isSuccess,
  } = usePasswordResetMutation();

  const onSubmit = (data: EmailAuth) => {
    mutatePassword(data);
  };

  console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 h-[60px]">
        <input
          type="text"
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: true,
          })}
          className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
        />
        <button
          style={{
            backgroundColor: data?.status_code === 200 ? "#e8e8e8" : "#4065F6",
          }}
          className="  w-[150px] text-white px-4 py-2 rounded-lg  "
        >
          {data?.status_code === 200 ? "다시 요청" : "전송 요청"}
        </button>
      </form>
      <div className="text-center">
        <span className="text-green-400 ">
          {isSuccess && "해당 이메일로 메일이 전송 되었습니다."}
        </span>
        <span className="text-red-500">
          {isError && "일치 사용자 정보 조회 실패"}
        </span>
      </div>
    </>
  );
};
