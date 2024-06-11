type PropField = {
  title: string;
};

export const ParticipateHistorySkeleton = ({ title }: PropField) => {
  return (
    <section className="laptop:my-[69px] mobile:mb-16 space-y-8">
      <div className="laptop:w-[593px] mx-auto flex justify-between">
        <h1 className="text-[26px] w-full font-bold laptop:block mobile:hidden">
          {title}
        </h1>
        <div className="w-[120px] h-8 border border-gray-200 rounded-lg"></div>
      </div>

      <div
        style={{ scrollbarWidth: "thin" }}
        className=" laptop:w-[593px] bg-[#FBFBFB]  laptop:h-[653px] mobile:h-full   mobile:w-full mx-auto   p-3 rounded-lg flex flex-col gap-10 "
      ></div>
    </section>
  );
};
