import successIcon from "../../assets/alert_check.svg";

interface SuccessProp {
  children: string;
}

export const SuccessMessage = ({ children }: SuccessProp) => {
  return (
    <div className="flex gap-2 items-center">
      <img src={successIcon} alt="success icon" />
      <p className="text-[13px] text-[#00BA34]">{children}</p>
    </div>
  );
};
