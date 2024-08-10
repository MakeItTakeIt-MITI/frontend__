import { useForm } from "react-hook-form";
import downarrow from "../../assets/Chevron_Down_MD.svg";
import { useGetBankList } from "../../hooks/account/useGetBankList";
import { useState } from "react";
import { BankList } from "./BankList";
import checked from "../../assets/games/refund_agreement_checked.svg";
import unchecked from "../../assets/games/refund_agreement_unchecked.svg";
import useUserDataStore from "../../store/_useUserDataStore";
import { useMutateTransferMoney } from "../../hooks/account/useMutateTransferMoney";

export interface RequestTransferField {
  account_bank: string;
  account_holder: string;
  account_number: number;
  amount: number;
}

export const BankTransferBox = () => {
  const { userId } = useUserDataStore();
  const [displayList, setDisplayList] = useState(false);
  const [bank, setSelectedBank] = useState<string>("");
  const [rulesChecked, setRulesChecked] = useState(false);
  const [timeChecked, setTimeChecked] = useState(false);
  const { mutate: requestToSend } = useMutateTransferMoney(userId);

  const { handleSubmit, register, formState, reset } =
    useForm<RequestTransferField>();
  const { data: banksData } = useGetBankList();
  const banks = banksData?.data.bank;
  console.log(banksData);

  const onSubmit = (data: RequestTransferField) => {
    // console.log(data);
    requestToSend(data);
    reset();
  };

  const handleSelectBank = (bank: string) => {
    setSelectedBank(bank);
  };

  const handleDisplayList = () => {
    setDisplayList(!displayList);
  };

  return (
    <div className="space-y-4">
      <div className="w-full h-[456px] space-y-3 border border-gray-200 rounded-lg px-3 pt-3 ">
        <h2 className="font-bold">송금 계좌 정보 입력</h2>

        <div className="space-y-[30px] px-[44.5px]">
          {/* choose bank and display name */}

          <div className="flex justify-center gap-[61px]">
            <div className="space-y-[10px]">
              <p className="text-sm">은행</p>
              <div
                onClick={handleDisplayList}
                className="relative hover:cursor-pointer gap-[15px]  text-[#969696] "
              >
                <input
                  readOnly
                  type="string"
                  value={bank}
                  placeholder="카카오뱅크"
                  className="hover:cursor-pointer px-4 text-[#000] font-[500] bg-[#F7F7F7] w-[145px] h-[50px] text-sm  flex justify-center items-center"
                  {...register("account_bank")}
                />
                <img
                  src={downarrow}
                  alt="down arrow"
                  className="absolute right-2 top-2 bottom-2 m-auto"
                />
                {displayList && (
                  <BankList banks={banks} handleSelectBank={handleSelectBank} />
                )}
              </div>
            </div>
            <div className="space-y-[10px]">
              <p className="text-sm">예금주</p>
              <div className="  rounded-lg">
                <input
                  type="string"
                  className="text-center px-4   rounded-lg bg-[#F7F7F7] text-[#000] w-[145px] h-[50px] text-sm"
                  placeholder="김미티"
                  {...register("account_holder", {
                    required: true,
                  })}
                />
              </div>
            </div>
          </div>
          {/* account number */}
          <div className="flex flex-col justify-center space-y-[10px]">
            <p className="">입금 계좌 번호</p>
            <input
              type="number"
              placeholder="입금 계좌 번호를 숫자만 기입해주세요."
              className="rounded-lg mx-auto w-full h-[50px] px-4 py-[17px] bg-[#F7F7F7] font-[500] text-sm"
              {...register("account_number", {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col justify-center space-y-[10px]">
            <p className="">송금액</p>
            <input
              type="number"
              placeholder="₩ 송금하실 금액을 입력해주세요."
              className="rounded-lg mx-auto w-full h-[50px] px-4 py-[17px] bg-[#F7F7F7] font-[500] text-sm"
              {...register("amount", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="space-y-[15px] py-5">
          {/* <img src={checked} alt="checked icon" /> */}

          <div
            onClick={() => setRulesChecked(!rulesChecked)}
            className="flex justify-between hover:cursor-pointer"
          >
            <span
              style={{ color: rulesChecked ? "#4065F5" : "#999" }}
              className="text-xs "
            >
              MITI 송금 규정에 동의합니다.
            </span>
            <img src={rulesChecked ? checked : unchecked} alt="uncheck icon" />
          </div>
          <div
            onClick={() => setTimeChecked(!timeChecked)}
            className="flex justify-between hover:cursor-pointer"
          >
            <span
              style={{ color: timeChecked ? "#4065F5" : "#999" }}
              className="text-xs "
            >
              송금은 신청일 이후 평일 17시 이후 순차적으로 처리됩니다.
            </span>
            <img src={timeChecked ? checked : unchecked} alt="uncheck icon" />
          </div>
        </div>
      </div>
      <button
        disabled={!formState.isValid || !timeChecked || !rulesChecked}
        onClick={handleSubmit(onSubmit)}
        type="submit"
        style={{
          backgroundColor:
            !formState.isValid || !timeChecked || !rulesChecked
              ? "#d8d8d8"
              : "#4065F5",
        }}
        className="rounded-lg text-sm font-[500] w-full flex items-center justify-center text-white h-[50px]  mx-auto "
      >
        송금 요청
      </button>
    </div>
  );
};
