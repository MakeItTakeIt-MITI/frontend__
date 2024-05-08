import { Meta, StoryFn } from "@storybook/react";
import { AlertModal } from "../components/common/AlertModal";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Modal Popups",
  component: AlertModal,
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

const Template: StoryFn<typeof AlertModal> = (args) => <AlertModal {...args} />;

export const InquirySubmitted = Template.bind({});
InquirySubmitted.args = {
  title: "문의 작성을 완료하였습니다",
  buttonContext: "확인",
  isLink: true,
  path: "/support/customer-service",
};

export const InactiveUserNotification = Template.bind({});
InactiveUserNotification.args = {
  title: "로그인 실패",
  context: "탈퇴한 사용자입니다.",
  contextTwo: "고객센터에 문의해주세요.",
  buttonContext: "확인",
};

export const NotAuthroizedUser = Template.bind({});
NotAuthroizedUser.args = {
  title: "로그인 실패",
  context: "인증이 완료되지 않은 회원입니다.",
  contextTwo: "인증 완료 후 서비스를 이용해주세요.",
  buttonContext: "인증하기",
  isLink: true,
  path: "/auth/authenticate-user",
};

export const NotFoundInactiveUser = Template.bind({});
NotFoundInactiveUser.args = {
  title: "계정 조회 실패",
  context: "탈퇴한 사용자입니다.",
  contextTwo: "고객센터에 문의해주세요.",
  buttonContext: "확인",
};

export const KakaoAccountFound = Template.bind({});
KakaoAccountFound.args = {
  title: "카카오 로그인 사용자",
  context: "카카오 계정을 사용하여 가입하셨습니다.",
  contextTwo: "카카오 로그인을 통해 로그인해주세요.",
  buttonContext: "확인",
  isLink: true,
  path: "/auth/login",
};

export const NotKakaoUser = Template.bind({});
KakaoAccountFound.args = {
  title: "카카오 로그인 실패",
  context: "카카오 계정을 사용하여 가입하지 않았습니다.",
  contextTwo: "일반 로그인을 통해 로그인해주세요.",
  buttonContext: "확인",
  isLink: true,
  path: "/auth/login",
};

export const KakaoAuthFailure = Template.bind({});
KakaoAccountFound.args = {
  title: "카카오 로그인 실패",
  context: "카카오 로그인 정보를 받아오지 못했습니다.",
  contextTwo: "고객센터에 문의해주세요",
  buttonContext: "확인",
  isLink: true,
  path: "/auth/login",
};

export const KakaoPaymentFailure = Template.bind({});
KakaoPaymentFailure.args = {
  title: "카카오 결제 실패",
  context: "결제가 정상적으로 완료되지 않았습니다.",
  contextTwo: "다시 결제를 진행해주세요.",
  buttonContext: "확인",
};

export const DeletedAccountUser = Template.bind({});
DeletedAccountUser.args = {
  title: "회원 탈퇴 사용자",
  context: "탈퇴한 회원정보입니다.",
  contextTwo: "고객센터를 통해 문의해주세요.",
  buttonContext: "확인",
};

export const GameDetailsEditedSuccess = Template.bind({});
GameDetailsEditedSuccess.args = {
  title: "경기 모집 정보 수정 완료",
  context: "경기 정보가 정상적으로 수정되었습니다.",
  contextTwo: "",
  buttonContext: "확인",
};

export const UserRegisterSuccess = Template.bind({});
UserRegisterSuccess.args = {
  title: "회원가입 완료!",
  context: "회원가입이 정상적으로 처리되었습니다.",
  contextTwo: "로그인을 통해 경기에 참여해보세요!",
  buttonContext: "확인",
};
