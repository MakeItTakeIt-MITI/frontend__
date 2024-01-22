import { useForm } from "react-hook-form";
import { DaumAddressSearcher } from "../address/DaumAddressSearcher";

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
      className="flex flex-col gap-4  justify-between w-full text-[14px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4 className="font-bold">경기 정보</h4>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className=" text-[#999]">
          경기 제목
        </label>

        <input
          type="text"
          id="title"
          placeholder="ex.) 수원 매탄 공원 4 vs 4 (주차 12자리)"
          className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
          {...register("title", {
            required: true,
          })}
        />
      </div>
      <DaumAddressSearcher register={register} />

      <div className="flex flex-col gap-2">
        <label htmlFor="address_detail" className=" text-[#999]">
          상세 주소
        </label>
        <input
          type="text"
          id="address_detail"
          className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] rounded-lg"
          placeholder="상세 주소를 입력해주세요."
          {...register("address_detail", {
            required: true,
          })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="start_date" className=" text-[#999]">
          경기 시작 날짜
        </label>

        <input
          type="date"
          id="start_date"
          className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] w-full"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="start_time" className=" text-[#999]">
          경기 시작 시간
        </label>
        <input
          type="time"
          id="start_time"
          className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] rounded-lg"
          step={900}
          {...register("start_time", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="end_date" className=" text-[#999]">
          경기 종료 날짜
        </label>

        <input
          type="date"
          id="end_date"
          className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] w-full"
          {...register("end_date", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="end_time" className=" text-[#999]">
          경기 종료 시간
        </label>
        <input
          type="time"
          id="end_time"
          className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] rounded-lg"
          step={900}
          {...register("end_time", {
            required: true,
          })}
        />
      </div>

      <div className="flex gap-4 items-center justify-beween">
        <div className="flex flex-col gap-2">
          <label htmlFor="min_players" className=" text-[#999]">
            총 모집 인원
          </label>
          <input
            type="number"
            id="max_players"
            placeholder="00명"
            className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] w-full text-center font-bold"
            {...register("max_players", {
              required: true,
            })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="max_players" className=" text-[#999]">
            최소 모집 인원
          </label>

          <input
            type="number"
            id="min_players"
            placeholder="00명"
            className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] w-full rounded-lg text-center font-bold"
            {...register("min_players", {
              required: true,
            })}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="announcement" className=" text-[#999]">
          추가 정보
        </label>
        <input
          type="text"
          id="announcement"
          placeholder=""
          className="w-full h-[68px]  text-[14px] px-4 py-3 bg-[#F7F7F7] rounded-lg "
          {...register("announcement", {
            required: true,
          })}
        />
      </div>

      <hr className="h-[8px] w-full bg-gray-200" />

      <h4 className="font-bold">경기 정보</h4>
      {/* <div className="flex w-full px-0 flex-col gap-2">
        <label htmlFor="fee" className=" text-[#999]">
          참여비
        </label>
        <input
          type="number"
          id="fee"
          placeholder="경기 참여비를 입력해주세요."
          className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] rounded-lg"
          {...register("fee", {
            required: true,
          })}
        />
      </div> */}

      <div className="flex justify-between">
        <div className="flex flex-col rounded-lg">
          <p className="text-[#969696] ">예금 은행</p>
          <p className="p-[16px] bg-[#f7f7f7] w-[163px] h-[50px] text-center ">
            우리은행
          </p>
        </div>
        <div className="flex flex-col rounded-lg">
          <p className="text-[#969696]">예금주</p>
          <p className="p-[16px] bg-[#f7f7f7] w-[163px] h-[50px] text-center ">
            이지원
          </p>
        </div>
      </div>

      <button className=" w-full h-[50px] bg-[#4065F6] rounded-[8px] text-white">
        경기 생성하기
      </button>
    </form>
  );
};
