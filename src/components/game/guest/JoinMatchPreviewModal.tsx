import { Link, useParams } from "react-router-dom";
import { useGetGameDetailQuery } from "../../../hooks/useGetGameDetailQuery";
import closeButton from "../../../assets/x_button.svg";

interface JoinMatchModalProp {
  handleCloseModal: () => void;
  isError: boolean;
  error: {
    response: { data: { data: { detail: string | null } } };
    message: string | null;
  };
}

export const JoinMatchPreviewModal = ({
  handleCloseModal,
  isError,
  error,
}: JoinMatchModalProp) => {
  const { id } = useParams();
  const gameIdParam = Number(id);
  const { data: gameDetail } = useGetGameDetailQuery(gameIdParam);

  return (
    <div className=" w-full laptop:px-[13rem] tablet:px-[2rem]  z-[99] fixed top-0 bottom-0 right-0 left-0 h-screen flex items-center justify-center bg-[rgba(0,0,0,0.6)] ">
      <div className="z-[9998] flex flex-col gap-2 bg-white px-4 py-6 w-full  rounded-lg">
        <div className="flex justify-between">
          <h4 className="text-[#222] font-bold p-4 tablet:text-[20px]">
            예약내역 확인
          </h4>
          <button className="w-6" onClick={handleCloseModal}>
            <img src={closeButton} alt="close button" />
          </button>
        </div>
        {isError && (
          <div>
            <h2 className=" text-center text-red-500">{error.message} </h2>

            <h2 className=" text-center text-red-500">
              {error.response.data.data.detail}
            </h2>
          </div>
        )}
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
          <Link to="/" className="p-4 bg-[#f7f7f7] rounded-lg">
            목록으로 돌아가기
          </Link>
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
