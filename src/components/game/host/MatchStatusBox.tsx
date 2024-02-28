import { BoxProp } from "../../../interface/gameInterface";

export const MatchStatusBox = ({
  titleOne,
  titleTwo,
  titleOneColor,
  titleTwoColor,
}: BoxProp) => {
  return (
    <div className="h-[166px]  text-lg border border-gray-100 rounded-t-xl  flex flex-col items-center justify-around">
      <button
        style={{
          color: titleOneColor,
        }}
        className="text-[#4065F6] font-bold"
      >
        {titleOne}
      </button>
      <button
        style={{
          color: titleTwoColor,
        }}
        className="text-[#E92C2C] font-bold"
      >
        {titleTwo}
      </button>
    </div>
  );
};
