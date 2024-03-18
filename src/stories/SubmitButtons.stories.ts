import { Meta, StoryObj } from "@storybook/react";
import { SubmitButton } from "../components/common/SubmitButtons";

const meta = {
  title: "Buttons",
  component: SubmitButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SubmitButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EnabledLoginButton: Story = {
  args: {
    type: "submit",
    role: "user-login-btn",
    children: "로그인 하기",
    disabled: false
  },
};
export const DisabledLoginButton: Story = {
  args: {
    type: "submit",
    role: "user-login-btn",
    children: "로그인 하기",
    disabled: true
  },
};

export const EnabledSignupButton: Story = {
  args: {
    type: "submit",
    role: "submit",
    children: "가입하기",
    disabled: false
  },
};
export const DisabledSignupButton: Story = {
  args: {
    type: "submit",
    role: "submit",
    children: "가입하기",
    disabled: true
  },
};
