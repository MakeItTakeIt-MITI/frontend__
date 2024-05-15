import { GameDetailBoxProp } from "../../interface/gameInterface";

export const GameDetailExtraInfoBox = ({ gameDetail }: GameDetailBoxProp) => {
  return (
    <div className=" space-y-4 laptop:p-3 mobile:p-3 laptop:h-[356px] mobile:h-full overflow-y-auto laptop:border border-gray-200 rounded-lg">
      <p className="text-[#222] font-bold tablet:text-[18px]">모집 정보</p>
      <div>
        <p> {gameDetail?.info}</p>
      </div>
    </div>
  );
};
