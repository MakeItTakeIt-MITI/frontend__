import { Link } from "react-router-dom";
import { LoginForm } from "../../components/forms/LoginForm";
import mitiLogo from "../../assets/MITI_logo.svg";
import chevron_right from "../../assets/Chevron_Right_MD.svg";
import { KakaoLoginButton } from "../../components/kakao/KakaoLoginButton";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { useState } from "react";
import { DisplayModal } from "../../components/common/DisplayModal";

export const UserLoginPage = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorCode, setErrorCode] = useState(0);

  const handleCloseModal = () => {
    setDisplayModal(false);
  };

  console.log(errorCode);

  return (
    <section>
      <NavigateToPrevContainer children="" />
      {/* {displayModal && (
        <DisplayModal
          modal={displayModal}
          closeModal={handleCloseModal}
          title={errorMsg}
          content="확인"
        />
      )} */}
      <div className="relative laptop:w-[500px]  laptop:h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col laptop:justify-center gap-10 mobile:justify-between">
        <div className=" flex flex-col gap-2 justify-center items-center">
          <img src={mitiLogo} alt="miti logo" className="w-[88px]" />
          <h5 className="text-[14px] text-[#1c1c1c]">Make it, Take it!</h5>
        </div>

        {/* button */}
        <div className="flex flex-col gap-3">
          <LoginForm
            setDisplayModal={setDisplayModal}
            setErrorCode={setErrorCode}
            setErrorMsg={setErrorMsg}
          />
          <p className="text-center text-[#8C8C8C] text-[12px]">또는</p>
          <KakaoLoginButton />
          <div className="flex flex-col gap-2">
            <div className="flex justify-center  gap-4 text-[#585858] text-[14px]">
              <p className="">아직 회원이 아니신가요? </p>
              <Link
                role="to-signup"
                to="/auth/signup-option"
                className="text-[#4065F6] hover:font-bold flex gap-1 items-center "
              >
                회원가입하기
                <img src={chevron_right} alt="right arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute  w-full left-0 right-0 laptop:bottom-8  mobile:bottom-0 flex  justify-center  gap-4 text-[#8c8c8c] text-[13px] ">
          <Link to="/customer-service">고객센터</Link>
          <p>|</p>
          <Link to="/find-email">
            <button>ID / PW를 잊으셨나요?</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
