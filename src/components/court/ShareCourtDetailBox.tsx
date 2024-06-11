import { ShareCard } from "../ui/cards/ShareCard";

export interface CourtDetailProp {
  courtDetailData: {
    data: {
      name: string;
      info: string;
      address: string;
    };
  };
}

export const ShareCourtDetailBox = ({ courtDetailData }: CourtDetailProp) => {
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
    <ShareCard
      onClick={handleSharePage}
      address={courtDetailData?.data.name}
      address_detail={courtDetailData?.data.address}
    />
  );
};
