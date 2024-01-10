import { useNavigate } from "react-router-dom";
import { SignupForm } from "../components/auth/SignupForm";
import mitiLogo from "../assets/MITI_logo.svg";
import backArrow from "../assets/Chevron_Left.png";

export const UserSignup = () => {
  const navigate = useNavigate();

  const navigatePrev = () => navigate(-1);

  return (
    <div className="mb-[4rem]">
      <button className="p-4" onClick={navigatePrev}>
        <img src={backArrow} alt="back arrow" />
      </button>
      <hr className="w-full" />
      <div className="flex items-center flex-col px-[16px]  py-[24px]">
        <div className="mb-[36px] flex flex-col gap-2">
          <img src={mitiLogo} alt="miti logo" />
          <h5 className="text-[14px] text-[#1c1c1c]">Make it, Take it!</h5>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};
