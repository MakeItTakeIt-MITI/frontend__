export const GameDetailSkeleton = () => {
  return (
    <section className="laptop:my-[30px] ">
      <div className=" relative laptop:w-[915px]  laptop:min-h-[735px] h-full mb-16   mobile:w-full mx-auto laptop:mb-0  mobile:mb-[140px]  rounded-lg flex flex-col gap-1.5 ">
        <div className="h-[495px] w-full border boreder-gray-200 rounded-lg"></div>

        <div className="flex laptop:flex-row laptop:space-x-2 mobile:space-x-0 mobile:flex-col">
          <div className="laptop:w-[453px] laptop:space-y-2 mobile:space-y-0">
            <div className="w-[453px] h-[170px]  border border-gray-200 rounded-lg" />
            <hr className="mobile:block laptop:hidden w-full h-[8px] bg-gray-100" />
            <div className="  w-full h-[100px]  laptop:border border-gray-200   rounded-lg" />
            <hr className="mobile:block laptop:hidden w-full h-[8px] bg-gray-100" />
            <div className="laptop:static mobile:fixed mobile:bottom-[80px]  mobile:w-full " />
          </div>
          <div className="laptop:w-[453px] laptop:space-y-2 mobile:space-y-0">
            <div className="h-[130px] laptop:border border-gray-200 rounded-lg" />

            <div className=" space-y-4 laptop:p-3 mobile:p-3 laptop:h-[356px] mobile:h-full overflow-y-auto laptop:border border-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
