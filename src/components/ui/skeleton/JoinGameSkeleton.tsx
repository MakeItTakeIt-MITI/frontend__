export const JoinGameSkeleton = () => {
  return (
    <section className="laptop:my-[30px] ">
      <div className=" relative laptop:w-[915px]  laptop:min-h-[735px] h-full mb-16   mobile:w-full mx-auto laptop:mb-0  mobile:mb-[140px]  rounded-lg flex flex-col gap-1.5 ">
        <div className="h-[495px] w-full border border-gray-200 rounded-lg"></div>
        <div className="flex gap-[9px]">
          <div className="w-[453px] space-y-2">
            <div className="w-full h-[102px] border border-gray-200 rounded-lg"></div>
            <div className="w-full h-[304px] border border-gray-200 rounded-lg"></div>
            <div className="w-full h-[48px] border border-gray-200 rounded-lg"></div>
          </div>
          <div className="w-[453px] space-y-2">
            <div className="w-full h-[170px] border border-gray-200 rounded-lg"></div>
            <div className="w-full h-[356px] border border-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
