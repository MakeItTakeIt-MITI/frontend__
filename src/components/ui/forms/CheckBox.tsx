import { useState } from "react";
import { AgreementPolicyModal } from "./AgreementPolicyModal";

interface CheckboxProps {
  handleCheckAll: () => void;
  checkAll: boolean;
  checkPolicy: boolean;
  checkAgreement: boolean;
  checkMarketing: boolean;
  setCheckPolicy: (arg: boolean) => void;
  setCheckAgreement: (arg: boolean) => void;
  setCheckMarketing: (arg: boolean) => void;
}

export const CheckBox = ({
  handleCheckAll,
  checkAll,
  checkPolicy,
  checkAgreement,
  checkMarketing,
  setCheckPolicy,
  setCheckAgreement,
  setCheckMarketing,
}: CheckboxProps) => {
  const [displayPolicy, setDisplayPolicy] = useState(false);
  return (
    <>
      {displayPolicy && (
        <AgreementPolicyModal setDisplayPolicy={setDisplayPolicy} />
      )}
      <div data-testid="checkbox-container" className="text-[14px] space-y-2">
        <h4>MITI 회원 이용약관</h4>
        <div className="space-y-3">
          <div onChange={handleCheckAll} className="flex items-center gap-3">
            <input type="checkbox" className="size-6" />
            <p className="text-[16px] font-[500]">약관 전체 동의하기</p>
          </div>
          <div className="flex items-center justify-between">
            <div
              onChange={() => setCheckPolicy(!checkPolicy)}
              className="flex gap-2"
            >
              <input
                checked={checkPolicy || checkAll ? true : false}
                type="checkbox"
                className="size-6"
              />
              <p className="text-zinc-600 text-sm font-normal">
                [필수] MITI 회원 이용 약관
              </p>
            </div>
            <button
              onChange={() => setDisplayPolicy(true)}
              className="hover:cursor-pointer text-zinc-600 text-sm font-medium underline leading-snug"
            >
              확인
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div
              onChange={() => setCheckAgreement(!checkAgreement)}
              className="flex gap-2"
            >
              <input
                checked={checkAgreement || checkAll ? true : false}
                type="checkbox"
                className="size-6"
              />
              <p className="text-zinc-600 text-sm font-normal">
                [필수] MITI 서비스 이용 약관
              </p>
            </div>
            <button
              onChange={() => setDisplayPolicy(true)}
              className="hover:cursor-pointer text-zinc-600 text-sm font-medium underline leading-snug"
            >
              확인
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div
              onChange={() => setCheckMarketing(!checkMarketing)}
              className="flex gap-2"
            >
              <input
                checked={checkMarketing || checkAll ? true : false}
                type="checkbox"
                className="size-6"
              />
              <p className="text-zinc-600 text-sm font-normal">
                [선택] 마케팅 목적 개인정보 수집 및 활용 동의
              </p>
            </div>
            <button
              onChange={() => setDisplayPolicy(true)}
              className="hover:cursor-pointer text-zinc-600 text-sm font-medium underline leading-snug"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
