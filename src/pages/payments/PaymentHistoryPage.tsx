import { useEffect, useState } from "react";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import downArrow from "../../assets/Chevron_Down_MD.svg";
import useUserDataStore from "../../store/useUserDataStore";
import { getUserPaymentHistoryQuery } from "../../hooks/payments/getUserPaymentHistoryQuery";

export const PaymentHistoryPage = () => {
  const [defaultTabName, setDefaultTabName] = useState("전체 보기");
  const [gameStatusQuery, setGameStatusQuery] = useState("");
  const [openList, setOpenList] = useState(false);
  const { userId } = useUserDataStore();

  const { data: paymentHistoryData } = getUserPaymentHistoryQuery(userId);
  console.log(paymentHistoryData?.data);

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
      <div className="laptop:w-[593px] mobile:w-full mx-auto flex flex-col justify-between">
        <div className="flex justify-between">
          <h1 className="text-[26px] w-full font-bold laptop:block mobile:hidden">
            경기장 조회
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
          <div className="p-3 rounded-lg border border-gray-200">
            <h2 className="text-[10px]">정산 완료</h2>
            <h3 className="font-bold">
              [5:5 풀코트]더모스트 바스켓볼 3파전 픽업게임
            </h3>
            <p className="text-xs text-[#99999999]">
              2024.04.20 22:00 ~ 2024.04.21 1:00
            </p>
            <div className="flex justify-between">
              <span className="text-xs text-[#99999999]">
                경기 오산시 동부대로568번길 87-15
              </span>
              <span className="text-[#4065F5] font-bold">₩ 180,000</span>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-gray-200">
            <h2 className="text-[10px]">정산 완료</h2>
            <h3 className="font-bold">
              [5:5 풀코트]더모스트 바스켓볼 3파전 픽업게임
            </h3>
            <p className="text-xs text-[#99999999]">
              2024.04.20 22:00 ~ 2024.04.21 1:00
            </p>
            <div className="flex justify-between">
              <span className="text-xs text-[#99999999]">
                경기 오산시 동부대로568번길 87-15
              </span>
              <span className="text-[#4065F5] font-bold">₩ 180,000</span>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-gray-200">
            <h2 className="text-[10px]">정산 완료</h2>
            <h3 className="font-bold">
              [5:5 풀코트]더모스트 바스켓볼 3파전 픽업게임
            </h3>
            <p className="text-xs text-[#99999999]">
              2024.04.20 22:00 ~ 2024.04.21 1:00
            </p>
            <div className="flex justify-between">
              <span className="text-xs text-[#99999999]">
                경기 오산시 동부대로568번길 87-15
              </span>
              <span className="text-[#4065F5] font-bold">₩ 180,000</span>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-gray-200">
            <h2 className="text-[10px]">정산 완료</h2>
            <h3 className="font-bold">
              [5:5 풀코트]더모스트 바스켓볼 3파전 픽업게임
            </h3>
            <p className="text-xs text-[#99999999]">
              2024.04.20 22:00 ~ 2024.04.21 1:00
            </p>
            <div className="flex justify-between">
              <span className="text-xs text-[#99999999]">
                경기 오산시 동부대로568번길 87-15
              </span>
              <span className="text-[#4065F5] font-bold">₩ 180,000</span>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-gray-200">
            <h2 className="text-[10px]">정산 완료</h2>
            <h3 className="font-bold">
              [5:5 풀코트]더모스트 바스켓볼 3파전 픽업게임
            </h3>
            <p className="text-xs text-[#99999999]">
              2024.04.20 22:00 ~ 2024.04.21 1:00
            </p>
            <div className="flex justify-between">
              <span className="text-xs text-[#99999999]">
                경기 오산시 동부대로568번길 87-15
              </span>
              <span className="text-[#4065F5] font-bold">₩ 180,000</span>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-gray-200">
            <h2 className="text-[10px]">정산 완료</h2>
            <h3 className="font-bold">
              [5:5 풀코트]더모스트 바스켓볼 3파전 픽업게임
            </h3>
            <p className="text-xs text-[#99999999]">
              2024.04.20 22:00 ~ 2024.04.21 1:00
            </p>
            <div className="flex justify-between">
              <span className="text-xs text-[#99999999]">
                경기 오산시 동부대로568번길 87-15
              </span>
              <span className="text-[#4065F5] font-bold">₩ 180,000</span>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
