import MITI_logo from "../../assets/MITI_logo.svg";
import {
  CustomerSupport,
  EditProfile,
  Faq,
  FindCourts,
  GuestHistory,
  HostGame,
  HostHistory,
  MyReviews,
  ReviewsAboutMe,
} from "../../stories/QuickLink.stories";
import { QuickLinkTitle } from "./QuickLinkTitle";

interface TabProps {
  displayTab: () => void;
}

export const HeaderTabContainer: React.FC<TabProps> = ({ displayTab }) => {
  return (
    <div
      className=" bg-[#fff] mx-auto z-[9999] absolute left-0  drop-shadow-2xl right-0 top-[58px] rounded-xl  w-full max-w-[64rem] h-[196px] py-3 px-12 "
      onMouseLeave={displayTab}
    >
      <div className=" flex justify-between ">
        <div className="flex items-center  ">
          <img src={MITI_logo} alt="basketball img" className="" />
        </div>
        <div className="flex  gap-[28px]">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold ">경기</h2>
            <QuickLinkTitle {...GuestHistory.args} />
            <QuickLinkTitle {...HostHistory.args} />
            <QuickLinkTitle {...HostGame.args} />
          </div>
          <hr className="border" />
          <div className="flex flex-col gap-2">
            <h2 className="font-bold ">경기장</h2>
            <QuickLinkTitle {...FindCourts.args} />
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <h2 className="font-bold ">내 정보</h2>
            <QuickLinkTitle {...ReviewsAboutMe.args} />
            <QuickLinkTitle {...MyReviews.args} />
            <QuickLinkTitle {...EditProfile.args} />
            <QuickLinkTitle {...Faq.args} />
            <QuickLinkTitle {...CustomerSupport.args} />
          </div>
        </div>
      </div>
    </div>
  );
};
