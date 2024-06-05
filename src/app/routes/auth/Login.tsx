import { Link } from "react-router-dom";
import mitiLogo from "../../../assets/MITI_logo.svg";
import chevron_right from "../../../assets/Chevron_Right_MD.svg";
import { KakaoLoginButton } from "../../../components/ui/buttons/KakaoLoginButton";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { AuthLayout } from "../../../components/layouts/AuthLayout";
import { LoginForm } from "../../../components/ui/forms/LoginForm";

export const Login = () => {
  return (
    <AuthLayout>
      <NavigateToPrevContainer children="" />

      <div className="relative laptop:w-[495px]  tablet:w-full tablet:px-[9rem]  laptop:min-h-[735px] mobile:h-full  mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-[50px] laptop:px-[76px]  mobile:px-4 mobile:py-9 rounded-lg flex flex-col laptop:justify-center gap-[35px] ">
        <div className=" flex flex-col gap-2 justify-center items-center">
          <img src={mitiLogo} alt="miti logo" className="w-[88px]" />
          <h5 className="text-[14px] text-[#1c1c1c]">Make it, Take it!</h5>
        </div>

        {/* button */}
        <div className="flex flex-col gap-3">
          <LoginForm />
          <p className="text-center text-[#8C8C8C] text-[12px]">또는</p>
          <KakaoLoginButton />
          <div className="flex flex-col gap-2">
            <div className="flex justify-center  gap-4 text-[#585858] text-[14px]">
              <p className="">아직 회원이 아니신가요? </p>
              <Link
                role="to-signup"
                to="/auth/signup"
                className="text-[#4065F6] hover:font-bold flex gap-1 items-center "
              >
                회원가입하기
                <img src={chevron_right} alt="right arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="laptop:absolute mobile:static   w-full left-0 right-0 laptop:bottom-8  flex  justify-center  gap-4 text-[#8c8c8c] text-[13px] ">
          <Link to="/support/customer-service">고객센터</Link>
          <p>|</p>
          <Link to="/support/find-email">
            <button>ID / PW를 잊으셨나요?</button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};
