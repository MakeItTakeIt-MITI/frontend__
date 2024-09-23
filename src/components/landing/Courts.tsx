import courts from "../../assets/v11/landing-court.png";
import courts_detail from "../../assets/v11/court-detail-landing.png";
import courts_list from "../../assets/v11/courts-list-landing.png";

const Courts = () => {
  return (
    <div className="w-full h-[800px] bg-secondary-black flex">
      <div className="flex items-center justify-end w-full">
        <div className="space-y-3">
          <h1 className="text-primary-teal font-bold text-[18px]">
            경기장 조회
          </h1>
          <h2 className="text-white text-[52px] font-bold">
            우리 동네 농구 핫플레이스 <br />
            지금 찾아보세요!
          </h2>
          <p className="text-[#E5E5E5] text-xl font-[400]">
            우리 동네의 숨겨진 농구 경기장과 게스트를 모집 중인 경기를 <br />한
            번에 조회하실 수 있습니다
          </p>
          <button
            type="button"
            className="w-[180px] h-[54px] bg-[#D4D4D4] text-[#262626] text-[18px] font-bold rounded-[14.286px]"
          >
            경기장 보러 가기
          </button>
        </div>
      </div>
      <img src={courts} alt="courts landing" className="-pr-[200px]" />
      {/* <img src={courts_list} alt="courts landing" className="" /> */}
    </div>
  );
};

export default Courts;
