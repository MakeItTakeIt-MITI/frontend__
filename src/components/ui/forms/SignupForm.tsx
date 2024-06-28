import { useForm } from "react-hook-form";
import { userRegisterSchema } from "../../../modals/userSignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../../../hooks/auth/useRegisterMutation";
import {
  useValidateDuplicateEmail,
  useValidateDuplicateNickname,
} from "../../../hooks/auth/useUserValidationMutation";
import { ErrorMessage } from "../../StatusMessages/ErrorMessage";
import { SuccessMessage } from "../../StatusMessages/SuccessMessage";
import { CheckBox } from "./CheckBox";
import {
  ExistingEmail,
  ExistingNickname,
  NameRegexFailure,
  PasswordConfirmNotMatching,
  PasswordRegexFailure,
  PhoneRegexFailure,
} from "../../StatusMessages/ErrorMessage.stories";
import {
  EmailAllowed,
  NicknameAllowed,
  SafePassword,
} from "../../StatusMessages/SuccessMessage.stories";
import { SubmitButton } from "../buttons/SubmitButton";
import { Active, Inactive } from "../buttons/Button.stories";
import { FormLabel } from "./FormLabel";
import AuthInput, { AuthInputField } from "./AuthInput";

export const SignupForm = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [validNickname, setValidNickname] = useState(false);

  const [checkAll, setCheckAll] = useState(false);
  const [checkPolicy, setCheckPolicy] = useState(false);
  const [checkAgreement, setCheckAgreement] = useState(false);
  const [checkMarketing, setCheckMarketing] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    formState,
  } = useForm<AuthInputField>({
    resolver: zodResolver(userRegisterSchema),
    mode: "onBlur",
  });

  const { mutate: registerMutation, data: registrationResponse } =
    useRegisterMutation();
  const { mutate: emailMutation, data: emailValidationData } =
    useValidateDuplicateEmail();
  const { mutate: nicknameMutation, data: nicknameValidationData } =
    useValidateDuplicateNickname();
  console.log(registrationResponse);

  const onSubmit = (data: AuthInputField) => {
    registerMutation(data);
  };

  const handleValidateEmail = () => {
    emailMutation({ email: getValues("email") });
  };

  const handleValidateNick = () => {
    nicknameMutation({ nickname: getValues("nickname") });
  };

  const handleCheckAll = () => setCheckAll(!checkAll);

  useEffect(() => {
    if (checkAll) {
      setCheckPolicy(true);
      setCheckAgreement(true);
      setCheckMarketing(true);
    }

    if (nicknameValidationData?.data.nickname.is_duplicated === false) {
      setValidNickname(true);
    }

    if (emailValidationData?.data.email.is_duplicated === false) {
      setValidEmail(true);
    }
  }, [
    checkAll,
    checkPolicy,
    checkAgreement,
    checkMarketing,
    nicknameValidationData,
    emailValidationData,
  ]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[30px]"
    >
      <div className="space-y-2">
        <FormLabel id="email" children="이메일" />
        <div className="relative">
          <AuthInput
            type="email"
            id="email"
            // data-testid="email-input"
            dataId="email-input"
            placeholder="이메일을 입력해주세요."
            register={register}
            register_type="email"
            aria-label="이메일을 입력하세요"
            aria-invalid={errors.email ? true : false}
          />
          <button
            onClick={() => {
              if (!validEmail) {
                handleValidateEmail();
              } else {
                setValidEmail(false);
              }
            }}
            type="button"
            style={{
              backgroundColor: !validEmail ? "#4065f6" : "#E8E8E8",
            }}
            className="w-[81px] absolute right-4 bottom-[11px] top-[11px] text-[12px] text-white  rounded-lg"
          >
            {!validEmail ? "중복확인" : "수정하기"}
          </button>
        </div>

        <>
          {/* {errors.email?.message && (
            <ErrorMessage {...EmailRegexFailure.args} />
          )} */}

          {emailValidationData?.data.email.is_duplicated && !validEmail && (
            <ErrorMessage {...ExistingEmail.args} />
          )}
          {emailValidationData?.status_code === 200 &&
            !emailValidationData?.data.email.is_duplicated &&
            validEmail && <SuccessMessage {...EmailAllowed.args} />}
        </>
      </div>
      <div className="space-y-2">
        <FormLabel id="nickname" children="닉네임" />
        <div className="relative">
          <AuthInput
            type="nickname"
            id="nickname"
            dataId="nickname-input"
            placeholder="닉네임을 입력해주세요."
            register={register}
            register_type="nickname"
            aria-label="닉네임을 입력해주세요."
            aria-invalid={!validNickname ? true : false}
          />
          <button
            onClick={() => {
              if (!validNickname) {
                handleValidateNick();
              } else {
                setValidNickname(false);
              }
            }}
            type="button"
            style={{
              backgroundColor: !validNickname ? "#4065f6" : "#E8E8E8",
            }}
            className="w-[81px] absolute right-4 bottom-[11px] top-[11px] text-[12px] text-white  rounded-lg"
          >
            {!validNickname ? "중복확인" : "수정하기"}
          </button>
        </div>
        <>
          {/* {errors.nickname?.message && (
            <ErrorMessage {...NicknameRegexFailure.args} />
          )} */}
          {nicknameValidationData?.data.nickname.is_duplicated &&
            !validNickname && <ErrorMessage {...ExistingNickname.args} />}
          {nicknameValidationData?.status_code === 200 &&
            !nicknameValidationData?.data.nickname.is_duplicated &&
            validNickname && <SuccessMessage {...NicknameAllowed.args} />}
        </>
      </div>

      <div className="space-y-2 noselect">
        <span className=" text-[14px] text-[#1C1C1C]">비밀번호</span>
        <p className="w-full h-[65px] p-4 text-center text-[13px] bg-[#f7f7f7] text-[#040000]">
          비밀번호는 특수문자(!@#$%^&), 숫자, 영어 대소문자를 반드시 포함해야
          합니다.
        </p>
      </div>
      <div className="space-y-2">
        <AuthInput
          type="password"
          id="password"
          dataId="password-input"
          placeholder="비밀번호를 입력해주세요."
          register={register}
          register_type="password"
          aria-label="비밀번호를 입력해주세요."
          aria-invalid={errors.password ? true : false}
        />

        <>
          {errors.password?.message && (
            <ErrorMessage {...PasswordRegexFailure.args} />
          )}
          {!errors.password?.message && getValues("password") && (
            <SuccessMessage {...SafePassword.args} />
          )}
        </>
      </div>
      <div className="space-y-2">
        <AuthInput
          type="password"
          id="password_check"
          dataId="password-check-input"
          placeholder="비밀번호를 다시 입력해주세요."
          register={register}
          register_type="password_check"
          aria-label="비밀번호를 다시 입력해주세요."
          aria-invalid={errors.password_check ? true : false}
        />

        <>
          {errors.password_check?.message && (
            <ErrorMessage {...PasswordConfirmNotMatching.args} />
          )}
          {!errors.password_check?.message && getValues("password_check") && (
            <SuccessMessage {...SafePassword.args} />
          )}
        </>
      </div>
      <div className="space-y-2">
        <FormLabel id="name" children="이름" />
        <AuthInput
          type="text"
          id="name"
          dataId="name-input"
          placeholder="이름을 입력해주세요."
          register={register}
          register_type="name"
          aria-label="이름을 입력해주세요."
          aria-invalid={errors.name ? true : false}
        />
        <>
          {errors.name?.message && <ErrorMessage {...NameRegexFailure.args} />}
          {/* {} */}
        </>{" "}
      </div>

      <div className="space-y-2">
        <FormLabel id="date" children="생년월일" />
        <AuthInput
          type="date"
          id="birthday"
          dataId="birthday-input"
          register={register}
          register_type="birthday"
          aria-label="생일을 입력해주세요."
        />
      </div>

      <div className="space-y-2">
        <FormLabel id="phone" children="휴대폰 번호" />
        <AuthInput
          type="string"
          id="phone"
          dataId="phone-input"
          register={register}
          register_type="phone"
          placeholder="핸드폰 번호를 입력해주세요"
          aria-label="핸드폰 번호를 입력해주세요."
          aria-invalid={errors.phone ? true : false}
        />
        {errors.phone?.message && <ErrorMessage {...PhoneRegexFailure.args} />}
        {registrationResponse?.status_code === 400 &&
          registrationResponse?.data.phone && (
            <ErrorMessage children="이미 회원으로 등록된 번호입니다." />
          )}
      </div>

      <CheckBox
        handleCheckAll={handleCheckAll}
        checkAll={checkAll}
        checkPolicy={checkPolicy}
        checkAgreement={checkAgreement}
        checkMarketing={checkMarketing}
        setCheckPolicy={setCheckPolicy}
        setCheckAgreement={setCheckAgreement}
        setCheckMarketing={setCheckMarketing}
      />

      {!formState.isValid ||
      !validEmail ||
      !validNickname ||
      !checkPolicy ||
      !checkAgreement ||
      !checkMarketing ? (
        <SubmitButton children="가입하기" {...Inactive.args} />
      ) : (
        <SubmitButton type="submit" children="가입하기" {...Active.args} />
      )}
    </form>
  );
};
