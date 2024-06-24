import { useForm } from "react-hook-form";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { LoginField } from "../../../interface/usersInterface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginSchema } from "../../../modals/useLoginSchema";

import { useState } from "react";
import { useAuthorizeExistingUserMutation } from "../../../hooks/auth/useAuthorizeExistingUserMutation";
import { ErrorMessage } from "../../../components/StatusMessages/ErrorMessage";
import { SubmitButton } from "../../../components/ui/buttons/SubmitButton";
import {
  Active,
  Inactive,
} from "../../../components/ui/buttons/Button.stories";
import { FormLabel } from "../../../components/ui/forms/FormLabel";
import AuthInput from "../../../components/ui/forms/AuthInput";

import close from "../../../assets/clarity_eye-hide-line.svg";
import open from "../../../assets/clarity_eye-show-line.svg";

export const NotVerifiedInputDetailPage = () => {
  const [displayPassword, setDisplayPassword] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState,
    formState: { errors },
  } = useForm<LoginField>({
    mode: "onBlur",
    resolver: zodResolver(useLoginSchema),
  });

  const { mutate: authorize, data: authenticateUserResponse } =
    useAuthorizeExistingUserMutation();

  const handleDisplayPassword = () => setDisplayPassword(!displayPassword);
  const handleSubmitForm = () => {
    const data = { email: getValues("email"), password: getValues("password") };
    console.log(data);
    authorize(data);
  };

  return (
    <section className="laptop:my-[69px] mobile:m-0">
      <NavigateToPrevContainer children="" />

      <div className="laptop:w-[495px]  laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300   rounded-lg flex flex-col gap-6  justify-between">
        <div className="h-full w-full flex flex-col gap-4 justify-center my-auto laptop:px-[76px] mobile:px-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[24px]">사용자 인증</h1>
          </div>
          <form className="flex flex-col gap-2">
            <div className="space-y-2">
              <FormLabel id="user-email" children="이메일" />

              <AuthInput
                type="email"
                id="user-email"
                data-testid="email-input"
                placeholder="이메일을 입력해주세요."
                register={register}
                register_type="email"
                aria-label="이메일을 입력해주세요"
                aria-invalid={errors.email ? true : false}
              />
              {errors.email && (
                <ErrorMessage children="이메일 형식으로 입력해주세요." />
              )}
            </div>
            <div className="space-y-2">
              <FormLabel id="user-password" children="비밀번호" />

              <div className="relative">
                <AuthInput
                  type={displayPassword ? "text" : "password"}
                  id="user-password"
                  data-testid="password-input"
                  placeholder="비밀번호를 입력해주세요."
                  register={register}
                  register_type="password"
                  aria-label="비밀번호를 입력해주세요."
                  aria-invalid={errors.password ? true : false}
                />

                <button
                  onClick={handleDisplayPassword}
                  className="absolute right-2 top-2 bottom-2"
                  type="button"
                >
                  <img
                    src={displayPassword ? open : close}
                    alt="toggle show password"
                    className="size-6"
                  />
                </button>
              </div>
              {authenticateUserResponse?.status_code === 401 &&
                authenticateUserResponse?.error_code === 140 && (
                  <ErrorMessage children="일치하는 사용자가 없습니다." />
                )}
              {errors.password && (
                <ErrorMessage children="올바른 비밀번호 양식이 아니에요." />
              )}
            </div>
          </form>
        </div>
        <div className="laptop:px-[76px] mobile:px-4 laptop:pb-[74px] mobile:pb-0">
          {!formState.isValid ? (
            <SubmitButton children="   인증번호 전송" {...Inactive.args} />
          ) : (
            <SubmitButton
              onClick={handleSubmit(handleSubmitForm)}
              children="   인증번호 전송"
              {...Active.args}
            />
          )}
        </div>
      </div>
    </section>
  );
};
