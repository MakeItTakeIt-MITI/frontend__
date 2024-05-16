import { useEffect } from "react";
import downArrow from "../../assets/Chevron_Down_MD.svg";

export const RegionFilterBox = ({
  defaultTabName,
  setGameStatusQuery,
  openList,
  handleOpenList,
  handleChangeTab,
}: any) => {
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
  }, []);

  const tabList = [
    { id: 1, name: "모집중" },
    { id: 2, name: "모집 완료" },
    { id: 3, name: "경기 취소" },
    { id: 4, name: "경기 완료" },
    { id: 5, name: "전체 보기" },
  ];

  return (
    <>
      {/* tab */}
      <div className="flex justify-end w-full ">
        <div
          onClick={handleOpenList}
          style={{
            borderRadius: !openList ? "8px 8px 8px 8px" : "8px 8px 0px 0px",
          }}
          className="flex items-center  w-[92px] h-[39px] py-2.5 px-1.5 bg-[#f7f7f7]  relative hover:cursor-pointer"
        >
          <p className="text-[14px]">{defaultTabName}</p>
          <img
            src={downArrow}
            alt="open tab icon"
            style={{ rotate: openList ? "180deg" : "0deg" }}
          />

          {openList && (
            <ul className="absolute left-0 top-8 w-full bg-[#f7f7f7] text-[#969696] text-[14px]  px-2 py-1 flex flex-col gap-1 rounded-br-lg">
              {tabList.map((tab) => {
                return (
                  <li
                    onClick={() => handleChangeTab(tab.name)}
                    className="hover:cursor-pointer"
                    key={tab.id}
                  >
                    {tab.name}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
