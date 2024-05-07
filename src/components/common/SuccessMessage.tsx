import React from "react";
import successIcon from "../../assets/alert_check.svg";

interface SuccessProp {
  children?: string;
}

export const SuccessMessage: React.FC<SuccessProp> = ({ children }) => {
  return (
    <div className="flex gap-1 items-center">
      <img src={successIcon} alt="success icon" />
      <p className="text-[13px] text-[#00BA34]">{children}</p>
    </div>
  );
};
