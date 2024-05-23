import { Link } from "react-router-dom";
import linkArrow from "../../assets/Chevron_Right_MD.svg";
import { MatchTags } from "./MatchTags";
import { GuestTag, HostTag } from "../../stories/Tags.stories";

export const MyReviewContainer = ({ review }) => {
  return (
    <Link
      to="/my-reviews-detail"
      className="flex items-center  w-full h-[89px] border text-[#545454] border-gray-300 rounded-lg   justify-between p-3"
    >
      <div className="flex flex-col">
        <div className="">
          {review?.review_type === "host_review" && (
            <MatchTags {...HostTag.args} />
          )}
          {review?.review_type === "guest_review" && (
            <MatchTags {...GuestTag.args} />
          )}
        </div>

        <div className="flex items-center gap-1">
          <span className="text-[14px]">5.0</span>
        </div>
        <p className="text-[9px] text-[#666] ">
          팀 구성을 균형있게 해주셨어요!
        </p>
        <p className="font-bold text-[16px] ">
          수원 매탄 공원 4 vs 4 (주차 12자리)
        </p>
      </div>

      <button>
        <img src={linkArrow} alt="right arrow icon" />
      </button>
    </Link>
  );
};
