import { Link } from "react-router-dom";
import celebrate_right from "../../../assets/svg/celebration_right.svg";
import celebrate_left from "../../../assets/svg/celebration_left.svg";

interface SuccessPageProps {
  header: string;
  context: string;
  buttonContext: string;
  path: string;
}

export const SuccessfulSubmitContainer: React.FC<SuccessPageProps> = ({
  header,
  context,
  buttonContext,
  path,
}) => {
  return (
    <div className="mobile:h-screen mobile:justify-center mobile:p-0 bg-[#E2F1FF] relative laptop:w-[495px]  laptop:h-[735px]  laptop:py-[50px] laptop:px-[76px] tablet:m-auto rounded-lg flex flex-col laptop:justify-center  laptop:gap-[35px] ">
      <div className="z-99 flex flex-col items-center justify-center gap-2 w-full">
        <h1 className="text-black text-2xl font-bold leading-loose">
          {header}
        </h1>
        <p className="text-zinc-800 text-sm font-normal leading-snug">
          {context}
        </p>
      </div>

      <div className="absolute tablet:bottom-[74px] tablet:left-[76px] tablet:right-[76px] mobile:bottom-14 mobile:left-4 mobile:right-4">
        <Link
          to={path}
          className="   w-full h-[48px] text-white bg-[#4065F5] flex items-center justify-center rounded-lg text-sm font-bold leading-snug"
        >
          {buttonContext}
        </Link>
      </div>
      <img
        src={celebrate_right}
        alt="sprinkle_right"
        className="absolute right-4 my-auto"
      />
      <img
        src={celebrate_left}
        alt="sprinkle_left"
        className="absolute left-8 my-auto"
      />
    </div>
  );
};
