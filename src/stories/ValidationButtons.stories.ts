import { Meta, StoryObj } from "@storybook/react";
import { ValidateInputButton } from "../components/common/ValidationButtons";

const meta = {
    title: "Buttons",
    component: ValidateInputButton,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof ValidateInputButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ValidateEmail: Story = {
    args: {
        isValid: false,
        validation: () => {
            // Handle email validation logic
        },
        role: "validate-email"
    }
};

export const ValidateNickname: Story = {
    args: {
        isValid: false,
        validation: () => {
            // Handle email validation logic
        },
        role: "validate-nickname"
    }
}