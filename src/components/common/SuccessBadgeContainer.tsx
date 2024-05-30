import auth_icon from "../../assets/authenticated_icon.svg";

interface BadgeContainerProps {
  title: string;
  context_one: string;
  context_two: string;
}

export const SuccessBadgeContainer: React.FC<BadgeContainerProps> = ({
  title,
  context_one,
  context_two,
}) => {
  return (
    <div className="laptop:px-[76px] h-full w-full mobile:px-4 laptop:pb-[74px] mobile:pb-0  flex  flex-col  gap-[25px]">
      <h1 className="text-black text-[26px] font-bold">{title}</h1>
      <div className="flex items-center gap-2">
        <img src={auth_icon} alt="authentication badge" />
        <div className="flex flex-col text-black text-sm font-normal leading-[18px]">
          <p>{context_one}</p>
          <p>{context_two}</p>
        </div>
      </div>
    </div>
  );
};
