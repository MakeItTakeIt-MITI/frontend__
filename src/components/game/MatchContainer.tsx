import { HostTag, RecrutingTag } from "../../stories/Tags.stories";
import { MatchTags } from "./MatchTags";
import gameDetailBtn from "../../assets/More_Info_btn.svg";

export const MatchContainer = () => {
  return (
    <div className="  flex items-center  justify-between p-4 border border-[#E8E8E8] rounded-xl">
      <div className=" flex flex-col gap-1">
        <div className="flex gap-2">
          <MatchTags {...HostTag.args} />
          <MatchTags {...RecrutingTag.args} />
        </div>
        <h4>광교 호수 공원 3 vs 3 (주차 불가)</h4>
        <p className="text-[14px] text-[#999]">2024. 1. 15 9:30~ 11:00</p>
      </div>
      <div>
        <img src={gameDetailBtn} alt="" />
      </div>
    </div>
  );
};
