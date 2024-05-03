import errorIcon from "../../assets/alert_failure.svg";

interface ErrorProp {
  children: string;
}

export const ErrorMessage: React.FC<ErrorProp> = ({ children }) => {
  return (
    <div className="flex gap-2 items-center">
      <img src={errorIcon} alt="error icon" />
      <p className="text-[13px] text-[#E92C2C]">{children}</p>
    </div>
  );
};
