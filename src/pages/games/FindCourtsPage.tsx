import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";

export const FindCourtsPage = () => {
  return (
    <section className="laptop:my-[69px] mobile:my-0">
      <NavigateToPrevContainer children="경기장 조회" />
      <div className=" laptop:w-[500px] h-[49px] mx-auto">
        <h1 className="font-bold text-[26px]">경기장 조회</h1>
      </div>
      <div
        style={{ scrollbarWidth: "thin" }}
        className="relative laptop:w-[500px]  laptop:h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-10 "
      >
        <div className="flex justify-between">
          <h1 className="text-[26px] w-full font-bold laptop:block mobile:hidden">
            조회 결과
          </h1>
        </div>
      </div>
    </section>
  );
};
