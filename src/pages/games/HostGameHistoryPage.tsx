import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import downarrow from "../../assets/Chevron_Down_MD.svg";
import { useState } from "react";
import useUserDataStore from "../../store/useUserDataStore";
import { useGetHostHistoryQuery } from "../../hooks/games/useGetHostHistoryQuery";

export const HostGameHistoryPage = () => {
  const [defaultTabName, setDefaultTabName] = useState("전체 보기");
  const [openList, setOpenList] = useState(false);

  const handleOpenList = () => setOpenList(!openList);
  const handleChangeTab = (tab: string) => setDefaultTabName(tab);

  const { userId } = useUserDataStore();

  const { data } = useGetHostHistoryQuery(userId);

  const tabList = [
    { id: 1, name: "모집중" },
    { id: 2, name: "모집 완료" },
    { id: 3, name: "경기 취소" },
    { id: 4, name: "경기 완료" },
    { id: 5, name: "전체 보기" },
  ];

  return (
    <section className="laptop:my-4 mobile:my-0 h-full ">
      <NavigateToPrevContainer children="나의 호스팅 경기" />

      <div className="relative laptop:w-[500px]  laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-10 ">
        <h1 className="text-center font-bold laptop:block mobile:hidden">
          나의 호스팅 경기
        </h1>
        <div className="flex justify-end w-full ">
          <div
            onClick={handleOpenList}
            className="flex items-center  w-[100px] h-[32px] p-2.5 bg-[#f7f7f7]  relative "
          >
            <p className="text-[14px]">{defaultTabName}</p>
            <img
              src={downarrow}
              alt="open tab icon"
              style={{ rotate: openList ? "180deg" : "0deg" }}
            />

            {/* list  */}
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
      </div>
    </section>
  );
};
