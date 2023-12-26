import { useForm } from "react-hook-form";

interface RegisterField {
  email: string;
  password: string;
  password_check: string;
  nickname: string;
}

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<RegisterField>();

  const onSubmit = (data: RegisterField) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-4 mobile:text-[12px] tablet:text-[16px] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="mobile:w-[250px] mobile:mx-auto tablet:w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="email"
        placeholder="이메일"
        {...register("email", {
          required: true,
        })}
      />

      <input
        className="mobile:w-[250px] mobile:mx-auto tablet:w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="password"
        placeholder="비밀번호"
        {...register("password", {
          required: true,
        })}
      />

      <input
        className="mobile:w-[250px] mobile:mx-auto tablet:w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="password"
        placeholder="비빈번호 확인"
        {...register("password_check", {
          required: true,
        })}
      />

      <input
        className="mobile:w-[250px] mobile:mx-auto tablet:w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="text"
        placeholder="닉네임"
        {...register("nickname", {
          required: true,
        })}
      />

      <button className="bg-[#4065F6] mobile:w-[250px]  mobile:mx-auto tablet:w-[350px]  text-white p-[0.5rem] rounded-lg	">
        회원가입
      </button>
    </form>
  );
};
