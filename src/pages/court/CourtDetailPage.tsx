import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { CourtDetailMap } from "../../components/naver/CourtDetailMap";
import { getCourtDetailQuery } from "../../hooks/courts/getCourtDetailQuery";
import { useParams } from "react-router-dom";
import { useGetCourtListInfiniteQuery } from "../../hooks/courts/useGetCourtListInfiniteQuery";
import { CourtHistoryListContainer } from "../../components/court/CourtHistoryListContainer";
import shareIcon from "../../assets/court/share_icon.svg";

export const CourtDetailPage = () => {
  const { id } = useParams();
  const courtIdParam = Number(id);
  const { data: courtDetailData } = getCourtDetailQuery(courtIdParam);

  const {
    data: courtListData,
    fetchNextPage,
    hasNextPage,
  } = useGetCourtListInfiniteQuery(courtIdParam);

  return (
    <section className="laptop:my-[20px] mobile:mb-16 ">
      <NavigateToPrevContainer children="경기장 상세 정보" />

      <div className="flex laptop:flex-row mobile:flex-col gap-5 laptop:px-3 mobile:px-1 laptop:w-[981px] laptop:h-[745px]  mx-auto ">
        <div className="laptop:max-w-[431px]  mobile:w-full gap-[25px] w-full flex flex-col">
          <CourtDetailMap courtData={courtDetailData} />
          <div
            style={{ scrollbarWidth: "thin" }}
            className="w-full space-y-[16.5px] h-[177px] border border-[#E8E8E8] p-3 rounded-lg  overflow-y-auto"
          >
            <div className="flex justify-between items-center">
              <div className="space-y-[12.5px]">
                {" "}
                <h2 className="text-lg font-bold leading-5 text-ellipsis text-zinc-800">
                  {courtDetailData?.data.name}
                </h2>
                <p className=" text-xs font-medium leading-4 text-ellipsis text-neutral-400">
                  {courtDetailData?.data.address}
                  {courtDetailData?.data.address_detail}
                </p>
              </div>
              <img src={shareIcon} alt="share icon" />
            </div>
            <p className=" text-xs font-medium leading-5 text-zinc-900">
              {courtDetailData?.data.info}
            </p>
          </div>
        </div>
        <div
          style={{ scrollbarWidth: "thin" }}
          className=" laptop:w-[530px] bg-[#FBFBFB]  laptop:h-[738px] mobile:h-full   mobile:w-full mx-auto   p-3 rounded-lg flex flex-col gap-10 "
        >
          <CourtHistoryListContainer
            data={courtListData}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        </div>
      </div>
    </section>
  );
};
