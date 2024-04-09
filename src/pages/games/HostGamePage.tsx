import { GameHostForm } from "../../components/forms/GameHostForm";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";

export const HostGamePage = () => {
  return (
    <section className="laptop:my-4 mobile:my-0 h-full ">
      <NavigateToPrevContainer children="" />

      <hr className="mobile:block tablet:hidden w-full " />
      <div className="relative laptop:w-[500px]  laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col laptop:justify-center gap-10 mobile:justify-between">
        <div className="flex flex-col gap-6">
          <h4 className="font-bold  text-lg">경기 정보</h4>
          <GameHostForm />
        </div>
      </div>
    </section>
  );
};
