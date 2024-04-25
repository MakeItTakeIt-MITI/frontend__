import noGamesAlertIcon from "../../assets/nogames_alert_cion.svg";

interface DataProp {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export const NoGamesAvailableBox = ({ data }: DataProp) => {
  return (
    <div className="py-2 px-[21px]">
      <h1 className="font-bold">{data?.data.length}개의 매치</h1>
      <div className="flex flex-col items-center justify-center text-[#999] text-[14px]">
        <img src={noGamesAlertIcon} alt="alert icon" />
        <h2>경기가 없습니다.</h2>
        <h2>경기를 직접 호스팅해보세요!</h2>
      </div>
    </div>
  );
};
