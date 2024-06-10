import { useForm } from "react-hook-form";
import { userRegisterSchema } from "../../../modals/userSignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterField } from "../../../interface/usersInterface";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../../../hooks/auth/useRegisterMutation";
import {
  useValidateDuplicateEmail,
  useValidateDuplicateNickname,
} from "../../../hooks/auth/useUserValidationMutation";
import { ErrorMessage } from "../../StatusMessages/ErrorMessage";
import { SuccessMessage } from "../../StatusMessages/SuccessMessage";
import { RegisterInputField } from "./FormInputContainer";
import { CheckBox } from "./CheckBox";
import {
  EmailRegexFailure,
  ExistingEmail,
  ExistingNickname,
  NameRegexFailure,
  NicknameRegexFailure,
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
  } = useForm<RegisterField>({
    resolver: zodResolver(userRegisterSchema),
    mode: "onBlur",
  });

  const { mutate: registerMutation, data: registerResult } =
    useRegisterMutation();
  const { mutate: emailMutation, data: emailValidationData } =
    useValidateDuplicateEmail(setValidEmail);
  const { mutate: nicknameMutation, data: nicknameValidationData } =
    useValidateDuplicateNickname(setValidNickname);
  console.log(registerResult);

  const onSubmit = (data: RegisterField) => registerMutation(data);

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
  }, [checkAll, checkPolicy, checkAgreement, checkMarketing]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[30px]"
    >
      <div className="space-y-2">
        <RegisterInputField
          type="email"
          id="email"
          dataTestid="email-input"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          register_value="email"
          isRequired={true}
          register={register}
          isValidatorField={true}
          isValid={validEmail && !errors.email}
          handleValidation={
            !validEmail ? handleValidateEmail : () => setValidEmail(false)
          }
        />

        {errors.email?.message && <ErrorMessage {...EmailRegexFailure.args} />}

        {emailValidationData?.data.email.is_duplicated && (
          <ErrorMessage {...ExistingEmail.args} />
        )}
        {emailValidationData?.status_code === 200 &&
          !emailValidationData?.data.email.is_duplicated && (
            <SuccessMessage {...EmailAllowed.args} />
          )}
      </div>
      <div className="space-y-2">
        <RegisterInputField
          type="nickname"
          id="nickname"
          dataTestid="nickname-input"
          label="닉네임"
          placeholder="닉네임을 입력해주세요."
          register_value="nickname"
          isRequired={true}
          register={register}
          isValidatorField={true}
          isValid={validNickname && !errors.nickname}
          handleValidation={
            !validNickname ? handleValidateNick : () => setValidNickname(false)
          }
        />
        {errors.nickname?.message && (
          <ErrorMessage {...NicknameRegexFailure.args} />
        )}
        {nicknameValidationData?.data.nickname.is_duplicated && (
          <ErrorMessage {...ExistingNickname.args} />
        )}
        {nicknameValidationData?.status_code === 200 &&
          !nicknameValidationData?.data.nickname.is_duplicated && (
            <SuccessMessage {...NicknameAllowed.args} />
          )}
      </div>

      <div className="space-y-2 noselect">
        <span className=" text-[14px] text-[#1C1C1C]">비밀번호</span>
        <p className="w-full h-[65px] p-4 text-center text-[13px] bg-[#f7f7f7] text-[#040000]">
          비밀번호는 특수문자(!@#$%^&), 숫자, 영어 대소문자를 반드시 포함해야
          합니다.
        </p>
      </div>
      <div className="space-y-2">
        <RegisterInputField
          type="password"
          id="password"
          dataTestid="password-input"
          label=""
          placeholder="비밀번호를 입력해주세요."
          register_value="password"
          isRequired={true}
          register={register}
        />

        {errors.password?.message && (
          <ErrorMessage {...PasswordRegexFailure.args} />
        )}
        {!errors.password?.message && getValues("password") && (
          <SuccessMessage {...SafePassword.args} />
        )}
      </div>
      <div className="space-y-2">
        <RegisterInputField
          type="password"
          id="password_check"
          dataTestid="password-check-input"
          label=""
          placeholder="비밀번호를 다시 입력해주세요."
          register_value="password_check"
          isRequired={true}
          register={register}
        />
        {errors.password_check?.message && (
          <ErrorMessage {...PasswordConfirmNotMatching.args} />
        )}
        {!errors.password_check?.message && getValues("password_check") && (
          <SuccessMessage {...SafePassword.args} />
        )}
      </div>
      <div className="space-y-2">
        <RegisterInputField
          type="name"
          id="name"
          dataTestid="name-input"
          label="이름"
          placeholder="이름을 입력해주세요."
          register_value="name"
          isRequired={true}
          register={register}
        />
        {errors.name?.message && <ErrorMessage {...NameRegexFailure.args} />}
      </div>

      <RegisterInputField
        type="date"
        id="birthday"
        dataTestid="birthday-input"
        label="생년월일"
        placeholder=""
        register_value="birthday"
        isRequired={true}
        register={register}
      />

      <div className="space-y-2">
        <RegisterInputField
          type="string"
          id="phone"
          dataTestid="phone-input"
          label="핸드폰 번호"
          placeholder="핸드폰 번호를 입력해주세요."
          register_value="phone"
          isRequired={true}
          register={register}
        />

        {errors.phone?.message && <ErrorMessage {...PhoneRegexFailure.args} />}
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
