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
        <label htmlFor="address" className="text-[12px] text-[#1c1c1c]">
          경기 시작
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
    </>
  );
};
