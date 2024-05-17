import shareIcon from "../../assets/court/share_icon.svg";

export const ShareCourtDetailBox = ({ courtDetailData }) => {
  const handleSharePage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${courtDetailData?.data.name}`,
          text: ` ${courtDetailData?.data.info}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("사용중인 브라우저에서 공유하기가 지원되지 않습니다.");
    }
  };
  return (
    <div
      style={{ scrollbarWidth: "thin" }}
      className="w-full space-y-[16.5px] h-[177px] border border-[#E8E8E8] p-3 rounded-lg  overflow-y-auto"
    >
      <div className="flex justify-between items-center">
        <div className="space-y-[12.5px]">
          {" "}
          <h2 className="text-lg font-bold leading-5 text-ellipsis text-zinc-800">
            {courtDetailData?.data.name}
          </h2>
          <p className=" text-xs font-medium leading-4 text-ellipsis text-neutral-400">
            {courtDetailData?.data.address}{" "}
            {courtDetailData?.data.address_detail}
          </p>
        </div>
        <button onClick={handleSharePage}>
          <img src={shareIcon} alt="share icon" />
        </button>
      </div>
      <p className=" text-xs font-medium leading-5 text-zinc-900">
        {courtDetailData?.data.info}
      </p>
    </div>
  );
};
