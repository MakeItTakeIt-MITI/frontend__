import { Meta, StoryFn } from "@storybook/react";
import { QuickLinkTitle } from "../components/common/QuickLinkTitle";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Links",
  component: QuickLinkTitle,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<typeof QuickLinkTitle> = (args) => (
  <QuickLinkTitle {...args} />
);

export const GuestHistory = Template.bind({});
GuestHistory.args = {
  path: "/games/guest-history",
  context: "나의 참여 경기",
};

export const HostHistory = Template.bind({});
HostHistory.args = {
  path: "/games/host-history",
  context: "나의 호스팅 경기",
};

export const HostGame = Template.bind({});
HostGame.args = {
  path: "/games/host",
  context: "경기 생성하기",
};

export const FindCourts = Template.bind({});
FindCourts.args = {
  path: "/games/courts/search",
  context: "경기장 조회",
};
export const ReviewsAboutMe = Template.bind({});
ReviewsAboutMe.args = {
  path: "/reviews/my-reviews",
  context: "작성 리뷰",
};
export const MyReviews = Template.bind({});
MyReviews.args = {
  path: "/reviews/user-reviews",
  context: "내 리뷰",
};
export const EditProfile = Template.bind({});
EditProfile.args = {
  path: "/user/profile/edit",
  context: "프로필 수정",
};
export const Faq = Template.bind({});
Faq.args = {
  path: "/support/faq",
  context: "FAQ",
};
export const CustomerSupport = Template.bind({});
CustomerSupport.args = {
  path: "/support/customer-service",
  context: "고객센터",
};

export const SettlementDetails = Template.bind({});
SettlementDetails.args = {
  path: "/user/settlement-history",
  context: "정산내역",
};
export const TranscationHistory = Template.bind({});
TranscationHistory.args = {
  path: "/user/transaction-history",
  context: "송금내역",
};
export const DeleteAccount = Template.bind({});
DeleteAccount.args = {
  path: "/account/delete",
  context: "회원 탈퇴",
};
