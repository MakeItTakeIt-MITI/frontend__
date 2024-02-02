interface FilterBoxProp {
  displayFilters: boolean;
  children?: string;
}
export const MatchesFilterBox = ({
  displayFilters,
  children,
}: FilterBoxProp) => {
  return (
    <>
      {displayFilters && (
        <div className="flex items-start rounded-[4] flex-col gap-2 w-[157px] p-2  text-[14px] text-[#1c1c1c] absolute top-6  right-0 border border-[#E8E8E8]">
          {children === "전체 보기" ? (
            <span className="font-bold"> 전체 보기</span>
          ) : (
            <span> 전체 보기</span>
          )}

          {children === "게스트만 보기" ? (
            <span className="font-bold"> 게스트만 보기</span>
          ) : (
            <span> 게스트만 보기</span>
          )}
          {children === "호스트만 보기" ? (
            <span className="font-bold"> 호스트만 보기</span>
          ) : (
            <span> 호스트만 보기</span>
          )}
        </div>
      )}
    </>
  );
};
