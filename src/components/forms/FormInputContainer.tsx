import { UseFormRegister } from "react-hook-form";
import useDisplayPwStore from "../../store/useDisplayPwStore";
import close from "../../assets/clarity_eye-hide-line.svg";
import open from "../../assets/clarity_eye-show-line.svg";
import { LoginField, RegisterField } from "../../interface/usersInterface";

type LoginValues = "email" | "password";
type SignupValues =
  | "email"
  | "password"
  | "password_check"
  | "nickname"
  | "name"
  | "birthday"
  | "phone";

interface InputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  isRequired: boolean;
}

interface LoginInputProps extends InputProps {
  isPasswordField?: boolean;
  handleDisplayPassword?: () => void;
  passwordImg?: boolean;
  register: UseFormRegister<LoginField>;
  register_value: LoginValues;
}

interface RegisterInputProps extends InputProps {
  isValid?: boolean;
  handleValidation?: () => void;
  isValidatorField?: boolean;
  register: UseFormRegister<RegisterField>;
  register_value: SignupValues;
}

export const LoginInputField: React.FC<LoginInputProps> = ({
  id,
  register_value,
  label,
  type,
  placeholder,
  isRequired,
  handleDisplayPassword,
  isPasswordField,
  register,
}) => {
  const { displayPassword } = useDisplayPwStore();
  return (
    <div className="space-y-2">
      <label htmlFor={id} className=" text-[#1C1C1C]">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          className="input-primary"
          placeholder={placeholder}
          {...register(register_value, {
            required: isRequired,
          })}
        />
        {isPasswordField && (
          <button
            onClick={handleDisplayPassword}
            className="absolute right-2 top-2 bottom-2"
          >
            <img
              src={displayPassword ? open : close}
              alt="toggle show password"
              className="size-6"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export const RegisterInputField: React.FC<RegisterInputProps> = ({
  id,
  register_value,
  label,
  type,
  placeholder,
  isRequired,
  isValidatorField,
  register,
  handleValidation,
  isValid,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className=" text-[#1C1C1C]">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          readOnly={isValid ? true : false}
          className="input-primary"
          placeholder={placeholder}
          {...register(register_value, {
            required: isRequired,
          })}
        />
        {isValidatorField && (
          <button
            onClick={handleValidation}
            type="button"
            style={{
              backgroundColor: !isValid ? "#4065f6" : "#E8E8E8",
            }}
            className="w-[81px] absolute right-4 bottom-[11px] top-[11px] text-[12px] text-white  rounded-lg"
          >
            {!isValid ? "중복확인" : "수정하기"}
          </button>
        )}
      </div>
    </div>
  );
};
