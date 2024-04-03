interface SubmitButtonProps {
  children: string;
  disabled: boolean;
  role: string;
  type: "submit" | "reset" | "button";
}

export const SubmitButton = ({
  children,
  disabled,
  role,
  type,
}: SubmitButtonProps) => {
  return (
    <button
      type={type}
      role={role}
      disabled={disabled}
      style={{ backgroundColor: disabled ? "#E8e8e8" : "#4065f6" }}
      className="h-12 w-full  mx-auto flex items-center justify-center p-4  rounded-lg text-white mobile:w-full tablet:text-[15px] "
    >
      {children}
    </button>
  );
};
