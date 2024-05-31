import icon from "../../../assets/svg/share_icon.svg";

interface ShareCardProps {
  address: string;
  address_detail: string;
  onClick?: () => void;
}

export const ShareCard = ({
  address,
  address_detail,
  onClick,
}: ShareCardProps) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-[67px] border border-gray-200 rounded-xl  p-3 flex items-center justify-between hover:cursor-pointer"
    >
      <div className="space-y-[7px] w-[256px] truncate">
        <h1 className="text-zinc-800 text-base font-bold leading-18">
          {address}
        </h1>
        <h2 className="text-neutral-400 text-xs font-medium leading-none">
          {address_detail}
        </h2>
      </div>
      <img src={icon} alt="right arrow" />
    </div>
  );
};
