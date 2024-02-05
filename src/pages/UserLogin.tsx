import { Link, useNavigate } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";
import mitiLogo from "../assets/MITI_logo.svg";
import backArrow from "../assets/Chevron_Left.png";

import { KakaoLoginButton } from "../components/kakao/KakaoLoginButton";
import useAuthStore from "../store/useAuthStore";
import { useFindEmailMutation } from "../hooks/useFindEmailMutation";
import { useState } from "react";
import { FindMyEmailModal } from "../user/findMyEmailModal";

export const UserLogin = () => {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();
  const { mutate: findEmailMutate } = useFindEmailMutation();
  const [findEmailModal, displayFindEmailModal] = useState(false);

  const navigatePrev = () => navigate(-1);
  const navigateHome = () => navigate("/");

  const handleFindEmail = (data: string) => {
    findEmailMutate(data);
  };

  return (
    <div className="tablet:p-10 mobile:flex mobile:flex-col mobile:justify-between h-screen pb-4">
      <div className="flex flex-col gap-8">
        <div>
          <button
            className="mobile:block tablet:hidden p-4"
            onClick={isLoggedIn ? navigatePrev : navigateHome}
          >
            <img src={backArrow} alt="back arrow" />
          </button>
          <hr className="mobile:block tablet:hidden w-full" />
        </div>
        <div className="flex items-center flex-col gap-3  mobile:px-[16px] tablet:px-[13rem]">
          <div className="mb-[36px] flex flex-col gap-2">
            <img src={mitiLogo} alt="miti logo" />
            <h5 className="text-[14px] text-[#1c1c1c]">Make it, Take it!</h5>
          </div>
          <LoginForm />
          <p className="text-center text-[#8C8C8C] text-[12px]">또는</p>
          <KakaoLoginButton />
          <div className="flex justify-center  gap-4 text-[#585858] text-[14px]">
            <p className="">아직 회원이 아니신가요? </p>
            <Link
              role="to-signup"
              to="/signup"
              className="text-[#4065F6] hover:font-bold  "
            >
              회원가입하기
            </Link>
          </div>
        </div>
      </div>
      <div className="  flex  justify-center  gap-4 text-[#8c8c8c] text-[13px]">
        <button>고객센터</button>
        <p>|</p>
        <button onClick={() => displayFindEmailModal(true)}>
          ID / PW를 잊으셨나요?
        </button>
      </div>
      <FindMyEmailModal
        findEmailModal={findEmailModal}
        displayFindEmailModal={displayFindEmailModal}
      />
    </div>
  );
};
