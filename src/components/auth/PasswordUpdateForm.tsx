import { zodResolver } from "@hookform/resolvers/zod";
import { userEditPassword } from "../../api/users";
import { useUpdatePassSchema } from "../../modals/useUpdatePassSchema";
import { useForm } from "react-hook-form";
import { useState } from "react";

import close from "../../assets/clarity_eye-hide-line.svg";
import open from "../../assets/clarity_eye-show-line.svg";

interface PasswordChangeProps {
  id: number | null;
  refetch: () => void;
}

interface PasswordField {
  id: number | null;
  password: string;
  password_check: string;
}

export const PasswordUpdateForm = ({ id, refetch }: PasswordChangeProps) => {
  const [displayPassword, setDisplayPassword] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordField>({
    resolver: zodResolver(useUpdatePassSchema),
  });

  const handleDisplayPassword = () => setDisplayPassword(!displayPassword);

  const handleChangePassword = (data: PasswordField) => {
    userEditPassword(id, data);
    reset();
    refetch();
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
      <div className="relative">
        <input
          type={`${displayPassword ? "text" : "password"}`}
          id="password_check"
          role="input-password-confirm"
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg w-full "
          placeholder="확인 비밀번호를 입력해주세요."
          {...register("password_check")}
        />
      </div>

      <button
        role="change-password"
        className="rounded-xl w-full h-14 bg-[#4065f6] text-white"
      >
        비밀번호 수정
      </button>
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
