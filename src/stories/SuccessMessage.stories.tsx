import { Meta, StoryFn } from "@storybook/react";
import { SuccessMessage } from "../components/common/SuccessMessage";

export default {
  title: "Success Messages",
  component: SuccessMessage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<typeof SuccessMessage> = (args) => (
  <SuccessMessage {...args} />
);

export const EmailAllowed = Template.bind({});
EmailAllowed.args = {
  children: "사용 가능한 이메일이에요!",
};

export const NicknameAllowed = Template.bind({});
NicknameAllowed.args = {
  children: "멋진 닉네임이에요!",
};

export const SafePassword = Template.bind({});
SafePassword.args = {
  children: "안전한 비밀번호에요!",
};

export const AuthenCodeSent = Template.bind({});
AuthenCodeSent.args = {
  children: "인증번호가 발송되었어요!",
};

export const AuthenCodeApproved = Template.bind({});
AuthenCodeApproved.args = {
  children: "인증번호가 일치해요!",
};
