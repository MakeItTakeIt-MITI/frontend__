import React from "react";
import noGamesAlertIcon from "../../../assets/nogames_alert_cion.svg";

interface NoListFoundMessageBoxProp {
  title?: string;
  content?: string;
}

export const NoListFoundMessageBox: React.FC<NoListFoundMessageBoxProp> = ({
  title,
  content,
}) => {
  return (
    <div className="flex flex-col h-full  justify-center laptop:px-3 mobile:px-0  ">
      <div className="flex flex-col items-center justify-center gap-[15px] text-[#999] text-[14px]">
        <img src={noGamesAlertIcon} alt="alert icon" />
        <div className="text-center">
          <h2>{title}</h2>
          <h2>{content}</h2>
        </div>
      </div>
    </div>
  );
};
