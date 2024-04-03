/* eslint-disable @typescript-eslint/no-explicit-any */
interface FormInputProps {
  type?: string;
  id: string;
  role: string;
  placeholder: string;
  register: any;
  register_type?: string;
  requiredValue?: boolean;
  disabled?: boolean;
}

export const FormInput = ({
  type,
  id,
  role,
  placeholder,
  register,
  register_type,
  requiredValue,
  disabled,
}: FormInputProps) => {
  return (
    <input
      type={type}
      id={id}
      role={role}
      className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
      placeholder={placeholder}
      {...register(register_type, {
        required: requiredValue,
      })}
      disabled={disabled}
    />
  );
};
