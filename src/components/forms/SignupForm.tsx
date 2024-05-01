import { useForm } from "react-hook-form";
import { userRegisterSchema } from "../../modals/userSignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterField } from "../../interface/usersInterface";

import { useEffect, useState } from "react";
import { useRegisterMutation } from "../../hooks/auth/useRegisterMutation";
import {
  useValidateDuplicateEmail,
  useValidateDuplicateNickname,
} from "../../hooks/auth/useUserValidationMutation";
import { SubmitButton } from "../common/SubmitButtons";
import { ValidateInputButton } from "../common/ValidationButtons";
import { ErrorMessage } from "../common/ErrorMessage";
import { SuccessMessage } from "../common/SuccessMessage";
import { RegisterInputField } from "./FormInputContainer";

export const SignupForm = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [successEmailMsg, setSuccessEmailMsg] = useState("");
  const [errorEmailMsg, setErrorEmailMsg] = useState("");
  const [validNickname, setValidNickname] = useState(false);
  const [successNicknameMsg, setSuccessNicknameMsg] = useState("");
  const [errorNicknameMsg, setErrorNicknameMsg] = useState("");

  const [displayPasswordMark, setDisplayPasswordMark] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    formState,
  } = useForm<RegisterField>({
    resolver: zodResolver(userRegisterSchema),
    mode: "onBlur",
  });

  const { mutate: registerMutation, isError } = useRegisterMutation();
  const { mutate: emailMutation } = useValidateDuplicateEmail(
    setValidEmail,
    setSuccessEmailMsg,
    setErrorEmailMsg
  );
  const { mutate: nicknameMutation } = useValidateDuplicateNickname(
    setValidNickname,
    setSuccessNicknameMsg,
    setErrorNicknameMsg
  );

  const onSubmit = (data: RegisterField) => registerMutation(data);

  const handleValidateEmail = () =>
    emailMutation({ email: getValues("email") });

  const handleValidateNick = () =>
    nicknameMutation({ nickname: getValues("nickname") });

  const handleDisplayVerificationBox = () => {
    setDisplayPasswordMark(!displayPasswordMark);
  };

  useEffect(() => {}, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <RegisterInputField
        type="email"
        id="email"
        label="이메일"
        placeholder="이메일을 입력해주세요."
        register_value="email"
        isRequired={true}
        register={register}
        isValidatorField={true}
        isValid={validEmail}
        handleValidation={
          !validEmail ? () => handleValidateEmail() : () => setValidEmail(false)
        }
      />

      {errors.email?.message && (
        <ErrorMessage children={errors.email?.message} />
      )}
      {validEmail && !errors.email && (
        <SuccessMessage children={successEmailMsg} />
      )}
      {!validEmail && errorEmailMsg && (
        <ErrorMessage children={errorEmailMsg} />
      )}

      <div className="space-y-2">
        <span className=" text-[14px] text-[#1C1C1C]">비밀번호</span>
        <p className="w-full h-[65px] p-4 text-center text-[13px] bg-[#f7f7f7] text-[#040000]">
          비밀번호는 특수문자(!@#$%^&), 숫자, 영어 대소문자를 반드시 포함해야
          합니다.
        </p>
      </div>
      <RegisterInputField
        type="password"
        id="password"
        label=""
        placeholder="비밀번호를 입력해주세요."
        register_value="password"
        isRequired={true}
        register={register}
      />
      <RegisterInputField
        type="password_check"
        id="password_check"
        label=""
        placeholder="비밀번호를 다시 입력해주세요."
        register_value="password_check"
        isRequired={true}
        register={register}
      />

      {errors.password?.message && (
        <ErrorMessage children={errors.password.message} />
      )}
      {!errors.password?.message && getValues("password") && (
        <SuccessMessage children="안전한 비밀번호에요!" />
      )}

      {errors.password_check?.message && (
        <ErrorMessage children={errors.password_check.message} />
      )}
      {!errors.password?.message && getValues("password_check") && (
        <SuccessMessage children="안전한 비밀번호에요!" />
      )}

      <RegisterInputField
        type="name"
        id="name"
        label="이름"
        placeholder="이름을 입력해주세요."
        register_value="name"
        isRequired={true}
        register={register}
      />

      <RegisterInputField
        type="nickname"
        id="nickname"
        label="닉네임"
        placeholder="닉네임을 입력해주세요."
        register_value="nickname"
        isRequired={true}
        register={register}
        isValidatorField={true}
        isValid={validNickname}
        handleValidation={
          !validNickname ? handleValidateNick : () => setValidNickname(false)
        }
      />

      {errors.nickname?.message && (
        <ErrorMessage children={errors.nickname.message} />
      )}
      {validNickname && !errors.nickname && (
        <SuccessMessage children={successNicknameMsg} />
      )}
      {!validNickname && errorNicknameMsg && (
        <ErrorMessage children={errorNicknameMsg} />
      )}

      <RegisterInputField
        type="date"
        id="birthday"
        label="생년월일"
        placeholder="이름을 입력해주세요."
        register_value="birthday"
        isRequired={true}
        register={register}
      />

      {errors.birthday?.message && (
        <ErrorMessage children={errors.birthday.message} />
      )}

      <RegisterInputField
        type="string"
        id="phone"
        label="핸드폰 번호"
        placeholder="핸드폰 번호를 입력해주세요."
        register_value="phone"
        isRequired={true}
        register={register}
      />

      {errors.phone?.message && (
        <ErrorMessage children={errors.phone.message} />
      )}

      <SubmitButton
        disabled={!formState.isValid || !validEmail || !validNickname}
        type="submit"
        role="submit"
        children="가입하기"
      />
    </form>
  );
};
