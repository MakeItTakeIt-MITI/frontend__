import { Meta, StoryObj } from "@storybook/react";
import { SubmitButton } from "../common/SubmitButton";

const meta = {
  title: "Submit Buttons",
  component: SubmitButton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SubmitButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HostGameButton: Story = {
  args: {
    errors: false,
    children: "매치 생성하기",
  },
};
export const JoinGameButton: Story = {
  args: {
    errors: false,
    children: "매치 참여하기",
  },
};

export const UserLoginButton: Story = {
  args: {
    errors: false,
    children: "로그인 하기",
  },
};

export const UserRegisterButton: Story = {
  args: {
    errors: false,
    children: "가입하기",
  },
};
