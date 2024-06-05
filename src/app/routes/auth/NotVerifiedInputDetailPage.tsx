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
import { LoginInputField } from "../../../components/ui/forms/FormInputContainer";

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
              <LoginInputField
                type="email"
                id="email"
                label="이메일"
                placeholder="이메일을 입력해주세요."
                register_value="email"
                isRequired={true}
                register={register}
              />{" "}
              {errors.email && (
                <ErrorMessage children="이메일 형식으로 입력해주세요." />
              )}
            </div>
            <div className="space-y-2">
              <LoginInputField
                type={displayPassword ? "text" : "password"}
                id="password"
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                isRequired={false}
                handleDisplayPassword={handleDisplayPassword}
                passwordImg={displayPassword}
                register_value="password"
                isPasswordField={true}
                register={register}
              />
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
