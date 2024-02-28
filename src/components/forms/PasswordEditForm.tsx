import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdatePassSchema } from "../../modals/useUpdatePassSchema";
import { useForm } from "react-hook-form";
import { useState } from "react";

import close from "../../assets/clarity_eye-hide-line.svg";
import open from "../../assets/clarity_eye-show-line.svg";
import {
  PasswordChangeProps,
  PasswordField,
} from "../../interface/usersInterface";
import { usePasswordChangeMutation } from "../../hooks/usePasswordChangeMutation";

export const PasswordEditForm = ({ id }: PasswordChangeProps) => {
  const [displayPassword, setDisplayPassword] = useState(false);
  const [displayConfirmPassword, setDisplayConfirmPassword] = useState(false);
  const { mutate: mutatePassword, isError } = usePasswordChangeMutation(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordField>({
    resolver: zodResolver(useUpdatePassSchema),
  });

  const handleViewMainPassword = () => setDisplayPassword(!displayPassword);
  const handleViewSecondaryPassword = () =>
    setDisplayConfirmPassword(!displayConfirmPassword);

  const handleChangePassword = (data: PasswordField) => {
    mutatePassword(data);
    alert("비밀번호가 변경되었습니다.");
    window.location.reload();
  };

  return (
    <form
      className="flex flex-col gap-6 p-4 w-full"
      onSubmit={handleSubmit(handleChangePassword)}
    >
      <h4 className="font-bold">비밀번호 변경</h4>
      <div className="relative">
        <input
          type={`${displayPassword ? "text" : "password"}`}
          id="password"
          role="input-password"
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg w-full "
          placeholder="새로운 비밀번호를 입력해주세요."
          {...register("password")}
        />

        <button
          type="button"
          role="show-password-btn"
          onClick={handleViewMainPassword}
          className="absolute right-2 top-4 hover:cursor-pointer"
        >
          <img
            src={`${displayPassword ? open : close}`}
            alt="hide password"
            className="w-[24px] cursor-pointer "
          />
        </button>
      </div>
      <div className="relative">
        <input
          type={`${displayConfirmPassword ? "text" : "password"}`}
          id="password_check"
          role="input-password-confirm"
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg w-full "
          placeholder="확인 비밀번호를 입력해주세요."
          {...register("password_check")}
        />
        <button
          type="button"
          role="show-password-btn"
          onClick={handleViewSecondaryPassword}
          className="absolute right-2 top-4 hover:cursor-pointer"
        >
          <img
            src={`${displayConfirmPassword ? open : close}`}
            alt="hide password"
            className="w-[24px] cursor-pointer "
          />
        </button>
      </div>

      <button
        role="change-password"
        className="rounded-xl mobile:w-full tablet:w-[400px] tablet:mx-auto h-14 bg-[#4065f6] text-white"
      >
        비밀번호 수정
      </button>
      {isError && (
        <p className="text-center text-red-400 font-bold text-sm">
          비밀번호 변경에 실패했습니다.
        </p>
      )}
      {errors.password && (
        <p className="text-center text-red-400 font-bold text-sm">
          {errors.password.message}
        </p>
      )}
      {errors.password_check && (
        <p className="text-center text-red-400 font-bold text-sm">
          {errors.password_check.message}
        </p>
      )}
    </form>
  );
};
