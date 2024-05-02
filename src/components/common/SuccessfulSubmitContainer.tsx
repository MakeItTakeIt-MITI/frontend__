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
      {/* <div className="absolute left-5 top-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="138"
          height="93"
          viewBox="0 0 138 93"
          fill="none"
        >
          <line
            x1="59.8194"
            y1="2.45275"
            x2="61.8667"
            y2="10.6069"
            stroke="#0085FF"
            stroke-width="4"
            stroke-linecap="round"
          />
          <line
            x1="23.3453"
            y1="79.1354"
            x2="19.1417"
            y2="86.4162"
            stroke="#0085FF"
            stroke-width="4"
            stroke-linecap="round"
          />
          <line
            x1="132.039"
            y1="60.6657"
            x2="135.901"
            y2="67.1277"
            stroke="#0085FF"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="2"
            y1="-2"
            x2="8.52788"
            y2="-2"
            transform="matrix(-0.707107 0.707107 0.707107 0.707107 101.664 42.334)"
            stroke="#0085FF"
            stroke-width="4"
            stroke-linecap="round"
          />
          <circle
            cx="60.0999"
            cy="39.2327"
            r="2.60181"
            fill="#0085FF"
            stroke="#0085FF"
          />
          <circle
            cx="3.10181"
            cy="89.8606"
            r="2.60181"
            fill="#0085FF"
            stroke="#0085FF"
          />
          <circle
            cx="94.2207"
            cy="80.7969"
            r="4.46289"
            fill="#0085FF"
            stroke="#0085FF"
          />
          <circle
            cx="110.969"
            cy="21.8621"
            r="3.84253"
            fill="#0085FF"
            stroke="#1272CC"
          />
        </svg>
      </div>
      <div className="absolute right-5 bottom-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="138"
          height="93"
          viewBox="0 0 138 93"
          fill="none"
        >
          <line
            x1="59.8194"
            y1="2.45275"
            x2="61.8667"
            y2="10.6069"
            stroke="#0085FF"
            stroke-width="4"
            stroke-linecap="round"
          />
          <line
            x1="23.3453"
            y1="79.1354"
            x2="19.1417"
            y2="86.4162"
            stroke="#0085FF"
            stroke-width="4"
            stroke-linecap="round"
          />
          <line
            x1="132.039"
            y1="60.6657"
            x2="135.901"
            y2="67.1277"
            stroke="#0085FF"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="2"
            y1="-2"
            x2="8.52788"
            y2="-2"
            transform="matrix(-0.707107 0.707107 0.707107 0.707107 101.664 42.334)"
            stroke="#0085FF"
            stroke-width="4"
            stroke-linecap="round"
          />
          <circle
            cx="60.0999"
            cy="39.2327"
            r="2.60181"
            fill="#0085FF"
            stroke="#0085FF"
          />
          <circle
            cx="3.10181"
            cy="89.8606"
            r="2.60181"
            fill="#0085FF"
            stroke="#0085FF"
          />
          <circle
            cx="94.2207"
            cy="80.7969"
            r="4.46289"
            fill="#0085FF"
            stroke="#0085FF"
          />
          <circle
            cx="110.969"
            cy="21.8621"
            r="3.84253"
            fill="#0085FF"
            stroke="#1272CC"
          />
        </svg>
      </div> */}
    </div>
  );
};
