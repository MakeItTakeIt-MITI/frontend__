import { useState } from "react";
import left_arrow from "../assets/Chevron_Left.png";
import court from "../assets/small-basketball-court.svg";
import { AdvertisementBanner } from "../components/AdvertisementBanner";

export const MatchingPage = () => {
  const [modal, setModal] = useState(false);

  const handleShowModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const goBackPage = () => window.history.back();

  return (
    <div>hello</div>
    // <div className="">
    //   {modal && (
    //     <div className="z-9 fixed top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] ">
    //       <div className="z-[9998] flex flex-col gap-2 bg-white h-[380px] w-full mx-[32px]  rounded-lg">
    //         <h4 className="text-[#222] font-bold p-4">예약내역 확인</h4>
    //         <hr />
    //         <div className="flex flex-col gap-2 p-4 text-[14px]">
    //           <div>
    //             <p>수원 매탄 공원 4vs 4 (주차 12자리)</p>
    //             <p>경기도 수원시 매탄로 23-1</p>
    //           </div>
    //           <div className="flex flex-col">
    //             <div className="flex gap-2">
    //               <p className="text-[#666]">매치 시작</p>
    //               <p className="font-bold">11월 15일 (일) 15:30</p>
    //             </div>
    //             <div className="flex gap-2">
    //               <p className="text-[#666]">매치 시작</p>
    //               <p className="font-bold">11월 15일 (일) 15:30</p>
    //             </div>
    //           </div>
    //           <div className="flex flex-col">
    //             <div className="flex gap-2">
    //               <p className="text-[#666]">예금주</p>
    //               <p className="font-bold">우리은행 박홍준</p>
    //             </div>
    //             <div className="flex gap-2">
    //               <p className="text-[#666]">계좌번호</p>
    //               <p className="font-bold">1234-5678-9012</p>
    //             </div>
    //           </div>
    //           <div className="flex gap-2">
    //             <p className="text-[#666]">총 금액</p>
    //             <p className="font-bold">₩28,000</p>
    //           </div>
    //         </div>
    //         <div className="flex gap-4 justify-center text-[14px]">
    //           <button
    //             onClick={handleCloseModal}
    //             className="p-4 bg-[#f7f7f7] rounded-lg"
    //           >
    //             목록으로 돌아가기
    //           </button>
    //           <button className="p-4 bg-[#4065F6] text-white  rounded-lg">
    //             확인 후 다음으로
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    //   <div className="py-[10px] relative">
    //     <button onClick={goBackPage} className="hover:cursor-pointer">
    //       <img
    //         src={left_arrow}
    //         alt="left arrow"
    //         className="absolute px-[13px]"
    //       />
    //     </button>
    //     <h4 className="text-center font-bold">매치 참가</h4>
    //   </div>
    //   <hr />
    //   <div className="p-[16px] flex gap-4 items-center">
    //     <img src={court} alt="basketball court" className="rounded-xl w-[]" />
    //     <div>
    //       <span className="mobile:text-[11px] tablet:text-[14px] text-[#4065F6] bg-[#C1e1ff] p-[3px] rounded-sm font-[500]">
    //         2명 모집
    //       </span>{" "}
    //       <p className="font-bold text-[#222] tablet:text-[20px]">
    //         수원 매탄 공원 4 vs 4 (주차 12자리)
    //       </p>{" "}
    //       <p className="text-[#999] mobile:text-[14px] tablet:text-[16px] ">
    //         2023. 11. 15 15:30~ 18:00
    //       </p>
    //     </div>
    //   </div>
    //   <hr />
    //   <div className="p-[16px]">
    //     <form className="flex flex-col gap-4 px-[13px]">
    //       <h4 className="font-bold">게스트 정보</h4>
    //       <div className="flex flex-col gap-2">
    //         <label htmlFor="" className="text-[#969696]">
    //           성함
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="입금자 명과 일치하는 이름을 기입해주세요."
    //           className="p-[16px] text-[14px] bg-[#f7f7f7] "
    //         />
    //       </div>
    //       <div className="flex flex-col gap-2 ">
    //         <label htmlFor="" className="text-[#969696]">
    //           대표 연락처
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="휴대폰 번호를 입력해주세요."
    //           className="p-[16px] bg-[#f7f7f7] text-[14px]  "
    //         />
    //         <button className=" right-0">인증하기</button>
    //       </div>
    //     </form>
    //   </div>
    //   <hr className="h-[8px] w-full bg-gray-200" />
    //   <div className="p-[16px] flex flex-col gap-4">
    //     <h4 className="font-bold">보증금 정보</h4>
    //     <div className="flex justify-between text-[14px]">
    //       <p className="text-[#666] ">경기 참여비 (보증금)</p>
    //       <p>₩4,000</p>
    //     </div>
    //     <div className="flex justify-between text-[14px]">
    //       <p className="text-[#666] ">MITI 수수료</p>
    //       <p>₩0</p>
    //     </div>
    //     <hr className="max-w-[90rem] w-full mx-auto" />
    //     <div className="flex justify-between text-[14px]">
    //       <p className="text-[#666] font-bold text-[16px]">총 결제 금액</p>
    //       <p className="font-bold text-red-500 text-[16px]">₩4,000</p>
    //     </div>
    //   </div>
    //   <hr className="h-[8px] w-full bg-gray-200" />
    //   <div className="p-[16px] flex flex-col gap-4">
    //     <h4 className="font-bold">결제 수단 - 계좌 이체</h4>
    //     <div className="flex justify-between">
    //       <div className="flex flex-col rounded-lg">
    //         <p className="text-[#969696] ">예금 은행</p>
    //         <p className="p-[16px] bg-[#f7f7f7] w-[163px] h-[50px] text-center ">
    //           우리은행
    //         </p>
    //       </div>
    //       <div className="flex flex-col rounded-lg">
    //         <p className="text-[#969696]">예금주</p>
    //         <p className="p-[16px] bg-[#f7f7f7] w-[163px] h-[50px] text-center ">
    //           이지원
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col rounded-lg ">
    //       <p className="text-[#969696]">계좌번호</p>
    //       <p className="p-[16px] bg-[#f7f7f7] w-full h-[50px] text-center ">
    //         3333-09-834-6810
    //       </p>
    //       <button className="  right-0 ">복사하기</button>
    //     </div>
    //     <div className="flex flex-col">
    //       <div className="flex rounded-lg">
    //         <p className="text-[#969696] w-[68px]">환불 계화</p>
    //       </div>
    //       <div className="flex gap-2 rounded-lg">
    //         <p className="p-[16px] bg-[#f7f7f7] w-[68px] h-[50px] text-center ">
    //           은행
    //         </p>
    //         <p className="p-[16px] bg-[#f7f7f7] text-[#969696] text-[14px]  w-full h-[50px] text-center ">
    //           환불 받으실 계좌 번호를 입력해주세요.
    //         </p>
    //       </div>
    //       <div className="flex justify-end gap-2 mt-2 w-full ">
    //         <input type="checkbox" name="" id="" className="w-[24px]" />
    //         <span className="text-[14px] text-[#969696] ">
    //           예약자명과 예금주 동일
    //         </span>
    //       </div>
    //     </div>
    //     <div className="flex flex-col rounded-lg ">
    //       <p className="text-[#969696]">예금주</p>
    //       <p className="p-[16px] bg-[#f7f7f7] text-[14px] text-[#969696] w-full h-[50px] text-center ">
    //         환불받으실 계좌의 예금주를 기입해주세요.
    //       </p>
    //       <button className="  right-0 ">복사하기</button>
    //     </div>
    //   </div>
    //   <hr className="h-[8px] w-full bg-gray-200" />

    //   <div className="flex flex-col gap-4 p-4">
    //     <h4 className="font-bold">유의사항</h4>
    //     <p className="text-[#969696] text-[14px]">
    //       옥정 호수 공원 농구 코트에서 운동하다가 날씨가 추워져서 체육관을 잡고
    //       운영하고있습니다. 나이, 키, 성별 상관 없습니다. 5대 5 잘 모르시는
    //       분들도 환영합니다. 즐겁게 농구하는 즐농팀입니다. 과격하고 승리에
    //       집착하시는 분들은 사양합니다.
    //     </p>
    //     <button
    //       onClick={handleShowModal}
    //       className="h-[48px] w-full text-center bg-[#E8e8e8] text-[#969696] text-[14px]"
    //     >
    //       매치 참여하기
    //     </button>
    //   </div>
    //   <hr className="h-[8px] w-full bg-gray-200" />
    //   <AdvertisementBanner />
    // </div>
  );
};
