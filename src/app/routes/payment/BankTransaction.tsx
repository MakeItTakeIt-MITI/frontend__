import { useEffect } from "react";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { BankTransferBox } from "../../../components/payment/BankTransferBox";
import { useGetAccountBalance } from "../../../hooks/account/useGetAccountBalance";
import { useGetUserDataQuery } from "../../../hooks/user/useGetUserDataQuery";
import useUserDataStore from "../../../store/useUserDataStore";

export const BankTransaction = () => {
  const { userId } = useUserDataStore();
  const { data: userData } = useGetUserDataQuery(userId);
  const accountId = userData?.data?.account.id;
  const { data: accountBalanceData, refetch: refetchUser } =
    useGetAccountBalance(accountId);

  useEffect(() => {
    refetchUser();
  }, [accountBalanceData, userData]);
  return (
    <section className="laptop:mt-[15px] mobile:mb-[100px] tablet:px-[80px] laptop:px-0 tablet:h-screen">
      <NavigateToPrevContainer children="송금하기" />

      <div className="laptop:w-[915px] laptop:h-[516px] space-y-[32px] mx-auto">
        <h1 className="mobile:hidden tablet:block text-[26px] font-bold">
          송금하기
        </h1>
        <div className="flex laptop:flex-row mobile:flex-col gap-5">
          {/* left */}
          <div className="w-full h-[198px] border border-gray-200 rounded-lg pt-3 pl-3 pr-3 pb-5 space-y-[14px]">
            <h2 className="font-bold">보유 잔고</h2>
            <div className="text-[14px] space-y-3">
              <div className="flex justify-between">
                <span className="text-[#666]">보유 잔고</span>
                <span className="text-[#333]">
                  {accountBalanceData?.data?.balance.toLocaleString("ko-KR", {
                    style: "currency",
                    currency: "KRW",
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">보유 포인트</span>
                <span className="text-[#333]">
                  {" "}
                  {accountBalanceData?.data?.point.toLocaleString("ko-KR", {
                    style: "currency",
                    currency: "KRW",
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">대기 송금요청액</span>
                <span className="text-[#333]">
                  {" "}
                  {accountBalanceData?.data?.accumulated_requested_amount.toLocaleString(
                    "ko-KR",
                    {
                      style: "currency",
                      currency: "KRW",
                    }
                  )}
                </span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span className="text-[#222] font-bold">총 송금 가능 금액</span>
                <span className="text-[#F45858] text-[16px] font-bold">
                  {accountBalanceData?.data?.requestable_transfer_amount.toLocaleString(
                    "ko-KR",
                    {
                      style: "currency",
                      currency: "KRW",
                    }
                  )}
                </span>
              </div>
            </div>
          </div>
          {/* right */}
          <BankTransferBox />
        </div>
      </div>
    </section>
  );
};
