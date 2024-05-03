export const CheckBox = () => {
  return (
    <div className="text-[14px] space-y-2">
      <h4>MITI 회원 이용약관</h4>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="size-6" />
          <p className="text-[16px] font-[500]">약관 전체 동의하기</p>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" className="size-6" />
          <p>[필수] MITI 회원 이용 약관</p>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" className="size-6" />
          <p>[필수] MITI 서비스 이용 약관</p>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" className="size-6" />
          <p>[선택] 마케팅 목적 개인정보 수집 및 활용 동의</p>
        </div>
      </div>
    </div>
  );
};
