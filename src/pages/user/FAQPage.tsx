import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import downArrow from "../../assets/Chevron_Down_MD.svg";

export const FAQPage = () => {
  return (
    <section className="mt-4">
      <NavigateToPrevContainer children="FAQ" />
      <div className="laptop:w-[600px] mobile:w-full mx-auto mobile:px-4 tablet:px-0">
        <h1 className="mobile:hidden tablet:block text-center font-bold text-2xl">
          FAQ
        </h1>
        <div className="flex flex-col gap-4 my-4">
          <div className="w-full h-[50px] border border-gray-300 rounded-lg flex items-center justify-between py-1 px-3">
            <p>MITI 는 어떤 서비스인가요?</p>
            <div>
              <img src={downArrow} alt="down arrow" />
            </div>
          </div>
          <div className="w-full h-[50px] border border-gray-300 rounded-lg flex items-center justify-between py-1 px-3">
            <p>MITI 는 어떤 서비스인가요?</p>
            <div>
              <img src={downArrow} alt="down arrow" />
            </div>
          </div>
          <div className="w-full h-[50px] border border-gray-300 rounded-lg flex items-center justify-between py-1 px-3">
            <p>MITI 는 어떤 서비스인가요?</p>
            <div>
              <img src={downArrow} alt="down arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
