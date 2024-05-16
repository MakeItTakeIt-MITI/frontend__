import { useEffect, useState } from "react";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/Chevron_Right_MD.svg";
import searchIcon from "../../assets/court/search_icon.svg";
import { RegionFilterBox } from "../../components/game/RegionFilterBox";
import { useGetAllCourtsInfiniteQuery } from "../../hooks/courts/useGetAllCourtsInfiniteQuery";
import { NoListFoundMessageBox } from "../../components/common/NoListFoundMessageBox";

export const FindCourtsPage = () => {
  const [defaultTabName, setDefaultTabName] = useState("전체 보기");
  const [gameStatusQuery, setGameStatusQuery] = useState("");
  const [openList, setOpenList] = useState(false);

  const handleOpenList = () => setOpenList(!openList);
  const handleChangeTab = (tab: string) => setDefaultTabName(tab);

  const { data: courtsData } = useGetAllCourtsInfiniteQuery();
  console.log(
    courtsData?.pages.map((page) => {
      page.data.page_content.map((court: any) => {
        console.log(court);
      });
    })
  );

  useEffect(() => {
    if (defaultTabName === "전체 보기") {
      setGameStatusQuery("");
    } else if (defaultTabName === "모집중") {
      setGameStatusQuery("open");
    } else if (defaultTabName === "모집 완료") {
      setGameStatusQuery("closed");
    } else if (defaultTabName === "경기 취소") {
      setGameStatusQuery("canceled");
    } else if (defaultTabName === "경기 완료") {
      setGameStatusQuery("completed");
    }
    // refetch();
  }, [defaultTabName, gameStatusQuery]);

  return (
    <section className="laptop:my-[69px] mobile:mb-16">
      <NavigateToPrevContainer children="경기장 조회" />

      <div className="laptop:space-y-8 mobile:mt-8 laptop:mt-0">
        <div className="laptop:w-[593px] mobile:w-full mx-auto flex justify-between">
          <h1 className="text-[26px] w-full font-bold laptop:block mobile:hidden">
            나의 호스팅 경기
          </h1>

          <div className="flex space-x-3">
            <div className="relative">
              <input
                type="text"
                className=" w-[243px] h-[39px] px-4 py-[17px] bg-[#F7F7F7] text-[14px] pr-10 rounded-lg"
                placeholder="경기장 검색어(주소/경기장 명)"
              />
              <button className="absolute right-3.5 top-2.5 bottom-2.5  m-auto">
                <img src={searchIcon} alt="search icon" />
              </button>
            </div>
            <RegionFilterBox
              defaultTabName={defaultTabName}
              setGameStatusQuery={setGameStatusQuery}
              openList={openList}
              handleOpenList={handleOpenList}
              handleChangeTab={handleChangeTab}
            />
          </div>
        </div>

        <div
          style={{ scrollbarWidth: "thin" }}
          className="overflow-y-auto laptop:w-[593px] bg-[#FBFBFB]  laptop:h-[653px] mobile:h-full   mobile:w-full mx-auto   p-3 rounded-lg flex flex-col gap-[15px] "
        >
          <h2 className="text-[20px] font-[500]">조회 결과</h2>
          {courtsData?.pages.map((page) => {
            return page.data.page_content.length > 0 ? (
              page.data.page_content.map((court: any) => (
                <Link
                  key={court.id}
                  to={`/games/courts/detail/${court.id}`}
                  className="w-full flex justify-between p-3 bg-white border border-gray-200 rounded-lg"
                >
                  <div className="space-y-[9px]">
                    <h2 className="text-[#333333] font-bold">{court.name}</h2>
                    <p className="text-[#999999] text-xs">{court.address}</p>
                  </div>
                  <img loading="lazy" src={rightArrow} alt="right arrow" />
                </Link>
              ))
            ) : (
              <NoListFoundMessageBox
                title="조회 결과가 없습니다."
                content="다른 검색어로 검색해보세요!"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
