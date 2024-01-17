import { useForm } from "react-hook-form";

import close from "../../assets/clarity_eye-hide-line.svg";
import open from "../../assets/clarity_eye-show-line.svg";
import { useState } from "react";
import { LoginField } from "../../interface/usersInterface";
import { userLoginAuth } from "../../api/users";

export const LoginForm = () => {
  const [displayPassword, setDisplayPassword] = useState(false);
  const { register, handleSubmit } = useForm<LoginField>();
  // const { login, logout } = useAuthStore();
  // const navigate = useNavigate();

  const handleDisplayPassword = () => setDisplayPassword(!displayPassword);

  const onSubmit = (data: LoginField) => {
    userLoginAuth(data);
    console.log(data);
  };
  return (
    <form
      className="flex flex-col gap-6  mobile:w-full tablet:w-[600px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[12px] text-[#1c1c1c]">
          이메일
        </label>
        <input
          type="email"
          id="email"
          required
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-[12px] text-[#1c1c1c]">
          비밀번호
        </label>
        <div className="relative">
          <input
            type={`${displayPassword ? "text" : "password"}`}
            id="password"
            required
            className="h-[58px] p-4 bg-[#F7F7F7] rounded-lg w-full pr-10"
            placeholder="8자리 이상의 PW를 입력해주세요."
            {...register("password", {
              required: true,
            })}
          />
          {/* <span className="text-[#e43535] text-[13px]">
            비밀번호가 올바르지 않습니다.
          </span> */}
          <div onClick={handleDisplayPassword}>
            <img
              src={`${displayPassword ? open : close}`}
              alt="hide password"
              className="w-[24px] absolute right-2 top-4 cursor-pointer "
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className=" mobile:h-[58px] tablet:h-[45px] mx-auto flex items-center justify-center p-4 bg-[#4065F6] rounded-lg text-white mobile:w-full tablet:w-[18rem] tablet:text-[15px] "
      >
        로그인 하기
      </button>
    </form>
  );
};
