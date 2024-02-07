interface GameDetailProp {
  gameDetail: () => void;
  handleCloseModal: () => void;
}

export const JoinMatchPreviewModal = ({
  gameDetail,
  handleCloseModal,
}: GameDetailProp) => {
  return (
    <div className="mobile:w-full tablet:px-[16rem]  z-9 fixed top-0 bottom-0 right-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] ">
      <div className="z-[9998] flex flex-col gap-2 bg-white h-[380px] w-full mx-[32px]  rounded-lg">
        <h4 className="text-[#222] font-bold p-4">예약내역 확인</h4>
        <hr />
        <div className="flex flex-col gap-2 p-4 text-[14px]">
          <div>
            <p>{gameDetail?.data.title}</p>
            <p>
              {gameDetail?.data.court.address}{" "}
              {gameDetail?.data.court.address_detail}
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="text-[#666]">매치 시작</p>
              <p className="font-bold">11월 15일 (일) 15:30</p>
            </div>
            <div className="flex gap-2">
              <p className="text-[#666]">매치 시작</p>
              <p className="font-bold">11월 15일 (일) 15:30</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="text-[#666]">예금주</p>
              <p className="font-bold">우리은행 박홍준</p>
            </div>
            <div className="flex gap-2">
              <p className="text-[#666]">계좌번호</p>
              <p className="font-bold">1234-5678-9012</p>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="text-[#666]">총 금액</p>
            <p className="font-bold">₩28,000</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center text-[14px]">
          <button
            onClick={handleCloseModal}
            className="p-4 bg-[#f7f7f7] rounded-lg"
          >
            목록으로 돌아가기
          </button>
          <button className="p-4 bg-[#4065F6] text-white  rounded-lg">
            확인 후 다음으로
          </button>
        </div>
      </div>
    </div>
  );
};
