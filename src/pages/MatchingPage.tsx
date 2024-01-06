import React from "react";
import left_arrow from "../assets/Chevron_Left.png";
import court from "../assets/small-basketball-court.svg";

export const MatchingPage = () => {
  return (
    <div>
      <div className="py-[10px] relative">
        <img src={left_arrow} alt="left arrow" className="absolute px-[13px]" />
        <h4 className="text-center font-bold">매치 참가</h4>
      </div>
      <hr />
      <div className="p-[16px] flex gap-4 items-center">
        <img src={court} alt="basketball court" className="rounded-xl w-[]" />
        <div>
          <span className="mobile:text-[11px] tablet:text-[14px] text-[#4065F6] bg-[#C1e1ff] p-[3px] rounded-sm font-[500]">
            2명 모집
          </span>{" "}
          <p className="font-bold text-[#222] tablet:text-[20px]">
            수원 매탄 공원 4 vs 4 (주차 12자리)
          </p>{" "}
          <p className="text-[#999] mobile:text-[14px] tablet:text-[16px] ">
            2023. 11. 15 15:30~ 18:00
          </p>
        </div>
      </div>
      <hr />
      <div className="p-[16px]">
        <form className="flex flex-col gap-4">
          <h4>게스트 정보</h4>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#969696]">
              성함
            </label>
            <input
              type="text"
              placeholder="입금자 명과 일치하는 이름을 기입해주세요."
              className="p-[16px] bg-[#f7f7f7] "
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="" className="text-[#969696]">
              대표 연락처
            </label>
            <input
              type="text"
              placeholder="휴대폰 번호를 입력해주세요."
              className="p-[16px] bg-[#f7f7f7]  "
            />
            <button className="absolute right-0">인증하기</button>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#969696]">
              신장
            </label>
            <input
              type="text"
              placeholder="신장"
              className="p-[16px] bg-[#f7f7f7] "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#969696]">
              참여자 수
            </label>
            <input
              type="text"
              placeholder="1명."
              className="p-[16px] bg-[#f7f7f7] "
            />
          </div>
        </form>
      </div>
    </div>
  );
};
