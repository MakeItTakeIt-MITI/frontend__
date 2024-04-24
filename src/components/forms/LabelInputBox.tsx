import { UseFormRegister } from "react-hook-form";
import { GameHostField } from "../../interface/gameInterface";

interface LabelInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<GameHostField>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register_type: any;
  requiredValue: boolean;
}

export const LabelInputBox = ({
  id,
  label,
  type,
  placeholder,
  register,
  register_type,
  requiredValue,
}: LabelInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className=" text-[#999]">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="input-primary"
        placeholder={placeholder}
        {...register(register_type, {
          required: requiredValue,
        })}
      />
    </div>
  );
};
