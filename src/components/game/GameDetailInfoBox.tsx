import markerSvg from "../../assets/Map_Pin.svg";
import peopleSvg from "../../assets/people.svg";
import { GameDetailBoxProp } from "../../interface/gameInterface";

export const GameDetailInfoBox = ({ gameDetail }: GameDetailBoxProp) => {
  return (
    <>
      <div className=" mobile:text-[14px] tablet:text-[16px] ">
        <div className="flex gap-1">
          <img src={markerSvg} alt="pin icon" className="tablet:w-[20px]" />
          <p>
            {" "}
            {gameDetail?.court.address} {gameDetail?.court.address_detail}
          </p>
        </div>

        <div className="flex gap-1">
          <img src={peopleSvg} alt="peoples icon" className="tablet:w-[20px]" />
          <p>
            총 {gameDetail?.max_invitation}명 중{" "}
            {gameDetail?.confimed_participations
              ? gameDetail?.confimed_participations
              : 0}
            명 모집 완료
          </p>
        </div>
      </div>
      <p className="text-[#4065F6] font-bold text-[16px]">
        {gameDetail?.fee.toLocaleString("ko-KR", {
          style: "currency",
          currency: "KRW",
        })}
      </p>
    </>
  );
};
