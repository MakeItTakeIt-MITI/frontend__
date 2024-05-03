import { UseFormRegister } from "react-hook-form";
import useDisplayPwStore from "../../store/useDisplayPwStore";
import close from "../../assets/clarity_eye-hide-line.svg";
import open from "../../assets/clarity_eye-show-line.svg";
import xIcon from "../../assets/_X btn.png";
import { LoginField, RegisterField } from "../../interface/usersInterface";
import { GameHostField } from "../../interface/gameInterface";
import { FormLabel } from "./FormLabel";

type LoginValues = "email" | "password";
type SignupValues =
  | "email"
  | "password"
  | "password_check"
  | "nickname"
  | "name"
  | "birthday"
  | "phone";

type GameHostValues =
  | "title"
  | "startdate"
  | "starttime"
  | "enddate"
  | "endtime"
  | "info"
  | "fee"
  | "min_invitation"
  | "max_invitation"
  | "court"
  | "court.name"
  | "court.address"
  | "court.address_detail";

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

interface GameHostInputProps extends InputProps {
  handleFindAddress?: () => void;
  handleEraseValue?: () => void;
  register_value: GameHostValues;
  register: UseFormRegister<GameHostField>;
  gameHostValue?: boolean;
  buttonField?: boolean;
  feeField?: boolean;
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
      <FormLabel id={id} children={label} />

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
  console.log(isValid);
  return (
    <div className="space-y-2">
      <FormLabel id={id} children={label} />
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

export const GameHostInputField: React.FC<GameHostInputProps> = ({
  id,
  register_value,
  label,
  type,
  placeholder,
  isRequired,
  gameHostValue,
  register,
  handleEraseValue,
  buttonField,
  handleFindAddress,
  feeField,
}) => {
  return (
    <div className="space-y-2">
      <FormLabel id={id} children={label} />
      <div className="relative">
        <input
          type={type}
          id={id}
          readOnly={buttonField ? true : false}
          className="truncate h-[50px] px-4  rounded-lg bg-[#F7F7F7] w-full text-[16px]"
          style={{ paddingRight: buttonField ? " 110px" : "0px" }}
          placeholder={placeholder}
          {...register(register_value, {
            required: isRequired,
          })}
        />
        {gameHostValue && (
          <button
            onClick={handleEraseValue}
            type="button"
            className="absolute right-4 top-2 bottom-2 "
          >
            <img src={xIcon} alt="size-2" />
          </button>
        )}
        {buttonField && (
          <button
            onClick={handleFindAddress}
            type="button"
            className="bg-[#4065f6] w-[81px] absolute right-2 bottom-[7px] top-[7px] text-[12px] text-white  rounded-lg"
          >
            {register_value === "court.address" && "주소검색"}
          </button>
        )}

        {feeField && (
          <div className="absolute right-4 top-4 bottom-4 text-[#999] ">₩</div>
        )}
      </div>
    </div>
  );
};
