/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type Bank = [string | number, string | number];
export interface BankField {
  id: number;
  bank: Bank;
}

export interface BanksField {
  banks: BankField[];
  handleSelectBank: (arg: string) => void;
}

export const BankList: React.FC<BanksField> = ({ banks, handleSelectBank }) => {
  return (
    <div
      style={{
        scrollbarWidth: "thin",
      }}
      className="absolute bg-[#F7F7F7] text-[#969696]  w-full max-h-[400px] overflow-auto z-10 space-y-2"
    >
      {banks.map((bank: any) => (
        <div
          key={bank.id}
          onClick={() => handleSelectBank(bank[0])}
          className=" text-sm hover:text-black px-4 py-1  cursor-pointer"
        >
          <span> {bank[0]}</span>
        </div>
      ))}
    </div>
  );
};
