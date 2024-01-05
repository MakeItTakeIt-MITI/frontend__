import courtbg from "../assets/court.svg";
import markerSvg from "../assets/Map_Pin.svg";
import phoneSvg from "../assets/Phone.svg";
import peopleSvg from "../assets/people.svg";
import badge from "../assets/authentication-badge.svg";
import reviewStar from "../assets/star-review.png";
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
      <div className="flex flex-col gap-2 mobile:px-[16px] mobile:py-[18px] ">
        <p className="text-[#222] font-bold">호스트 소개</p>
        <div className="flex gap-2">
          <div className="rounded-[50%] bg-gray-300 w-[40px] h-[40px]"></div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <p className="text-[#444] font-bold">어니언수제어묵 님</p>
              <img src={badge} alt="user verified badge" />
            </div>
            <div className="flex gap-0.5 w-[250px] text-[14px] text-[#222]">
              <img
                src={reviewStar}
                alt="review star"
                className="w-[16px] h-[16px]"
              />
              <img
                src={reviewStar}
                alt="review star"
                className="w-[16px] h-[16px]"
              />
              <img
                src={reviewStar}
                alt="review star"
                className="w-[16px] h-[16px]"
              />
              <img
                src={reviewStar}
                alt="review star"
                className="w-[16px] h-[16px]"
              />
              <img
                src={reviewStar}
                alt="review star"
                className="w-[16px] h-[16px]"
              />

              <p className="ml-[4px]">5.0</p>
              <p className="ml-[8px] underline">후기 7</p>
            </div>
          </div>
        </div>
        <p className="text-[#666]">
          옥정 호수 공원 농구 코트에서 운동하다가 날씨가 추워져서 체육관을 잡고
          운영하고있습니다. 나이, 키, 성별 상관 없습니다. 5대 5 잘 모르시는
          분들도 환영합니다. 즐겁게 농구하는 즐농팀입니다. 과격하고 승리에
          집착하시는 분들은 사양합니다.
        </p>
      </div>
      <hr className="h-[8px] w-full bg-gray-200" />
    </div>
  );
};
