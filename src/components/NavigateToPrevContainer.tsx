import { useNavigate } from "react-router-dom";
import backArrow from "../assets/Chevron_Left.png";

export const NavigateToPrevContainer = () => {
  const navigate = useNavigate();

  const navigatePrev = () => navigate(-1);

  return (
    <div className="tablet:p-10">
      <button className="mobile:block tablet:hidden p-4" onClick={navigatePrev}>
        <img src={backArrow} alt="back arrow" className="w-6" />
      </button>
      <hr className="mobile:block tablet:hidden w-full" />
    </div>
  );
};
