import { useState } from "react";
import { useForm } from "react-hook-form";
import { StepOne } from "../steps/StepOne";
import { StepTwo } from "../steps/StepTwo";

export interface GameHostField {
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
  const { handleSubmit } = useForm<GameHostField>();
  const [step, setStep] = useState(1);

  const onSubmit = (data: GameHostField) => {
    console.log(data);
  };

  const handleNextStep = () => setStep(step + 1);

  return (
    <form
      className="flex flex-col gap-4 justify-between w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      <button
        onClick={handleNextStep}
        className=" w-full h-[58px] bg-[#4065F6] rounded-[8px] text-white"
      >
        다음으로
      </button>
    </form>
  );
};
