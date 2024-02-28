import { useForm } from "react-hook-form";
import { EmailAuth } from "../../interface/authInterface";

export const ResetPasswordForm = () => {
  const { register, handleSubmit } = useForm<EmailAuth>({});

  const onSubmit = (data: EmailAuth) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 h-[60px]">
      <input
        type="text"
        placeholder="이메일을 입력해주세요."
        //   disabled={data?.status_code === 200 ? true : false}
        {...register("email", {
          required: true,
        })}
        className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
      />
      <button
        // style={{ backgroundColor: data?.status_code ? "#e8e8e8" : "#4065F6" }}
        //   disabled={data?.status_code === 200 ? true : false}
        className="  w-[150px] text-white px-4 py-2 rounded-lg  bg-[#4065F6]"
      >
        {/* {data?.status_code === 200 ? "인증 완료" : "인증 하기"} */}
        인증 요청
      </button>
    </form>
  );
};
