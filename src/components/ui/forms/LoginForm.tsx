import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginSchema } from "../../../modals/useLoginSchema";
import { useLoginMutation } from "../../../hooks/auth/useLoginMutation";
import { ErrorMessage } from "../../StatusMessages/ErrorMessage";
import useDisplayPwStore from "../../../store/useDisplayPwStore";
import { useEffect, useState } from "react";
import close from "../../../assets/clarity_eye-hide-line.svg";
import open from "../../../assets/clarity_eye-show-line.svg";

import {
  InactiveUserNotification,
  NotAuthroizedUser,
} from "../../../stories/Modal.stories";
import {
  EmailRegexFailure,
  PasswordRegexFailure,
  UserNotFound,
} from "../../StatusMessages/ErrorMessage.stories";
import { SubmitButton } from "../buttons/SubmitButton";
import { Active, Inactive } from "../buttons/Button.stories";
import { FormLabel } from "./FormLabel";
import { AlertModal } from "../common/AlertModal";
import { AuthInputField } from "./AuthInput";
import AuthInput from "./AuthInput";

export const LoginForm = () => {
  const { displayPassword, setDisplayPassword } = useDisplayPwStore();
  const [displayModal, setDisplayModal] = useState(true);

  const {
    handleSubmit,
    formState: { errors },
    formState,
    register,
  } = useForm<AuthInputField>({
    resolver: zodResolver(useLoginSchema),
  });

  const { mutate: loginMutation, data } = useLoginMutation();
  const handleDisplayPassword = () => setDisplayPassword(!displayPassword);
  const handleCloseModal = () => {
    setDisplayModal(false);
  };
  const onSubmit = (data: AuthInputField) => {
    loginMutation(data);
  };

  useEffect(() => {
    if (data?.status_code === 403) {
      setDisplayModal(true);
    }
  }, [data?.status_code]);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <FormLabel id="user-email" children="이메일" />

        <AuthInput
          type="email"
          id="user-email"
          dataId="email-input"
          placeholder="이메일을 입력해주세요."
          register={register}
          register_type="email"
          aria-label="이메일을 입력해주세요"
          aria-invalid={errors.email ? true : false}
        />
      </div>
      {errors.email && <ErrorMessage {...EmailRegexFailure.args} />}
      <div className="space-y-2">
        <FormLabel id="user-password" children="비밀번호" />

        <div className="relative">
          <AuthInput
            type={displayPassword ? "text" : "password"}
            id="user-password"
            dataId="password-input"
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
      </div>
      <>
        {errors.password && <ErrorMessage {...PasswordRegexFailure.args} />}
        {!errors.email &&
          !errors.password &&
          data?.status_code === 401 &&
          data?.error_code === 140 && <ErrorMessage {...UserNotFound.args} />}
        {data?.status_code === 403 && data?.error_code === 140 && (
          <AlertModal
            modal={displayModal}
            handleCloseModal={handleCloseModal}
            {...InactiveUserNotification.args}
          />
        )}
        {data?.status_code === 403 && data?.error_code === 141 && (
          <AlertModal
            modal={displayModal}
            handleCloseModal={handleCloseModal}
            {...NotAuthroizedUser.args}
          />
        )}
      </>

      {!formState.isValid ? (
        <SubmitButton children="로그인 하기" {...Inactive.args} />
      ) : (
        <SubmitButton children="로그인 하기" {...Active.args} />
      )}
    </form>
  );
};
