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
      className="btn-primary "
    >
      {children}
    </button>
  );
};
