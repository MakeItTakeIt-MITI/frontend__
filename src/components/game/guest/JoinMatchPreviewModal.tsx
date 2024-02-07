interface GameDetailProp {
  gameDetail: {
    data: {
      title: string;
      court: {
        address: string;
        address_detail: string;
        startdate: string;
        starttime: string;
      };
    };
  };
  handleCloseModal: () => void;
}

export const JoinMatchPreviewModal = ({
  gameDetail,
  handleCloseModal,
}: GameDetailProp) => {
  return (
    <div className=" tablet:px-[16rem]  z-[99] fixed top-0 bottom-0 right-0 left-0 w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.6)] ">
      <div className="z-[9998] flex flex-col gap-2 bg-white h-[380px] w-full mx-[32px]  rounded-lg">
        <h4 className="text-[#222] font-bold p-4 tablet:text-[20px]">
          예약내역 확인
        </h4>
        <hr />
        <div className="flex flex-col gap-2 p-4 mobile:text-[14px] tablet:text-[16px]">
          <div>
            <p className="text-[#333] font-bold">{gameDetail?.data.title}</p>
            <p>
              {gameDetail?.data.court.address}{" "}
              {gameDetail?.data.court.address_detail}
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="text-[#666]">매치 시작</p>
              <p className="font-bold">
                {" "}
                {gameDetail?.data.startdate}{" "}
                {gameDetail?.data.starttime.slice(0, 5)}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-[#666]">매치 시작</p>
              <p className="font-bold">
                {" "}
                {gameDetail?.data.enddate}{" "}
                {gameDetail?.data.endtime.slice(0, 5)}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="text-[#666]">예금주</p>
              <p className="font-bold">
                {gameDetail?.data.account_bank}{" "}
                {gameDetail?.data.account_holder}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-[#666]">계좌번호</p>
              <p className="font-bold">{gameDetail?.data.account_number}</p>
              <button>복사하기</button>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="text-[#666]">총 금액</p>
            <p className="font-bold">
              {" "}
              {gameDetail?.data.fee.toLocaleString("ko-KR", {
                style: "currency",
                currency: "KRW",
              })}
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-center text-[14px]">
          <button
            type="button"
            onClick={handleCloseModal}
            className="p-4 bg-[#f7f7f7] rounded-lg"
          >
            목록으로 돌아가기
          </button>
          <button
            type="submit"
            className="p-4 bg-[#4065F6] text-white  rounded-lg"
          >
            확인 후 다음으로
          </button>
        </div>
      </div>
    </div>
  );
};
