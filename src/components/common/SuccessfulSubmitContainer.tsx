import { Link } from "react-router-dom";

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
    <div className=" bg-[#E2F1FF] relative laptop:w-[495px]  laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto mobile:py-8    mobile:px-4 laptop:py-[50px] laptop:px-[76px] rounded-lg flex flex-col laptop:justify-center mobile:gap-0 laptop:gap-[35px] mobile:justify-between">
      <div className="z-99 flex flex-col items-center justify-center gap-2 w-full">
        <h1 className="font-bold text-[24px]">{header}</h1>
        <p className="text-[14px]">{context}</p>
      </div>

      <div className="absolute bottom-[74px] left-[76px] right-[76px]">
        <Link
          to={path}
          className="   w-full h-[48px] text-white bg-[#4065F5] flex items-center justify-center rounded-lg"
        >
          {buttonContext}
        </Link>
      </div>
    </div>
  );
};
