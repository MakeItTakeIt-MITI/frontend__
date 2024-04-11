import { useState } from "react";
import left_arrow from "../assets/Chevron_Left.png";
import court from "../assets/small-basketball-court.svg";
import { Link, useParams } from "react-router-dom";
import { useGetGameDetailQuery } from "../hooks/games/useGetGameDetailQuery";
import { useForm } from "react-hook-form";
import { JoinMatchPreviewModal } from "../components/game/guest/JoinMatchPreviewModal";
import { JoinGamePriceDetail } from "../components/game/JoinGamePriceDetail";
import { useParticipateGameMutation } from "../hooks/games/useParticipateGameMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useJoinGameSchema } from "../modals/useJoinGameSchema";
import alertFail from "../assets/alert_failure.svg";

export interface JoinGameField {
  player_account_bank: string;
  player_account_holder: string;
  player_account_number: string;
}

export const UserJoinMatchPage = () => {
  const [modal, setModal] = useState(false);

  const { id } = useParams();
  const gameIdParam = Number(id);

  const { data: gameDetail } = useGetGameDetailQuery(gameIdParam);
  const { mutate: mutateJoinGame, isError } =
    useParticipateGameMutation(gameIdParam);

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<JoinGameField>({
    resolver: zodResolver(useJoinGameSchema),
  });

  const onSubmit = (data: JoinGameField) => {
    mutateJoinGame(data);
  };

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };
  const goBackPage = () => window.history.back();

  const handleShowModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className=" mobile:w-full tablet:w-[560px] tablet:mb-0 mx-auto mobile:mb-[4rem] py-3">
      <div className="mobile:block tablet:hidden py-[10px] relative">
        <button onClick={goBackPage} className="hover:cursor-pointer">
          <img
            src={left_arrow}
            alt="left arrow"
            className="absolute px-[13px]"
          />
        </button>
        <h4 className="text-center font-bold">매치 참가</h4>
      </div>
      <hr className="mobile:block tablet:hidden" />
      <div className="p-[16px] flex gap-4 items-center">
        <img src={court} alt="basketball court" className="rounded-xl w-[]" />
        <div>
          <span className="mobile:text-[11px] tablet:text-[14px] text-[#4065F6] bg-[#C1e1ff] p-[3px] rounded-sm font-[500]">
            {`${
              gameDetail?.data.max_invitation - gameDetail?.data.min_invitation
            }`}
            명 모집
          </span>{" "}
          <p className="font-bold text-[#222] tablet:text-[20px]">
            {gameDetail?.data.title}
          </p>{" "}
          <p className="text-[#999] mobile:text-[14px] tablet:text-[16px] ">
            {gameDetail?.data.startdate}{" "}
            {gameDetail?.data.starttime.slice(0, 5)} ~{" "}
            {gameDetail?.data.endtime.slice(0, 5)}
          </p>
        </div>
      </div>
      <hr />
      <div className="p-[16px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 px-[13px]"
        >
          <JoinGamePriceDetail fee={gameDetail?.data.fee} />
          <hr className="h-[8px] w-full bg-gray-200" />
          <div className="p-[16px] flex flex-col gap-4">
            <h4 className="font-bold">결제 수단 - 계좌 이체</h4>
            <h4 className="font-bold">호스트 정보</h4>
            <div className="flex mobile:justify-between gap-8 w-full">
              <div className="w-full flex flex-col rounded-lg">
                <p className="text-[#969696] ">예금 은행</p>
                <p className="w-full p-[16px] bg-[#f7f7f7]  h-[50px] text-center font-bold text-[#444444]">
                  {gameDetail?.data.account_bank}
                </p>
              </div>
              <div className="w-full flex flex-col rounded-lg ">
                <p className="text-[#969696]">예금주</p>
                <p className="w-full p-[16px] bg-[#f7f7f7]  h-[50px] text-center font-bold text-[#444444]">
                  {gameDetail?.data.account_holder}
                </p>
              </div>
            </div>

            <div className="relative flex flex-col rounded-lg ">
              <p className="text-[#969696]">계좌번호</p>
              <div className="relative">
                <p className="p-4  bg-[#f7f7f7] w-full h-[50px] mobile:pr-20 text-center  font-bold text-[#444444]">
                  {gameDetail?.data.account_number}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    handleCopyClipBoard(gameDetail?.data.account_number)
                  }
                  className="absolute  top-0 right-0 bottom-0 bg-[#4065F6] text-white my-2 mx-2  text-sm py-2 px-5 rounded-lg "
                >
                  복사하기
                </button>
              </div>
            </div>
            <h4 className="font-bold">게스트 정보</h4>
            <div className="flex flex-col">
              <div className="flex rounded-lg">
                <p className="text-[#969696] w-[68px]">환불 계좌</p>
              </div>
              <div className="flex gap-2 rounded-lg">
                <div className="p-4.5 text-[#222] font-[500] flex  ">
                  <input
                    {...register("player_account_bank", { required: true })}
                    type="text"
                    placeholder="은행"
                    className="p-[16px] bg-[#f7f7f7] text-[#969696] text-[14px]  w-full h-[50px]  text-center "
                  />
                  {/* <p>은행</p>
                  <img src={downArrow} alt="" /> */}
                </div>
                <input
                  placeholder="'-'을 제외한 환불 받으실 계좌 번호를 입력해주세요."
                  {...register("player_account_number", { required: true })}
                  className="p-[16px] bg-[#f7f7f7] text-[#969696] text-[14px]  w-full h-[50px]  "
                />
              </div>
              {errors.player_account_number && (
                <div className="flex items-center gap-1 pt-2">
                  <img src={alertFail} alt="alert icon" />
                  <p className="text-[#E92C2C] text-[13px] font-[400]">
                    {errors.player_account_number.message}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-[#969696]">예금주</p>
              <div className="relative ">
                <input
                  {...register("player_account_holder", { required: true })}
                  placeholder="환불받으실 계좌의 예금주를 기입해주세요."
                  className="p-[16px] bg-[#f7f7f7] text-[#969696] text-[14px]  w-full h-[50px] "
                />
                {errors.player_account_holder && (
                  <div className="flex items-center gap-1 pt-2">
                    <img src={alertFail} alt="alert icon" />
                    <p className="text-[#E92C2C] text-[13px] font-[400]">
                      {errors.player_account_holder.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <hr className="h-[8px] w-full bg-gray-200" />

          <button
            type="button"
            onClick={handleShowModal}
            style={{
              backgroundColor: !formState.isValid ? "#969696" : "#4065F6",
            }}
            disabled={!errors}
            className="h-[48px]  w-full text-center text-white text-[14px]"
          >
            매치 참여하기
          </button>

          {isError && (
            <div className="text-center text-red-500">
              <p>참여할 수 없는 경기 입니다.</p>

              <Link to="/" className="underline">
                돌아가기
              </Link>
            </div>
          )}

          {modal && (
            <JoinMatchPreviewModal
              isError={isError}
              handleCloseModal={handleCloseModal}
            />
          )}
        </form>
      </div>
    </div>
  );
};
