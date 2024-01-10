import { useForm } from "react-hook-form";
import { GameHostField } from "../auth/GameHostForm";

export const StepTwo = () => {
  const { register } = useForm<GameHostField>();

  return (
    <>
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
    </>
  );
};
