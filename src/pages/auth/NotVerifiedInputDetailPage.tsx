import { useForm } from "react-hook-form";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { LoginField } from "../../interface/usersInterface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginSchema } from "../../modals/useLoginSchema";

import closeIcon from "../../assets/x_button.svg";
import open from "../../assets/clarity_eye-show-line.svg";
import close from "../../assets/clarity_eye-hide-line.svg";
import { useState } from "react";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import { useAuthorizeExistingUserMutation } from "../../hooks/auth/useAuthorizeExistingUserMutation";

export const NotVerifiedInputDetailPage = () => {
  const [displayPassword, setDisplayPassword] = useState(false);
  const [errorResponseMsg, setErrorResponseMsg] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
    formState,
  } = useForm<LoginField>({
    mode: "onBlur",
    resolver: zodResolver(useLoginSchema),
  });

  const { mutate: authorize } =
    useAuthorizeExistingUserMutation(setErrorResponseMsg);
  const emailValue = watch("email");

  const handleEraseInput = () => setValue("email", "");
  const handleDisplayPassword = () => setDisplayPassword(!displayPassword);
  const handleSubmitForm = () => {
    const data = { email: getValues("email"), password: getValues("password") };
    console.log(data);
    authorize(data);
  };

  return (
    <section className="laptop:my-4 mobile:my-0   h-full ">
      <NavigateToPrevContainer children="" />

      <div className="laptop:w-[500px] laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-6  justify-between">
        <div className="h-full w-full flex flex-col gap-4 justify-center my-auto">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[24px]">로그인 정보 입력</h1>
          </div>
          <form className="flex flex-col gap-2">
            <div className="relative space-y-2">
              <label htmlFor="email" className="text-[12px] text-[#1c1c1c]">
                이메일
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  // role={role}
                  className=" h-[58px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
                  placeholder="이메일을 입력해주세요"
                  {...register("email", {
                    required: true,
                  })}
                />

                {emailValue && (
                  <button
                    type="button"
                    className="absolute right-2 top-4 hover:cursor-pointer"
                    onClick={handleEraseInput}
                  >
                    <img
                      src={closeIcon}
                      alt="erase input"
                      className="w-[24px]   "
                    />
                  </button>
                )}
              </div>
              {errors.email && (
                <ErrorMessage children="이메일 형식으로 입력해주세요." />
              )}
            </div>
            <div className="relative space-y-2">
              <label htmlFor="email" className="text-[12px] text-[#1c1c1c]">
                비밀번호
              </label>
              <div className="relative">
                <input
                  type={displayPassword ? "text" : "password"}
                  id="password"
                  // role={role}
                  className=" h-[58px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
                  placeholder="비밀번호를 입력해주세요"
                  {...register("password", {
                    required: true,
                  })}
                />

                <button
                  type="button"
                  role="show-password-btn"
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
              {errors.password && (
                <ErrorMessage children="올바른 비밀번호 양식이 아니에요." />
              )}
              {errorResponseMsg && <ErrorMessage children={errorResponseMsg} />}
            </div>
          </form>
        </div>
        <button
          onClick={handleSubmit(handleSubmitForm)}
          disabled={formState.isValid ? false : true}
          style={{
            backgroundColor: formState.isValid ? "#4065F6" : "#E8E8E8",
            color: formState.isValid ? "#fff" : "#969696",
          }}
          className=" h-[48px] w-full rounded-lg"
        >
          인증 메세지 전송
        </button>
      </div>
    </section>
  );
};

{
  /* <FormInput register={register} {...EmailInputField.args} /> */
}
