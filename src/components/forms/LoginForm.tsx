import { useForm } from "react-hook-form";

import { LoginField } from "../../interface/usersInterface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginSchema } from "../../modals/useLoginSchema";
import { useLoginMutation } from "../../hooks/auth/useLoginMutation";
import { SubmitButton } from "../common/SubmitButtons";
import {
  DisabledLoginButton,
  EnabledLoginButton,
} from "../../stories/SubmitButtons.stories";
import { LoginInputField } from "./FormInputContainer";
import { ErrorMessage } from "../common/ErrorMessage";
import useDisplayPwStore from "../../store/useDisplayPwStore";
import { useEffect, useState } from "react";
import { AlertModal } from "../common/AlertModal";
import {
  InactiveUserNotification,
  NotAuthroizedUser,
} from "../../stories/Modal.stories";
import {
  EmailRegexFailure,
  PasswordRegexFailure,
  UserNotFound,
} from "../../stories/ErrorMessage.stories";

export const LoginForm = () => {
  const { displayPassword, setDisplayPassword } = useDisplayPwStore();
  const [displayModal, setDisplayModal] = useState(true);

  const {
    handleSubmit,
    formState: { errors },
    formState,
    register,
  } = useForm<LoginField>({
    resolver: zodResolver(useLoginSchema),
  });

  const { mutate: loginMutation, data } = useLoginMutation();
  const handleDisplayPassword = () => setDisplayPassword(!displayPassword);
  const handleCloseModal = () => {
    setDisplayModal(false);
  };
  const onSubmit = (data: LoginField) => {
    loginMutation(data);
  };

  useEffect(() => {
    if (data?.status_code === 403) {
      setDisplayModal(true);
    }
  }, [data?.status_code]);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <LoginInputField
        type="email"
        id="email"
        label="이메일"
        placeholder="이메일을 입력해주세요."
        register_value="email"
        isRequired={true}
        register={register}
      />
      {errors.email && <ErrorMessage {...EmailRegexFailure.args} />}
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

      {errors.password && <ErrorMessage {...PasswordRegexFailure.args} />}

      {data?.status_code === 401 && data?.error_code === 140 && (
        <ErrorMessage {...UserNotFound.args} />
      )}
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

      {!formState.isValid ? (
        <SubmitButton {...DisabledLoginButton.args} />
      ) : (
        <SubmitButton {...EnabledLoginButton.args} />
      )}
    </form>
  );
};
