import { Meta, StoryObj } from "@storybook/react";
import { UserRequestActionButton } from "../components/game/UserRequestActionButton";


const meta = {
    title: "Buttons",
    component: UserRequestActionButton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof UserRequestActionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ApproveUserButton: Story = {
    args: {
        textOne: "참여 ",
        textTwo: "취소",
        backgroundColor: "#F95040",
    },
};


export const RejectUserButton: Story = {
    args: {
        textOne: "참여 ",
        textTwo: "확정",
        backgroundColor: "#4065F6",
    },
};

export const CopyBankInfoButton: Story = {
    args: {
        textOne: "계좌 ",
        textTwo: "복사",
        backgroundColor: "#3BDE87",
    },
};