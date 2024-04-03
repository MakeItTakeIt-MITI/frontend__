import { useNavigate } from "react-router-dom";
import backArrow from "../assets/Chevron_Left.png";

interface NavigationBarProp {
  children?: string;
}
export const NavigateToPrevContainer = ({ children }: NavigationBarProp) => {
  const navigate = useNavigate();

  // const navigatePrev = () => navigate(-1);
  const navigateHome = () => navigate(-1);

  return (
    <div className="mobile:block tablet:hidden">
      <div className="flex items-center justify-between w-[55%] ">
        <button
          role="go-prev-button"
          className="mobile:block tablet:hidden p-4"
          onClick={navigateHome}
        >
          <img src={backArrow} alt="back arrow" className="w-6" />
        </button>

        <h2 className="font-bold">{children}</h2>
      </div>
      <hr className=" w-full text-[#d8d8d8]" />
    </div>
  );
};
