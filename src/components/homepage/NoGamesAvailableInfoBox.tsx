import noGamesAlertIcon from "../../assets/nogames_alert_cion.svg";

export const NoGamesAvailableInfoBox = () => {
  return (
    <div className="flex flex-col h-full  justify-center laptop:px-3 mobile:px-0  ">
      <div className="flex flex-col items-center justify-center gap-[15px] text-[#999] text-[14px]">
        <img src={noGamesAlertIcon} alt="alert icon" />
        <div className="text-center">
          <h2>경기가 없습니다.</h2>
          <h2>경기를 직접 호스팅해보세요!</h2>
        </div>
      </div>
    </div>
  );
};
