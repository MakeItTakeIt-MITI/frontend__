import { useForm } from "react-hook-form";
import { userRegisterSchema } from "../../modals/userSignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";

interface RegisterField {
  email: string;
  password: string;
  password_check: string;
  nickname: string;
  birthday: string;
  phone_number: string;
  confirmation_code: number;
}

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterField>({ resolver: zodResolver(userRegisterSchema) });

  const onSubmit = (data: RegisterField) => {
    console.log(data);
    userRegisterSchema.parse(data);
  };

  return (
    <form
      className=" flex flex-col gap-6  w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      {errors.email?.message && (
        <p className="text-center text-red-500">{errors.email?.message}</p>
      )}
      {errors.password?.message && (
        <p className="text-center text-red-500">{errors.password?.message}</p>
      )}
      {errors.password_check?.message && (
        <p className="text-center text-red-500">
          {errors.password_check?.message}
        </p>
      )}
      {errors.nickname?.message && (
        <p className="text-center text-red-500">{errors.nickname?.message}</p>
      )}

      <div className="flex flex-col gap-2 relative">
        <label htmlFor="email" className="text-[12px] text-[#1c1c1c]">
          이메일
        </label>
        <input
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="email"
          id="email"
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: true,
          })}
        />
        <button className="absolute right-2 bottom-2.5 text-[14px] text-white bg-[#4065F6] w-[81px] h-[36px] rounded-[8px]">
          중복확인
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-[12px] text-[#1c1c1c]">
          비빌번호
        </label>
        <input
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          id="password-check"
          {...register("password", {
            required: true,
          })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password_check" className="text-[12px] text-[#1c1c1c]">
          비빌번호 확인
        </label>
        <input
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="text"
          placeholder="비밀번호를 한번 더 입력해주세요."
          id="password_check"
          {...register("password_check", {
            required: true,
          })}
        />
      </div>

      <div className="flex flex-col gap-2 relative">
        <label htmlFor="nickname" className="text-[12px] text-[#1c1c1c]">
          닉네임
        </label>
        <input
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="text"
          id="nickname"
          placeholder="닉네임을 입력해주세요."
          {...register("nickname", {
            required: true,
          })}
        />
        <button className="absolute right-2 bottom-2.5 text-[14px] text-white bg-[#4065F6] w-[81px] h-[36px] rounded-[8px]">
          중복확인
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="birthday" className="text-[12px] text-[#1c1c1c]">
          생년월일
        </label>
        <input
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="date"
          id="birthday"
          {...register("birthday", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="phone_number" className="text-[12px] text-[#1c1c1c]">
          핸드폰 번호
        </label>
        <input
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="text"
          id="phone_number"
          placeholder="휴대폰 번호를 입력해주세요."
          {...register("phone_number", {
            required: true,
          })}
        />
        <button className="absolute right-2 bottom-2.5 text-[14px] text-white bg-[#4065F6] w-[81px] h-[36px] rounded-[8px]">
          인증하기
        </button>
      </div>

      <button
        type="submit"
        className=" h-[58px] p-4 bg-[#4065F6] rounded-lg text-white"
      >
        가입하기
      </button>
    </form>
  );
};
