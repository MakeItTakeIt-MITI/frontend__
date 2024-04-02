import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import miti_logo from "../../assets/MITI_logo.svg";
import { KakaoLoginButton } from "../../components/kakao/KakaoLoginButton";
import email_icon from "../../assets/Email.svg";
import { Link } from "react-router-dom";
import chevron_right from "../../assets/Chevron_Right_MD.svg";

export const SignupIntroPage = () => {
  return (
    <section className="laptop:mt-4 mobile:mt-0 ">
      <NavigateToPrevContainer children="" />
      <div className="laptop:w-[500px] h-[735px]   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:p-4 rounded-lg flex flex-col justify-between ">
        <div className="flex flex-col gap-8 justify-center items-center h-full">
          {/* logo */}
          <div className="flex flex-col items-center justify-center    flex-[1]">
            <img src={miti_logo} alt="MITI Logo" className="w-[88px]" />
            <h2 className="text-[24px] font-bold text-[#000]">
              만나서 반가워요!
            </h2>
            <p className="text-[14px] font-[400]">
              어떤 방식으로 MITI에가입하시겠어요?
            </p>
          </div>
          {/* buttons */}
          <div className="w-full flex flex-col gap-2 ">
            {/* email buttton */}
            <Link to="/auth/signup" className="relative  w-full">
              <button className="w-full bg-[#4065F6] text-white h-[48px]  rounded-lg text-[14px] font-bold">
                이메일로 시작하기
              </button>
              <img
                src={email_icon}
                alt="email icon"
                className="absolute left-3 top-3"
              />
            </Link>
            {/* kakao button */}
            <KakaoLoginButton children="카카오로 3초만에 시작하기" />
          </div>
          {/* login text */}
          <div className="flex gap-2  text-[14px] ">
            <span className="text-[#585757]">이미 가입하셨나요?</span>{" "}
            <Link
              className="flex items-center text-[#4065F6] font-[400]"
              to="/auth/login"
            >
              로그인하기 <img src={chevron_right} alt="" />
            </Link>{" "}
          </div>
          {/* custom serivce + find into */}
          <div className=" flex  gap-4 text-[#8c8c8c] text-[13px]">
            <button onClick={() => alert("not available")}>고객센터</button>
            <p>|</p>
            <Link to="/find-user-info">
              <button>ID / PW를 잊으셨나요?</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
