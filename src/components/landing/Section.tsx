import { Link } from "react-router-dom";

interface SectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  desktopImage: string;
  mobileImage: string;
  mobileGap: string;
  backgroundColor: string;
  reverse: boolean;
  textPosition: string;
  isButton: boolean;
  path: string;
}

const Section = ({
  title,
  subtitle,
  description,
  buttonText,
  desktopImage,
  mobileImage,
  mobileGap,
  backgroundColor,
  reverse,
  textPosition,
  isButton,
  path,
}: SectionProps) => {
  return (
    <div
      className={`md:h-[800px] bg-${backgroundColor} flex ${reverse ? "md:flex-row" : "md:flex-row-reverse"} sm:flex-col-reverse sm:justify-end sm:items-center md:items-stretch md:justify-center sm:gap-[${mobileGap}] md:gap-[78px]`}
    >
      <div>
        <img
          src={desktopImage}
          alt="desktop view"
          className="sm:hidden md:block align-bottom"
        />
        <img
          src={mobileImage}
          alt="mobile view"
          className="sm:block md:hidden"
        />
      </div>
      <div className="flex items-center justify-start md:pt-[0px] sm:pt-[70px]">
        <div className={`space-y-3 md:text-left sm:text-${textPosition} p-3`}>
          <h1 className="text-primary-teal font-bold text-[18px]">{title}</h1>

          {/* Render subtitle with potential HTML (including <br/>) */}
          <h2
            className="text-white sm:text-[24px] md:text-[52px] font-bold"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></h2>

          {/* Render description with potential HTML (including <br/>) */}
          <p
            className="text-[#E5E5E5] sm:text-sm md:text-xl font-[400]"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>

          {isButton && (
            <button
              type="button"
              className="sm:w-[120px] md:w-[180px] sm:h-[40px] md:h-[54px] bg-[#D4D4D4] text-[#262626] sm:text-sm md:text-[18px] font-bold rounded-[14.286px]"
            >
              <Link to={path}> {buttonText}</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
