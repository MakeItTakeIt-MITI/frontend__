import { useNavigate } from "react-router-dom";
// import useAuthStore from "../store/useAuthStore";
// import { useEffect } from "react";

import backArrow from "../assets/Chevron_Left.png";
import { GameHostForm } from "../components/forms/GameHostForm";

export const GameHostContainer = () => {
  // const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  const navigatePrev = () => navigate(-1);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <div className=" mobile:w-full tablet:w-[560px] tablet:mb-0 mx-auto mobile:mb-[4rem] py-3">
      <div className="mobile:block tablet:hidden p-4 flex relative">
        <button className="absolute left-2" onClick={navigatePrev}>
          <img src={backArrow} alt="back arrow" />
        </button>

        <h4 className=" font-bold text-center w-full">매치 생성</h4>
      </div>
      <hr className="mobile:block tablet:hidden w-full" />
      <div className="flex items-center flex-col px-[16px] py-4">
        <GameHostForm />
      </div>
    </div>
  );
};
