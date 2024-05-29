import { useEffect, useState } from "react";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import downArrow from "../../assets/Chevron_Down_MD.svg";
import useUserDataStore from "../../store/useUserDataStore";
// import { useGetPaymentHistory } from "../../hooks/account/useGetPaymentHistory";
import { Link } from "react-router-dom";
import { MatchTags } from "../../components/game/MatchTags";
import {
  AwaitingPayment,
  PaymentPartiallyFulfilled,
  TransferFulfilled,
} from "../../stories/Tags.stories";

export const PaymentHistoryPage = () => {
  const [defaultTabName, setDefaultTabName] = useState("전체 보기");
  const [gameStatusQuery, setGameStatusQuery] = useState("");
  const [openList, setOpenList] = useState(false);
  const { userId } = useUserDataStore();

  // const { data: paymentHistoryData } = useGetPaymentHistory(userId);
  const data = {
    status_code: 200,
    message: "OK",
    data: {
      start_index: 1,
      end_index: 2,
      current_index: 1,
      page_content: [
        {
          id: 9,
          amount: 0,
          commission: 0,
          status: "waiting",
          game: {
            id: 61,
            court: {
              id: 7,
              address: "인천 동구 보세로 65 B동",
              address_detail: "왼측 건물",
              latitude: "37.4854719147071",
              longitude: "126.617237911346",
            },
            game_status: "open",
            title: "MITI 픽업게임",
            startdate: "2024-04-17",
            starttime: "17:34:00",
            enddate: "2024-04-17",
            endtime: "18:00:00",
            max_invitation: 2,
            min_invitation: 1,
            fee: 10000,
          },
        },
        {
          id: 10,
          amount: 200,
          commission: 10,
          status: "confirmed",
          game: {
            id: 62,
            court: {
              id: 8,
              address: "서울 강남구 삼성로 508",
              address_detail: "B1층",
              latitude: "37.5102843",
              longitude: "127.066923",
            },
            game_status: "closed",
            title: "주말 배드민턴",
            startdate: "2024-05-10",
            starttime: "09:00:00",
            enddate: "2024-05-10",
            endtime: "11:00:00",
            max_invitation: 10,
            min_invitation: 5,
            fee: 15000,
          },
        },
      ],
    },
  };

  useEffect(() => {
    if (defaultTabName === "전체 보기") {
      setGameStatusQuery("");
    } else if (defaultTabName === "정산 완료") {
      setGameStatusQuery("open");
    } else if (defaultTabName === "부분 정산") {
      setGameStatusQuery("closed");
    } else if (defaultTabName === "대기중") {
      setGameStatusQuery("canceled");
    }
  }, [defaultTabName, gameStatusQuery]);

  const tabList = ["전체보기", "정산 완료", "부분 정산", "대기중"];
  const handleOpenList = () => setOpenList(!openList);
  const handleChangeTab = (tab: string) => setDefaultTabName(tab);

  return (
    <section className="laptop:my-[69px] mobile:mb-16">
      <NavigateToPrevContainer children="정산 내역" />

      {/* <div className="laptop:space-y-8 mobile:mt-8 laptop:mt-0"> */}
      <div className="laptop:w-[593px] mobile:w-full mx-auto flex flex-col gap-[22px]">
        <div className="flex justify-between">
          <h1 className="text-[26px] w-full font-bold laptop:block mobile:hidden">
            정산 내역
          </h1>
          <div className="flex justify-end w-full ">
            <div
              onClick={handleOpenList}
              style={{
                borderRadius: !openList ? "8px 8px 8px 8px" : "8px 8px 0px 0px",
              }}
              className="flex items-center  w-[90px] h-[32px] py-2.5 px-1.5 bg-[#f7f7f7]  relative hover:cursor-pointer"
            >
              <p className="text-[14px]">{defaultTabName}</p>
              <img
                src={downArrow}
                alt="open tab icon"
                style={{ rotate: openList ? "180deg" : "0deg" }}
              />

              {openList && tabList && (
                <ul className="absolute left-0 top-8 w-full bg-[#f7f7f7] text-[#969696] text-[14px]  px-2 py-1 flex flex-col gap-1 rounded-br-lg">
                  {tabList.map((tab) => {
                    return (
                      <li
                        onClick={() => handleChangeTab(tab)}
                        className="hover:cursor-pointer"
                      >
                        {tab}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div
          style={{ scrollbarWidth: "thin" }}
          className="overflow-y-auto laptop:w-[593px] bg-[#FBFBFB]  laptop:h-[653px] mobile:h-full   mobile:w-full mx-auto   p-3 rounded-lg flex flex-col gap-[15px] "
        >
          {data?.data.page_content.length !== 0 ? (
            data?.data.page_content.map((page) => {
              return (
                <Link
                  to={`detail/${page.id}`}
                  className="p-3 rounded-lg border space-y-[7px] border-gray-200 bg-white"
                >
                  <h2 className="text-[10px]">
                    {page.status === "waiting" && (
                      <MatchTags {...AwaitingPayment.args} />
                    )}
                    {page.status === "confirmed" && (
                      <MatchTags {...TransferFulfilled.args} />
                    )}
                    {page.status === "partial_completed" && (
                      <MatchTags {...PaymentPartiallyFulfilled.args} />
                    )}
                  </h2>
                  <h3 className="font-bold">{page.game.title}</h3>
                  <p className="text-xs text-[#99999999]">
                    {page.game.startdate} {page.game.starttime} ~{" "}
                    {page.game.enddate} {page.game.endtime}
                  </p>
                  <div className="flex justify-between">
                    <span className="text-xs text-[#99999999]">
                      {page.game.court.address} {page.game.court.address_detail}
                    </span>
                    <span className="text-[#4065F5] font-bold">
                      {page.game.fee.toLocaleString("ko-KR", {
                        style: "currency",
                        currency: "KRW",
                      })}
                    </span>
                  </div>
                </Link>
              );
            })
          ) : (
            <div>nolis </div>
          )}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
