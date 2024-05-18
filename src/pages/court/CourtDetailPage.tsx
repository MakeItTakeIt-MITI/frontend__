import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { CourtDetailMap } from "../../components/naver/CourtDetailMap";
import { getCourtDetailQuery } from "../../hooks/courts/getCourtDetailQuery";
import { useParams } from "react-router-dom";
import { useGetCourtListInfiniteQuery } from "../../hooks/courts/useGetCourtListInfiniteQuery";
import { CourtHistoryListContainer } from "../../components/court/CourtHistoryListContainer";
import { ShareCourtDetailBox } from "../../components/court/ShareCourtDetailBox";

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
          <ShareCourtDetailBox courtDetailData={courtDetailData} />
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
