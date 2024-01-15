import { KakaoMap } from "../kakao/KakaoMap";
import { MobileGameDatesContainer } from "./MobileGameDatesContainer";
import { GameDetailCard } from "./GameDetailCard";

export const MobileHomeView = () => {
  return (
    <div className="mobile:block flex flex-col px-2">
      <KakaoMap />
      <MobileGameDatesContainer />
      <div className="mx-[16px] mt-[20px] mb-[30px]">
        <span>16개의 매치</span>
      </div>
      <div className="mx-[16px] flex flex-col gap-4">
        <GameDetailCard />
        <GameDetailCard />
        <GameDetailCard />
        <GameDetailCard />
      </div>
    </div>
  );
};
