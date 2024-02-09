import { useState } from "react";
import left_arrow from "../assets/Chevron_Left.png";
import court from "../assets/small-basketball-court.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useGetGameDetailQuery } from "../hooks/useGetGameDetailQuery";
import { useForm } from "react-hook-form";
import { JoinMatchPreviewModal } from "../components/game/guest/JoinMatchPreviewModal";
import { JoinGamePriceDetail } from "../components/game/JoinGamePriceDetail";
import { useParticipateGameMutation } from "../hooks/useParticipateGameMutation";
// import downArrow from "../assets/Chevron_Down_MD.svg";

interface JoinGameField {
  player_name: string;
  player_phone: string;
  player_height: string;
  player_account_bank: string;
  player_account_holder: string;
  player_account_number: string;
}

export const UserJoinMatchPage = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const gameIdParam = Number(id);
  const { data: gameDetail } = useGetGameDetailQuery(gameIdParam);
  const { mutate } = useParticipateGameMutation(gameDetail?.data.id);

  const { register, handleSubmit, watch } = useForm<JoinGameField>();
  const bank_holder = watch("player_account_holder");

  const onSubmit = (data: JoinGameField) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/games/join/submitted");
      },
    });
    console.log(data);
  };

  const handleShowModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const goBackPage = () => window.history.back();

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
          <h4 className="font-bold">게스트 정보</h4>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#969696]">
              성함
            </label>
            <input
              type="text"
              {...register("player_name", { required: true })}
              placeholder="입금자 명과 일치하는 이름을 기입해주세요."
              className="p-[16px] mobile:text-[14px] tablet:text-[16px]  bg-[#f7f7f7] "
            />
          </div>
          <div className="relative flex flex-col gap-2 ">
            <label htmlFor="" className="text-[#969696]">
              대표 연락처
            </label>
            <div className="relative">
              <input
                type="text"
                {...register("player_phone", { required: true })}
                placeholder="휴대폰 번호를 입력해주세요."
                className="p-[16px] bg-[#f7f7f7] mobile:text-[14px] tablet:text-[16px]  w-full"
              />
              <button className="absolute top-0 right-0 bottom-0 bg-[#4065F6] text-white my-2 mx-2  text-sm py-2 px-5 rounded-lg ">
                인증하기
              </button>
            </div>
          </div>
          <div className="flex mobile:gap-4 tablet:gap-8">
            <div className="relative flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-[#969696]">
                신장
              </label>
              <input
                type="text"
                {...register("player_height", { required: true })}
                placeholder="cm"
                className="p-[16px] bg-[#f7f7f7] mobile:text-[14px] tablet:text-[16px]  w-full text-center"
              />
            </div>
            <div className="relative flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-[#969696]">
                참여자 수
              </label>
              <p className="p-[16px] text-[#969696] bg-[#f7f7f7] mobile:text-[14px] tablet:text-[16px]  w-full text-center">
                1명
              </p>
            </div>
          </div>
          <hr className="h-[8px] w-full bg-gray-200" />
          <JoinGamePriceDetail gameDetail={gameDetail} />
          <hr className="h-[8px] w-full bg-gray-200" />
          <div className="p-[16px] flex flex-col gap-4">
            <h4 className="font-bold">결제 수단 - 계좌 이체</h4>
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
                <p className="p-[16px] bg-[#f7f7f7] w-full h-[50px] text-center font-bold text-[#444444]">
                  {gameDetail?.data.account_number}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    handleCopyClipBoard(gameDetail?.data.account_number)
                  }
                  className="absolute top-0 right-0 bottom-0 bg-[#4065F6] text-white my-2 mx-2  text-sm py-2 px-5 rounded-lg "
                >
                  복사하기
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex rounded-lg">
                <p className="text-[#969696] w-[68px]">환불 계화</p>
              </div>
              <div className="flex gap-2 rounded-lg">
                <div className="p-4.5 text-[#222] font-[500] flex items-center justify-center text-[14px] bg-[#f7f7f7] w-[80px] h-[50px] text-center ">
                  <input
                    {...register("player_account_bank", { required: true })}
                    type="text"
                    placeholder="은행"
                    className="w-full"
                  />
                  {/* <p>은행</p>
                  <img src={downArrow} alt="" /> */}
                </div>
                <input
                  placeholder="환불 받으실 계좌 번호를 입력해주세요."
                  {...register("player_account_number", { required: true })}
                  className="p-[16px] bg-[#f7f7f7] text-[#969696] text-[14px]  w-full h-[50px]  "
                />
              </div>
              <div className="flex justify-end gap-2 mt-2 w-full ">
                <input
                  type="checkbox"
                  checked={false}
                  name=""
                  id=""
                  className="w-[24px]"
                />
                <span className="text-[14px] text-[#969696] ">
                  예약자명과 예금주 동일
                </span>
              </div>
            </div>
            <div className="flex flex-col rounded-lg ">
              <p className="text-[#969696]">예금주</p>
              <div className="relative">
                <input
                  {...register("player_account_holder", { required: true })}
                  placeholder="환불받으실 계좌의 예금주를 기입해주세요."
                  className="p-[16px] bg-[#f7f7f7] text-[#969696] text-[14px]  w-full h-[50px] "
                />

                <button
                  type="button"
                  onClick={() => handleCopyClipBoard(bank_holder)}
                  className="absolute top-0 right-0 bottom-0 bg-[#4065F6] text-white my-2 mx-2  text-sm py-2 px-5 rounded-lg "
                >
                  복사하기
                </button>
              </div>
            </div>
          </div>
          <hr className="h-[8px] w-full bg-gray-200" />

          <button
            type="button"
            onClick={handleShowModal}
            className="h-[48px]  w-full text-center bg-[#E8e8e8] text-[#969696] text-[14px]"
          >
            매치 참여하기
          </button>

          {modal && (
            <JoinMatchPreviewModal
              gameDetail={gameDetail}
              handleCloseModal={handleCloseModal}
            />
          )}
        </form>
      </div>
    </div>
  );
};
