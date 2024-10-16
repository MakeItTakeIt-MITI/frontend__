/* eslint-disable @typescript-eslint/no-explicit-any */
import NoResults from "../common/NoResults";
import CourtDetailCard from "./CourtDetailCard";

const DetailsList = ({ selectedCourtsData }: any) => {
  return (
    <div className="sm:py-[1.5rem] sm:px-[1.31rem] md:p-[1rem] md:bg-secondary-black sm:w-full md:w-[23.8125rem] h-[618px]  space-y-[1.25rem] overflow-y-scroll custom-scrollbar rounded-[20px]">
      <p className="text-[18px] font-bold text-primary-white">
        이 경기장에 생성된 경기
      </p>

      {selectedCourtsData?.pages.map((page: any) => {
        return page.data.page_content.length > 0 ? (
          page.data.page_content.map((court: any) => (
            <div className="space-y-[0.75rem]">
              <h1 className="font-bold text-primary-white">
                {court.startdate}
              </h1>

              {court.games.map((game: any) => (
                <CourtDetailCard key={game.id} game={game} />
              ))}
            </div>
          ))
        ) : (
          <NoResults />
        );
      })}
    </div>
  );
};

export default DetailsList;
