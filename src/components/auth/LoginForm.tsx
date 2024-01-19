import { useForm } from "react-hook-form";
// import alertFail from "../../assets/alert_failure.svg";
import close from "../../assets/clarity_eye-hide-line.svg";
import open from "../../assets/clarity_eye-show-line.svg";
import { useEffect, useState } from "react";
import { LoginField } from "../../interface/usersInterface";
import { userLoginAuth } from "../../api/users";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import closeBtn from "../../assets/x_button.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginSchema } from "../../modals/useLoginSchema";
import { useLoginMutation } from "../../hooks/useLoginMutation";

export const LoginForm = () => {
  const [displayPassword, setDisplayPassword] = useState(false);
  const { register, handleSubmit, watch, setValue } = useForm<LoginField>({
    resolver: zodResolver(useLoginSchema),
  });
  const { isLoggedIn, login } = useAuthStore();
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useLoginMutation();

  useEffect(() => {
    if (isLoggedIn) {
      const id = localStorage.getItem("id");
      navigate(`/profile/${id}`);
    }
  }, []);

  const emailValue = watch("email");

  const handleEraseInput = () => {
    return setValue("email", "");
  };

  const handleDisplayPassword = () => setDisplayPassword(!displayPassword);

  const onSubmit = async (data: LoginField) => {
    // await userLoginAuth(data);
    mutate(data);
    login();
    navigate("/");
  };

  if (isError) {
    console.log("Error...");
  }

  return (
    <form
      className="flex flex-col gap-6  mobile:w-full tablet:w-[600px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {isPending && <p>Pending..</p>}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[12px] text-[#1c1c1c]">
          이메일
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            required
            className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg w-full "
            placeholder="이메일을 입력해주세요."
            {...register("email", {
              required: true,
            })}
          />

          {emailValue?.length > 0 && (
            <button
              type="button"
              className="absolute right-2 top-4 hover:cursor-pointer"
              onClick={handleEraseInput}
            >
              <img src={closeBtn} alt="erase input" className="w-[24px]   " />
            </button>
          )}
        </div>
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
            className="h-[58px] p-4 bg-[#F7F7F7] rounded-lg w-full "
            placeholder="8자리 이상의 PW를 입력해주세요."
            {...register("password", {
              required: true,
            })}
          />
          {/* <span className="text-[#e43535] text-[13px]">
            비밀번호가 올바르지 않습니다.
          </span> */}
          <button
            type="button"
            onClick={handleDisplayPassword}
            className="absolute right-2 top-4 hover:cursor-pointer"
          >
            <img
              src={`${displayPassword ? open : close}`}
              alt="hide password"
              className="w-[24px] cursor-pointer "
            />
          </button>
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
