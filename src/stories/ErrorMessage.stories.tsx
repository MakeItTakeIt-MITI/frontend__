import { Meta, StoryFn } from "@storybook/react";
import { ErrorMessage } from "../components/common/ErrorMessage";

export default {
  title: "Error Messages",
  component: ErrorMessage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args} />
);

export const UserNotFound = Template.bind({});
UserNotFound.args = {
  children: "일치하는 사용자가 없습니다.",
};

export const WrongPassword = Template.bind({});
WrongPassword.args = {
  children: "비밀번호가 일치하지 않아요.",
};

// email
export const EmailRegexFailure = Template.bind({});
EmailRegexFailure.args = {
  children: "이메일 형식으로 입력해주세요.",
};

export const ExistingEmail = Template.bind({});
ExistingEmail.args = {
  children: "이미 회원으로 등록된 이메일이에요.",
};

export const NoExistingEmail = Template.bind({});
NoExistingEmail.args = {
  children: "해당 이메일로 등록된 회원이 없습니다.",
};

// nickname
export const ExistingNickname = Template.bind({});
ExistingNickname.args = {
  children: "이미 사용중인 닉네임이에요.",
};
export const NicknameRegexFailure = Template.bind({});
NicknameRegexFailure.args = {
  children: "올바른 닉네임이 아닙니다!",
};

// name
export const NameRegexFailure = Template.bind({});
NameRegexFailure.args = {
  children: "올바른 이름형식이 아닙니다.",
};

// password
export const PasswordRegexFailure = Template.bind({});
PasswordRegexFailure.args = {
  children: "올바른 비밀번호 양식이 아니에요.",
};

// password confirm
export const PasswordConfirmNotMatching = Template.bind({});
PasswordConfirmNotMatching.args = {
  children: "비밀번호가 일치하지 않아요.",
};

// phone
export const PhoneRegexFailure = Template.bind({});
PhoneRegexFailure.args = {
  children: "올바른 양식의 전화번호가 아니에요.",
};

//account number
export const BankAccountRegexFailure = Template.bind({});
BankAccountRegexFailure.args = {
  children: "올바른 계좌번호가 아니에요.",
};

//refund bank account
export const RefundPaymentError = Template.bind({});
RefundPaymentError.args = {
  children: "환불 금액은 1000원 이상만 가능해요.",
};

//sms
export const SMSCodeFailure = Template.bind({});
SMSCodeFailure.args = {
  children: "인증번호가 일치하지 않아요.",
};

export const SMSRegexFailure = Template.bind({});
SMSRegexFailure.args = {
  children: "올바른 인증번호가 아니에요.",
};

// participants
export const CurrentParticipants = Template.bind({});
CurrentParticipants.args = {
  children: "총 모집 인원은 현재 모집 인원보다 많아야해요.",
};

export const ParticipantRequirement = Template.bind({});
ParticipantRequirement.args = {
  children: "총 모집 인원은 0명 이상이어야해요.",
};

export const MinParticipants = Template.bind({});
MinParticipants.args = {
  children: "총 모집 인원은 최소 모집 인원보다 많아야해요.",
};

export const MinParticipantRequirements = Template.bind({});
MinParticipantRequirements.args = {
  children: "최소 모집 인원은 0명 이상이어야해요.",
};
