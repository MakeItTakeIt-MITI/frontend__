interface SubmitButton {
  children?: string;
  backgroundColor?: string;
  textColor?: string;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

export const SubmitButton = ({
  children,
  backgroundColor,
  textColor,
  isDisabled,
  type,
  onClick,
}: SubmitButton) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      data-testid="submit-button"
      style={{ backgroundColor: backgroundColor, color: textColor }}
      className="w-full h-12 bg-gray-200 rounded-lg text-sm font-bold"
    >
      {children}
    </button>
  );
};
