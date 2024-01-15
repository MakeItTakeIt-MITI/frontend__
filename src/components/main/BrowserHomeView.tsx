import { KakaoMap } from "../kakao/KakaoMap";
import { BrowserGameList } from "./BrowserGameList";
import { DateSelectorBox } from "./DateSelectorBox";
import { SectionTitle } from "./SectionTitle";

export const BrowserHomeView = () => {
  return (
    <div className="mobile:hidden tablet:block">
      <div>
        <SectionTitle title="⚡ 빠른 매칭 예약" />
      </div>
      <div className="flex justify-between mt-6">
        <div className="flex flex-col">
          <DateSelectorBox />
          <BrowserGameList />
        </div>

        <KakaoMap />
        {/* <div></div> */}
      </div>
      <div className="my-6">
        <SectionTitle title="⚡ 마감 ️12시간 전 매칭" />
      </div>
      <div></div>
    </div>
  );
};
