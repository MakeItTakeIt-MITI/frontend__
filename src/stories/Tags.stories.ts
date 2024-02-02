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
        backgroundColor: "#C1E1FF",
        textColor: "#4065F6",
    },
};
export const GuestTag: Story = {
    args: {
        children: "게스트",
        backgroundColor: "#FFF7C2",
        textColor: "#FDB446",
    },
};
export const RecrutingTag: Story = {
    args: {
        children: "모집 중",
        backgroundColor: "#E5F8EB",
        textColor: "#00BA34",
    },
};
export const CompletedTag: Story = {
    args: {
        children: "매치 종료",
        backgroundColor: "#F7F7F7",
        textColor: "#999999",
    },
};