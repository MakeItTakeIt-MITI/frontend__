import { Link } from "react-router-dom";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import kakao_icon from "../../assets/kakao_small_icon.png";

export const FindEmailOAuthDisplayPage = () => {
  return (
    <section className="laptop:my-4 mobile:my-0   h-full ">
      <NavigateToPrevContainer children="회원 정보 찾기" />

      <div className="laptop:w-[500px] laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-6  justify-between">
        <div className="h-full w-full flex flex-col gap-3 py-20">
          <h1 className="font-bold text-[24px]">아이디 찾기</h1>
          <div className="flex items-center gap-4">
            <div>
              <img src={kakao_icon} alt="kakao icon" className="w-9 " />
            </div>
            <div className="text-[14px]">
              <p>회원님은 카카오로 가입하셨습니다!</p>
              <p>카카오 로그인을 통해 서비스를 이용해주세요.</p>
            </div>
          </div>

          <div className="h-[39px] text-[14px]  flex items-center justify-center text-center p-4 rounded-lg bg-[#F5F5F5]">
            kakao@email.com
          </div>
        </div>
        <Link
          onClick={() => localStorage.removeItem("user_email")}
          to="/auth/login"
        >
          <button className="bg-[#4065F6] text-white h-[48px] w-full rounded-lg">
            로그인하기
          </button>
        </Link>
      </div>
    </section>
  );
};
