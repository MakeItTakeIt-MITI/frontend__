import { GameDetailBoxProp } from "../../interface/gameInterface";

export const GameDetailExtraInfoBox = ({ gameDetail }: GameDetailBoxProp) => {
  return (
    <div className=" space-y-4 p-3 ">
      <p className="text-[#222] font-bold tablet:text-[18px]">모집 정보</p>
      <div>
        <h4 className="text-[#444] font-bold mobile:text-[14px] tablet:text-[16px]">
          준비물
        </h4>
        <p> {gameDetail?.info}</p>
      </div>
    </div>
  );
};
