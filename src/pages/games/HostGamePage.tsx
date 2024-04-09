import { GameHostForm } from "../../components/forms/GameHostForm";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";

export const HostGamePage = () => {
  return (
    <section className="laptop:my-4 mobile:my-0 h-full ">
      <NavigateToPrevContainer children="" />

      <hr className="mobile:block tablet:hidden w-full" />
      <div className="flex items-center flex-col px-[16px] py-4">
        <GameHostForm />
      </div>
    </section>
  );
};
