import { Link } from "react-router-dom";

export const DeleteAccountSuccessPage = () => {
  return (
    <section className="laptop:mt-[15px] laptop:mb-[164px] mobile:my-0 space-y-[15px]">
      <h1 className="w-[496px] mx-auto text-[26px] font-bold text-[#000]">
        회원 탈퇴 완료
      </h1>
      <div className="w-[496px] mx-auto h-[565px] space-y-[55px] rounded-lg border border-gray-200 py-[100px] px-[60px]">
        <div className="p-3 space-y-5">
          <h2 className="text-[24px] font-bold">회원 탈퇴 안내</h2>
          <p className="text-[14px] text-[#1C1C1C] leading-[22px]">
            회원님의 탈퇴 요청이 성공적으로 처리되었습니다. 이용해주셔서
            감사합니다.
            <br /> <br />
            회원님의 정보는 탈퇴일로부터 30일 후 안전하게 삭제됩니다. 그동안
            추가적인 문의사항이 있으시면 고객 지원팀에 연락해주시기 바랍니다.
            <br /> <br />
            감사합니다.
          </p>
        </div>
        <Link
          to="/"
          className="h-[48px] w-[343px] mx-auto bg-[#4065F5] text-white flex items-center justify-center rounded-2xl"
        >
          홈으로
        </Link>
      </div>
    </section>
  );
};
