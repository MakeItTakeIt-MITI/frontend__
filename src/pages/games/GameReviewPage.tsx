import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";

import { useState } from "react";
import { GameReviewSkeleton } from "../../components/skeleton/GameReviewSkeleton";
import { LoadingPage } from "../LoadingPage";

export const GameReviewPage = () => {
  const [loading, _setLoading] = useState(false);
  //   const { id } = useParams();
  //   const courtIdParam = Number(id);

  return (
    <>
      {loading ? (
        <>
          <GameReviewSkeleton />
          <LoadingPage />
        </>
      ) : (
        <section className="laptop:my-5 mobile:mb-16 ">
          <NavigateToPrevContainer children="리뷰 작성하기" />

          <div className="flex laptop:flex-row mobile:flex-col gap-5 laptop:px-3 mobile:px-1 laptop:w-[981px] laptop:h-[745px]  mx-auto ">
            <div className="laptop:max-w-[431px]  mobile:w-full space-y-5">
              <div className="w-full h-[303px] border border-gray-200 rounded-lg"></div>
              <div className="h-[170px] rounded-lg border border-gray-200 p-3"></div>
            </div>
            <div className="space-y-5">
              <div className="laptop:w-[464px] space-y-2.5">
                <h2 className="text-xl font-[600]">호스트 리뷰</h2>
                <div className="space-y-5 w-full h-[97px] p-3 rounded-lg border border-gray-200 ">
                  <div className="border border-gray-200 rounded-lg p-3 h-[73px]"></div>
                </div>
              </div>
              <div className="space-y-2.5">
                <h2 className="text-xl font-[600]">게스트 리뷰</h2>
                <div
                  style={{ scrollbarWidth: "thin" }}
                  className="space-y-5 h-[509px] p-3 rounded-lg border border-gray-200 overflow-y-auto"
                >
                  <div className=" p-3 rounded-lg border border-gray-200 h-[73px]"></div>
                  <div className=" p-3 rounded-lg border border-gray-200 h-[73px]"></div>
                  <div className=" p-3 rounded-lg border border-gray-200 h-[73px]"></div>
                  <div className=" p-3 rounded-lg border border-gray-200 h-[73px]"></div>
                  <div className=" p-3 rounded-lg border border-gray-200 h-[73px]"></div>
                  <div className=" p-3 rounded-lg border border-gray-200 h-[73px]"></div>
                  <div className=" p-3 rounded-lg border border-gray-200 h-[73px]"></div>
                  <div className=" p-3 rounded-lg border border-gray-200 h-[73px]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
