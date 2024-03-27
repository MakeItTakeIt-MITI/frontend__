import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";

export const FAQPage = () => {
  return (
    <section className="mt-4">
      <NavigateToPrevContainer children="고객센터" />
      <div className="laptop:w-[600px] mobile:w-full mx-auto mobile:px-4 tablet:px-0">
        <h1 className="mobile:hidden tablet:block text-center font-bold text-2xl">
          FAQ
        </h1>

        <div className="py-5 flex flex-col gap-4">
          <button className="h-[48px] w-full border border-gray-400 rounded-lg font-bold">
            문의하기
          </button>
          <div>
            <h2>나의 문의 내역</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
