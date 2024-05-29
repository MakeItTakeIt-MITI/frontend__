import markerSvg from "../assets/Map_Pin.svg";
import peopleSvg from "../assets/people.svg";
export const GameDetailBox = () => {
  return (
    <div className="w-[453px] p-3 space-y-3 border border-gray-200  rounded-lg ">
      <div className="w-[49px] h-[15px] text-center text-blue-700 text-[10px] font-semibold leading-[13px]">
        부분 정산
      </div>
      <div>
        {" "}
        <p className="text-neutral-800 text-base font-bold">
          [5:5 풀코트]더모스트 바스켓볼 3파전 픽업게임
        </p>
        <p className="text-neutral-400 text-sm font-medium">
          2023. 12 .15 15:30 ~ 18:00
        </p>
      </div>
      <div>
        <div className="flex items-center gap-1">
          <img src={markerSvg} alt="marker" />
          <p className="text-neutral-700 text-sm font-medium">
            경기도 수원시 매탄로 23 -1
          </p>
        </div>
        <div className="flex items-center gap-1">
          <img src={peopleSvg} alt="people icon" />
          <p className="text-neutral-700 text-sm font-medium">
            총 18명중 15명 모집 완료
          </p>
        </div>
      </div>
      <div className=" text-blue-600 text-base font-bold leading-[18px]">
        ₩ 10,000
      </div>
    </div>
  );
};
