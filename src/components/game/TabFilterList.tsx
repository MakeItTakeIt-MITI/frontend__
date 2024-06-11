import downArrow from "../../assets/Chevron_Down_MD.svg";

interface TabField {
  defaultTabName: string;
  openList: boolean;
  handleOpenList: () => void;
  handleChangeTab: (arg: string) => void;
  tabList: { id: number; name: string }[];
}

export const TabFilterList = ({
  defaultTabName,
  openList,
  handleOpenList,
  handleChangeTab,
  tabList,
}: TabField) => {
  return (
    <>
      {/* tab */}
      <div className="flex justify-end w-full ">
        <div
          onClick={handleOpenList}
          style={{
            borderRadius: !openList ? "8px 8px 8px 8px" : "8px 8px 0px 0px",
          }}
          className="flex items-center justify-between  w-[92px] h-[32px] py-2.5 px-1.5 bg-[#f7f7f7]  relative hover:cursor-pointer"
        >
          <p className="text-zinc-800 text-xs font-normal">{defaultTabName}</p>
          <img
            src={downArrow}
            alt="open tab icon"
            style={{ rotate: openList ? "180deg" : "0deg" }}
          />

          {openList && (
            <ul className="absolute left-0 top-8 w-full bg-[#f7f7f7] text-neutral-400 text-xs px-2 py-1 flex flex-col gap-1 rounded-br-lg">
              {tabList.map((tab: { name: string; id: number }) => {
                return (
                  <li
                    onClick={() => handleChangeTab(tab.name)}
                    className="hover:cursor-pointer hover:text-black"
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
