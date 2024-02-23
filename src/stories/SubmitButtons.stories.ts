import { Meta, StoryObj } from "@storybook/react";
import { SubmitButton } from "../ReusableComponents/SubmitButtons";

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

export const LoginFormButton: Story = {
  args: {
    type: "submit",
    role: "user-login-btn",
    children: "로그인하기",
    disabled: false
  },
};




export const RegisterFormButton: Story = {
  args: {
    type: "submit",
    role: "submit",
    children: "가입하기",
    disabled: false
  },
};
