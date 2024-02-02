import { Meta, StoryObj } from "@storybook/react";
import { MatchTags } from "../components/game/MatchTags";


const meta = {
    title: "Tags",
    component: MatchTags,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof MatchTags>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HostTag: Story = {
    args: {
        children: "호스트",
    },
};
export const GuestTag: Story = {
    args: {
        children: "게스트",
    },
};
export const RecrutingTag: Story = {
    args: {
        children: "모집 중",
    },
};
export const CompletedTag: Story = {
    args: {
        children: "매치 종료",
    },
};