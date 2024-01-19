import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { useEffect } from "react";

import mitiLogo from "../assets/MITI_logo.svg";
import backArrow from "../assets/Chevron_Left.png";
import { GameHostForm } from "../components/auth/GameHostForm";

export const GameHostContainer = () => {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  const navigatePrev = () => navigate(-1);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

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
        <GameHostForm />
      </div>
    </div>
  );
};
