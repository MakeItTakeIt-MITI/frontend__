import { useForm } from "react-hook-form";
import { GameHostField } from "../auth/GameHostForm";

export const StepThree = () => {
  const { register } = useForm<GameHostField>();

  return (
    <>
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
    </>
  );
};
