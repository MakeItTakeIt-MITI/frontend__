import GameListCard from "../home/GameListCard";

const DetailsList = () => {
  return (
    <div className="p-[1rem] bg-secondary-black w-[23.8125rem] h-[618px]  space-y-[1.25rem] overflow-y-scroll custom-scrollbar rounded-[20px]">
      <div className="space-y-[0.75rem]">
        <h1 className="font-bold text-primary-white ">2024년 5월 1일 일요일</h1>
        <GameListCard />
        <GameListCard />
      </div>
      <div className="space-y-[0.75rem]">
        <h1 className="font-bold text-primary-white ">2024년 5월 5일 일요일</h1>
        <GameListCard />
        <GameListCard />
      </div>
      <div className="space-y-[0.75rem]">
        <h1 className="font-bold text-primary-white ">2024년 5월 8일 일요일</h1>
        <GameListCard />
        <GameListCard />
      </div>
    </div>
  );
};

export default DetailsList;
