import { QuickLinkTitle } from "../components/common/QuickLinkTitle";
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
} from "../stories/QuickLink.stories";
import { NotFoundPage } from "./NotFoundPage";

export const MobileViewItemsTab = () => {
  return (
    <>
      <div className="mobile:hidden tablet:block">
        {" "}
        <NotFoundPage />
      </div>
      <section className="h-screen mobile:block laptop:hidden tablet:hidden">
        <h1 className="font-bold h-[68px]  flex items-center justify-center ">
          나의 매치
        </h1>
        <div className="">
          <div className="space-y-2 p-5">
            <h2 className="font-bold">경기</h2>
            <div className="flex flex-col gap-5 px-4 py-1">
              <QuickLinkTitle {...GuestHistory.args} />
              <QuickLinkTitle {...HostHistory.args} />
              <QuickLinkTitle {...HostGame.args} />
            </div>
          </div>
          {/* <hr className="border" /> */}
          <div className="space-y-2 p-5">
            <h2 className="font-bold ">경기장</h2>
            <div className="flex flex-col gap-5 px-4 py-1">
              <QuickLinkTitle {...FindCourts.args} />
            </div>
          </div>

          {/* <hr /> */}
          <div className="space-y-2 p-5">
            <h2 className="font-bold ">내 정보</h2>
            <div className="flex flex-col gap-5 px-4 py-1">
              <QuickLinkTitle {...ReviewsAboutMe.args} />
              <QuickLinkTitle {...MyReviews.args} />
              <QuickLinkTitle {...EditProfile.args} />
              <QuickLinkTitle {...Faq.args} />
              <QuickLinkTitle {...CustomerSupport.args} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
