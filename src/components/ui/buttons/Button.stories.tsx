import { Meta, StoryObj } from "@storybook/react";
import { SubmitButton } from "./SubmitButton";

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

export const Inactive: Story = {
  args: {
    backgroundColor: "#E8E8E8",
    textColor: "#fff",
    isDisabled: true,
  },
};

export const Active: Story = {
  args: {
    backgroundColor: "#4065F6",
    textColor: "#fff",
    isDisabled: false,
  },
};

export const RedButton: Story = {
  args: {
    backgroundColor: "#F64061",
    textColor: "#fff",
    isDisabled: false,
  },
};
export const Edit: Story = {
  args: {
    backgroundColor: "#51A2CF",
    textColor: "#fff",
    isDisabled: false,
  },
};
