import { useForm } from "react-hook-form";

interface GameHostField {
  address: string;
  address_detail: string;
  title: string;
  fee: number;
  min_players: number;
  max_numbers: number;
  start_date: string;
  start_time: number;
  end_date: string;
  end_time: number;
  announcement: string;
}

export const GameHostForm = () => {
  const { register, handleSubmit } = useForm<GameHostField>();

  const onSubmit = (data: GameHostField) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-6  w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="text" className="text-[12px] text-[#1c1c1c]">
          경기장 주소
        </label>
        <input
          type="text"
          id="text"
          required
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          placeholder="경기장 주소를 입력해주세요."
          {...register("address", {
            required: true,
          })}
        />
      </div>
    </form>
  );
};
