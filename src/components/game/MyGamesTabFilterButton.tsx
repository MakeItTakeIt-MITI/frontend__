interface TabButtonsProps {
  displayTab: boolean;
  tabName: string;
  handleChangeTab: (arg: string) => void;
}

export const MyGamesTabFilterButton = ({
  displayTab,
  tabName,
  handleChangeTab,
}: TabButtonsProps) => {
  return (
    <>
      {displayTab ? (
        <div
          style={{
            boxShadow:
              "0px 11px 15px 0px rgba(0, 0, 0, 0.10), 0px 9px 46px 0px rgba(0, 0, 0, 0.06), 0px 24px 38px 0px rgba(0, 0, 0, 0.04)",
          }}
          className=" text-[14px] py-1 px-2 flex flex-col justify-around items-start bg-[#fff] absolute  right-1 w-[157px] h-[102px]"
        >
          {/* <button
            onClick={() => handleChangeTab("전체보기")}
            style={
              tabName === "전체보기" ? { fontWeight: 700 } : { fontWeight: 400 }
            }
          >
            전체보기
          </button> */}
          <button
            onClick={() => handleChangeTab("게스트만 보기")}
            style={
              tabName === "게스트만 보기"
                ? { fontWeight: 700 }
                : { fontWeight: 400 }
            }
          >
            게스트만 보기
          </button>
          <button
            onClick={() => handleChangeTab("호스트만 보기")}
            style={
              tabName === "호스트만 보기"
                ? { fontWeight: 700 }
                : { fontWeight: 400 }
            }
          >
            호스트만 보기
          </button>
        </div>
      ) : null}
    </>
  );
};
