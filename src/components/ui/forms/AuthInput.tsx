import { UseFormRegister } from "react-hook-form";
import { useLocation } from "react-router-dom";

export interface AuthInputField {
  email: string;
  password: string;
  password_check?: string;
  name?: string;
  nickname?: string;
  birthday?: Date;
  phone?: string;
  confirmation_code?: number;
}
interface InputProps {
  type: string;
  id: string;
  dataId?: string;
  placeholder?: string;
  register: UseFormRegister<AuthInputField>;
  register_type: keyof AuthInputField;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaInvalid?: boolean;
}

export default function AuthInput({
  type,
  id,
  dataId,
  placeholder,
  register,
  register_type,
  ariaLabel,
  ariaInvalid,
}: InputProps) {
  const { pathname } = useLocation();
  const isAuthPage = pathname.includes("auth");

  return (
    <input
      type={type}
      id={id}
      autoComplete="off"
      data-testid={dataId}
      placeholder={placeholder}
      {...register(register_type)}
      aria-label={ariaLabel}
      aria-invalid={ariaInvalid}
      className=" p-[17px]  rounded-lg font-medium  bg-[#F7F7F7] w-full "
      style={{
        height: isAuthPage ? "58px" : "59px",
        fontSize: isAuthPage ? "16px" : "14px",
      }}
    />
  );
}
