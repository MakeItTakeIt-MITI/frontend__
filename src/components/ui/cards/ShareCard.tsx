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
  const currentURL = window.location.href;

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("링크복사 완료!");
    } catch (e) {
      alert("링크복사 실패!");
    }
  };
  return (
    <>
      <div
        onClick={onClick}
        className="tablet:hidden w-full h-[67px] border border-gray-200 rounded-xl  p-3 mobile:flex items-center justify-between hover:cursor-pointer"
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

      <div
        onClick={() => handleCopyClipBoard(currentURL)}
        className="mobile:hidden w-full h-[67px] border border-gray-200 rounded-xl  p-3 laptop:flex items-center justify-between hover:cursor-pointer"
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
    </>
  );
};
