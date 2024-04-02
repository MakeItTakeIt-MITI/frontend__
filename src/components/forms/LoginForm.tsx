import { useForm } from "react-hook-form";
import close from "../../assets/clarity_eye-hide-line.svg";
import open from "../../assets/clarity_eye-show-line.svg";
import { useState } from "react";
import { LoginField } from "../../interface/usersInterface";
import closeBtn from "../../assets/x_button.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginSchema } from "../../modals/useLoginSchema";
import { useLoginMutation } from "../../hooks/useLoginMutation";
import alertFail from "../../assets/alert_failure.svg";
import { SubmitButton } from "../common/SubmitButtons";
import {
  DisabledLoginButton,
  EnabledLoginButton,
} from "../../stories/SubmitButtons.stories";
import { FormInput } from "../common/FormInput";
import {
  EmailInputField,
  PasswordInputField,
} from "../../stories/Input.stories";

export const LoginForm = () => {
  const [displayPassword, setDisplayPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    formState,
  } = useForm<LoginField>({
    resolver: zodResolver(useLoginSchema),
  });

  const { mutate: loginMutation, isError } = useLoginMutation();

  const emailValue = watch("email");

  const handleEraseInput = () => {
    return setValue("email", "");
  };

  const handleDisplayPassword = () => setDisplayPassword(!displayPassword);

  const onSubmit = (data: LoginField) => {
    loginMutation(data);
  };

  return (
    <form
      // className="flex flex-col gap-6  mobile:w-full tablet:w-[600px]"
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {isError && (
        <p className="text-[#E92C2C] text-[13px] font-[400] text-center">
          사용자 정보가 유효하지 않습니다. 다시 시도해주세요.
        </p>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[12px] text-[#1c1c1c]">
          이메일
        </label>
        <div className="relative">
          <FormInput register={register} {...EmailInputField.args} />

          {emailValue && (
            <button
              type="button"
              className="absolute right-2 top-4 hover:cursor-pointer"
              onClick={handleEraseInput}
            >
              <img src={closeBtn} alt="erase input" className="w-[24px]   " />
            </button>
          )}
        </div>
        {errors.email && (
          <div className="flex items-center gap-1">
            <img src={alertFail} alt="alert icon" />
            <p className="text-[#E92C2C] text-[13px] font-[400]">
              {errors.email.message}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-[12px] text-[#1c1c1c]">
          비밀번호
        </label>
        <div className="relative">
          <FormInput
            type={displayPassword ? "text" : "password"}
            register={register}
            {...PasswordInputField.args}
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
          <div className="flex items-center gap-1">
            <img src={alertFail} alt="alert icon" />
            <p className="text-[#E92C2C] text-[13px] font-[400]">
              {errors.password.message}
            </p>
          </div>
        )}
      </div>

      {!formState.isValid ? (
        <SubmitButton {...DisabledLoginButton.args} />
      ) : (
        <SubmitButton {...EnabledLoginButton.args} />
      )}
    </form>
  );
};
