import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import mark from "../../assets/questionMark.svg";
import { Link } from "react-router-dom";

export const FindEmailDisplayPage = () => {
  const userEmail = localStorage.getItem("user_email");

  return (
    <section className="laptop:my-4 mobile:my-0   h-full ">
      <NavigateToPrevContainer children="회원 정보 찾기" />

      <div className="laptop:w-[500px] laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-6  justify-between">
        <div className="h-full w-full flex flex-col gap-3 py-20">
          <h1 className="font-bold text-[24px]">아이디 찾기</h1>
          <div className="flex items-center gap-4">
            <div>
              <img src={mark} alt="question mark" className=" w-6 h-6" />
            </div>
            <div className="">
              <p>혹시 비밀번호도 잊으셨나요?</p>
              <p>비밀번호 찾기를 통해 비밀번호를 재설정해주세요!</p>
            </div>
          </div>

          <div className="h-[39px] text-[14px]  flex items-center justify-center text-center p-4 rounded-lg bg-[#F5F5F5]">
            {userEmail ? userEmail : null}
          </div>
          <Link
            to="/find-password"
            onClick={() => localStorage.removeItem("user_email")}
            className="text-center text-[#8C8C8C] text-[13px] "
          >
            PW를 잊으셨나요?
          </Link>
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
