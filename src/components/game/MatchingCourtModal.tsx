import { useState } from "react";
import closeBtn from "../../assets/games/game_form_x.svg";
import unCheckedBtn from "../../assets/games/refund_agreement_unchecked.svg";
import checkedBtn from "../../assets/games/refund_agreement_checked.svg";
import useDisplayAddressOptionsStore from "../../store/useDisplayAddressOptionsStore";
export const MatchingCourtModal = ({
  matchingAddressData,
  setCourtAddressDetail,
  setCourtAddress,
  refetchCourts,
}: any) => {
  const [mouseOver, setMouseOver] = useState(false);
  const { closeOptions } = useDisplayAddressOptionsStore();

  return (
    <div className="z-[9999] flex items-center justify-center w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-[#ffffffd5] ">
      <div className=" border space-y-4 border-gray-200 w-[348px] h-[287px] bg-white p-4  rounded-lg">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold text-[#040000]">경기장 목록</h1>
          <button
            onClick={() => {
              setCourtAddress(null);
              closeOptions();
              refetchCourts();
            }}
          >
            <img src={closeBtn} alt="close btn" />
          </button>
        </div>
        <div
          className="space-y-4 overflow-y-auto h-[200px]"
          style={{ scrollbarWidth: "thin" }}
        >
          {matchingAddressData?.pages.map((page: any) => {
            return page.data.page_content.map((detail: any) => {
              return (
                <div
                  onClick={() => {
                    setCourtAddressDetail(detail?.address_detail);
                  }}
                  key={detail.id}
                  onMouseOver={() => setMouseOver(true)}
                  onMouseOut={() => setMouseOver(false)}
                  className="hover:border-[#4065F5] hover:cursor-pointer h-[51px] p-[10px] flex justify-between items-center rounded-lg border border-gray-200"
                >
                  <div>
                    <h2 className="text-[13px] text-[#333] font-bold">
                      {detail?.address_detail}
                    </h2>
                    <h2 className="text-xs text-[#999] truncate">
                      {detail?.address}
                    </h2>
                  </div>
                  <img
                    src={mouseOver ? checkedBtn : unCheckedBtn}
                    alt="check button"
                    className="size-[12.5px] "
                  />
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};
