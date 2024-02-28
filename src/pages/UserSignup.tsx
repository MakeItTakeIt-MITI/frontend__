import { useNavigate } from "react-router-dom";
import { SignupForm } from "../components/forms/SignupForm";
import mitiLogo from "../assets/MITI_logo.svg";
import backArrow from "../assets/Chevron_Left.png";

export const UserSignup = () => {
  const navigate = useNavigate();

  const navigatePrev = () => navigate(-1);

  return (
    <div className="tablet:p-10">
      <button
        role="prev-btn"
        className="mobile:block tablet:hidden p-4"
        onClick={navigatePrev}
      >
        <img src={backArrow} alt="back arrow" />
      </button>
      <hr className="mobile:block tablet:hidden w-full" />
      <div className="flex items-center flex-col mobile:px-[16px]  mobile:py-[24px] tablet:px-[13rem]">
        <div role="miti-logo" className="mb-[36px] flex flex-col gap-2">
          <img src={mitiLogo} alt="miti logo" />
          <h5 className="text-[14px] text-[#1c1c1c]">Make it, Take it!</h5>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};
