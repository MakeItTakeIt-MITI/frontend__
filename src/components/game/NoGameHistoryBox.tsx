export const NoGameHistoryBox = () => {
  return (
    <div className="h-full w-full ">
      <div className="flex flex-col gap-2 items-center justify-center  ">
        <p className="text-4xl">🥲</p>
        <p className="text-lg font-bold">아직 등록된 매치가 없어요</p>
        <p className="text-[14px] text-[#333]">
          새로운 매치 스케줄을 잡아볼까요?
        </p>
      </div>
    </div>
  );
};
