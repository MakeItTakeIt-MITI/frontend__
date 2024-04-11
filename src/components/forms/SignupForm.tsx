import { useForm } from "react-hook-form";
import { userRegisterSchema } from "../../modals/userSignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterField } from "../../interface/usersInterface";
import questionIcon from "../../assets/question_icon.svg";

import { useState } from "react";
import { useRegisterMutation } from "../../hooks/auth/useRegisterMutation";
import {
  useValidateDuplicateEmail,
  useValidateDuplicateNickname,
} from "../../hooks/auth/useUserValidationMutation";
import { SubmitButton } from "../common/SubmitButtons";
import { ValidateInputButton } from "../common/ValidationButtons";
import { ErrorMessage } from "../common/ErrorMessage";
import { SuccessMessage } from "../common/SuccessMessage";

export const SignupForm = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [validNickname, setValidNickname] = useState(false);
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
  const { mutate: emailMutation, data: emailData } =
    useValidateDuplicateEmail(setValidEmail);
  const { mutate: nicknameMutation, data: nickData } =
    useValidateDuplicateNickname(setValidNickname);

  const onSubmit = (data: RegisterField) => registerMutation(data);

  const handleValidateEmail = () =>
    emailMutation({ email: getValues("email") });

  const handleValidateNick = () =>
    nicknameMutation({ nickname: getValues("nickname") });

  const handleDisplayVerificationBox = () => {
    setDisplayPasswordMark(!displayPasswordMark);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {isError && (
        <p className="text-[#E92C2C] text-[13px] font-[400] text-center">
          회원가입에 실패하셨습니다. 다시 시도해주세요.
        </p>
      )}
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="email" className="text-[12px] text-[#1c1c1c]">
          이메일
        </label>
        <input
          className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
          type="email"
          id="email"
          role="input-email"
          disabled={validEmail ? true : false}
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: true,
          })}
        />

        <ValidateInputButton
          validation={
            !validEmail ? handleValidateEmail : () => setValidEmail(false)
          }
          isValid={validEmail}
          validateFunction={handleValidateEmail}
          role={"validate-email"}
        />
      </div>
      {errors.email?.message && (
        <ErrorMessage children={errors.email?.message} />
      )}
      {emailData?.data.email.is_duplicated === false && (
        <SuccessMessage children=" 사용 가능한 이메일이에요!" />
      )}
      {emailData?.data.email.is_duplicated === true && (
        <ErrorMessage children="이미 회원으로 등록된 이메일이에요." />
      )}

      <div className="flex flex-col gap-2">
        <div
          onMouseOut={() => setDisplayPasswordMark(false)}
          className="flex items-center gap-1 relative"
        >
          <label htmlFor="password" className="text-[12px] text-[#1c1c1c]">
            비빌번호
          </label>
          <button
            className="relative"
            type="button"
            onMouseOver={handleDisplayVerificationBox}
          >
            <img src={questionIcon} alt="question icon" />
          </button>
          {displayPasswordMark && (
            <div className="absolute left-16 bottom-2 w-[300px] h-[60px]   text-[13px] text-center rounded-lg bg-gray-400 text-white flex items-center justify-center p-4 ">
              비밀번호는 특수문자(!@#$%^&), 숫자, 영어 대소문자를 반드시
              포함해야 합니다.
            </div>
          )}
        </div>
        <input
          className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          id="password"
          role="input-password"
          {...register("password", {
            required: true,
          })}
        />
      </div>
      {errors.password?.message && (
        <ErrorMessage children={errors.password.message} />
      )}
      {!errors.password?.message && getValues("password") && (
        <SuccessMessage children="안전한 비밀번호에요!" />
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="password_check" className="text-[12px] text-[#1c1c1c]">
          비빌번호 확인
        </label>
        <input
          className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요."
          id="password_check"
          role="input-password-check"
          {...register("password_check", {
            required: true,
          })}
        />
      </div>
      {errors.password_check?.message && (
        <ErrorMessage children={errors.password_check.message} />
      )}
      {!errors.password?.message && getValues("password_check") && (
        <SuccessMessage children="안전한 비밀번호에요!" />
      )}
      <div className="flex flex-col gap-2 ">
        <label htmlFor="name" className="text-[12px] text-[#1c1c1c]">
          이름
        </label>
        <input
          className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
          type="text"
          id="name"
          role="input-name"
          placeholder="이름을 입력해주세요."
          {...register("name", {
            required: true,
          })}
        />
        {errors.name?.message && (
          <ErrorMessage children={errors.name.message} />
        )}
      </div>
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="nickname" className="text-[12px] text-[#1c1c1c]">
          닉네임
        </label>
        <input
          className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
          type="text"
          id="nickname"
          role="input-nickname"
          disabled={validNickname ? true : false}
          placeholder="닉네임을 입력해주세요."
          {...register("nickname", {
            required: true,
          })}
        />

        <ValidateInputButton
          validation={
            !validNickname ? handleValidateNick : () => setValidNickname(false)
          }
          isValid={validNickname}
          validateFunction={handleValidateNick}
          role={"validate-nickname"}
        />
      </div>
      {errors.nickname?.message && (
        <ErrorMessage children={errors.nickname.message} />
      )}
      {nickData?.data.nickname.is_duplicated === false && (
        <SuccessMessage children="멋진 닉네임이에요!" />
      )}
      {nickData?.data.nickname.is_duplicated === true && (
        <ErrorMessage children="다른 회원님이 사용중인 닉네임이에요." />
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="birthday" className="text-[12px] text-[#1c1c1c]">
          생년월일
        </label>
        <input
          className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
          type="date"
          id="birthday"
          role="user-birthday"
          {...register("birthday", {
            required: true,
          })}
        />
        {errors.birthday?.message && (
          <ErrorMessage children={errors.birthday.message} />
        )}
      </div>
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="phone" className="text-[12px] text-[#1c1c1c]">
          핸드폰 번호
        </label>
        <input
          className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
          type="string"
          id="phone"
          placeholder="'-'을 제외한 휴대폰번호를 입력해주세요."
          {...register("phone", {
            required: true,
          })}
        />
      </div>
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
