import courtbg from "../assets/court.svg";
import markerSvg from "../assets/Map_Pin.svg";
import phoneSvg from "../assets/Phone.svg";
import peopleSvg from "../assets/people.svg";
export const GameInfoPage = () => {
  return (
    <div className="mobile:pt-[2rem] ">
      <div>
        <img src={courtbg} alt="basketball court" className="mobile:w-full" />
        <div className="mobile:px-[16px] mobile:py-[18px]">
          <span className="mobile:text-[11px] text-[#4065F6] bg-[#C1e1ff] p-[3px] rounded-sm font-[500]">
            2명 모집
          </span>
          <p className="font-bold text-[#222]">
            수원 매탄 공원 4 vs 4 (주차 12자리)
          </p>
          <p className="text-[#999] text-[14px] ">2023. 11. 15 15:30~ 18:00</p>
          <div className="my-[16px] text-[14px] text-[#444]">
            <div className="flex gap-1">
              <img src={markerSvg} alt="pin icon" />
              <p>경기도 수원시 매탄로 23 -1</p>
            </div>
            <div className="flex gap-1">
              <img src={phoneSvg} alt="phone icon" />
              <p>010-5253-3808</p>
            </div>
            <div className="flex gap-1">
              <img src={peopleSvg} alt="peoples icon" />
              <p>총 8명 중 2명 모집</p>
            </div>
          </div>
          <p className="text-[#4065F6] font-bold text-[16px]">₩23,000</p>
        </div>
      </div>
      <hr className="h-[8px] w-full bg-gray-200" />
      <div className="mobile:px-[16px] mobile:py-[18px]"></div>
    </div>
  );
};
