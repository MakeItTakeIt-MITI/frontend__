import { useState } from "react";
import { useForm } from "react-hook-form";

export interface GameHostField {
  address: string;
  address_detail: string;
  title: string;
  fee: number;
  min_players: number;
  max_players: number;
  start_date: string;
  start_time: number;
  end_date: string;
  end_time: number;
  announcement: string;
}

export const GameHostForm = () => {
  const { handleSubmit, register } = useForm<GameHostField>();

  const onSubmit = (data: GameHostField) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-4 justify-between w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h4 className="text-[24px] font-bold">경기장 주소를 입력해주세요. </h4>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="address" className="text-[12px] text-[#1c1c1c]">
          경기장 주소
        </label>
        <div className="flex">
          <input
            type="text"
            id="address"
            readOnly
            className=" h-[58px] p-4 bg-[#F7F7F7] w-full"
            placeholder="경기장 주소를 입력해주세요."
            {...register("address", {
              required: true,
            })}
          />
          <button className="w-[70px] bg-[#4065F6] text-white">검색</button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="address_detail" className="text-[12px] text-[#1c1c1c]">
          상세 주소
        </label>
        <input
          type="text"
          id="address_detail"
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          placeholder="상세 주소를 입력해주세요."
          {...register("address_detail", {
            required: true,
          })}
        />
      </div>

      <div>
        <h4 className="text-[24px] font-bold">경기 일정을 입력해주세요.</h4>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="start_date" className="text-[12px] text-[#1c1c1c]">
          경기 시작 날짜
        </label>

        <input
          type="date"
          id="start_date"
          className=" h-[58px] p-4 bg-[#F7F7F7] w-full"
          {...register("start_date", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="start_time" className="text-[12px] text-[#1c1c1c]">
          경기 시작 시간
        </label>
        <input
          type="time"
          id="start_time"
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          step={900}
          {...register("start_time", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="end_date" className="text-[12px] text-[#1c1c1c]">
          경기 종료 날짜
        </label>

        <input
          type="date"
          id="end_date"
          className=" h-[58px] p-4 bg-[#F7F7F7] w-full"
          {...register("end_date", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="end_time" className="text-[12px] text-[#1c1c1c]">
          경기 종료 시간
        </label>
        <input
          type="time"
          id="end_time"
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          step={900}
          {...register("end_time", {
            required: true,
          })}
        />
      </div>

      <div>
        <h4 className="text-[24px] font-bold">경기 정보를 입력해주세요.</h4>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-[12px] text-[#1c1c1c]">
          제목
        </label>

        <input
          type="text"
          id="title"
          placeholder="경기 제목을 입력해주세요."
          className=" h-[58px] p-4 bg-[#F7F7F7] w-full"
          {...register("title", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="min_players" className="text-[12px] text-[#1c1c1c]">
          최소 인원 모집
        </label>
        <input
          type="number"
          id="min_players"
          placeholder="경기 최소 인원을 입력해주세요."
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          {...register("min_players", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="max_players" className="text-[12px] text-[#1c1c1c]">
          최대 인원 모집
        </label>

        <input
          type="number"
          id="max_players"
          placeholder="경기 최대 인원을 입력해주세요."
          className=" h-[58px] p-4 bg-[#F7F7F7] w-full"
          {...register("max_players", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="fee" className="text-[12px] text-[#1c1c1c]">
          참여비
        </label>
        <input
          type="number"
          id="fee"
          placeholder="경기 참여비를 입력해주세요."
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          {...register("fee", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="announcement" className="text-[12px] text-[#1c1c1c]">
          공지사항
        </label>
        <input
          type="textbox"
          id="announcement"
          placeholder="경기 공지사항을 입력해주세요."
          className=" h-20 p-4  bg-[#F7F7F7] rounded-lg"
          {...register("announcement", {
            required: true,
          })}
        />
      </div>

      <button className=" w-full h-[58px] bg-[#4065F6] rounded-[8px] text-white">
        경기 생성하기
      </button>
    </form>
  );
};
