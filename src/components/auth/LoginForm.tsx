import { useForm } from "react-hook-form";

interface LoginField {
  email: string;
  password: string;
  token?: string;
  access_token?: string;
  refresh_token?: string;
  data?: () => void;
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginField>();

  const onSubmit = (data: LoginField) => {
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
        className="mobile:w-[250px]  mobile:mx-auto tablet:w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="password"
        placeholder="비밀번호"
        {...register("password", {
          required: true,
        })}
      />
      <button className="bg-[#4065F6] mobile:w-[250px]  mobile:mx-auto tablet:w-[350px]  text-white p-[0.5rem] rounded-lg	">
        로그인
      </button>
    </form>
  );
};
