import tabImg from "../../assets/all-items-tab-img.jpg";
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

export const HeaderTabContainer = ({ displayTab }: TabProps) => {
  return (
    <div
      className="bg-[#fff] mx-auto z-[9999] absolute left-0  drop-shadow-xl right-0 top-[58px] rounded-xl  w-full max-w-[64rem] h-[300px] p-4 "
      onMouseLeave={displayTab}
    >
      <div className="p-4 flex justify-around ">
        <div className="flex justify-center items-center ">
          <img src={tabImg} alt="basketball img" className="w-[250px]" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold ">경기</h2>
          <QuickLinkTitle {...GuestHistory.args} />
          <QuickLinkTitle {...HostHistory.args} />
          <QuickLinkTitle {...HostGame.args} />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold ">경기장</h2>
          <QuickLinkTitle {...FindCourts.args} />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold ">내 정보</h2>
          <QuickLinkTitle {...ReviewsAboutMe.args} />
          <QuickLinkTitle {...MyReviews.args} />
          <QuickLinkTitle {...EditProfile.args} />
          <QuickLinkTitle {...Faq.args} />
          <QuickLinkTitle {...CustomerSupport.args} />
        </div>
      </div>
    </div>
  );
};
