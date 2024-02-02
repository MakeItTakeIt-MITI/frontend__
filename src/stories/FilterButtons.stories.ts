import { Meta, StoryObj } from "@storybook/react";
import { UserMatchesFilterBtn } from './../components/game/UserMatchesFilterBtn';

const meta = {
    title: "Filter Buttons",
    component: UserMatchesFilterBtn,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof UserMatchesFilterBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HostFilterButton: Story = {
    args: {
        children: "호스트만 보기"
    }
};
export const GuestFilterBtton: Story = {
    args: {
        children: "게스트만 보기"
    }
};
export const ViewAllButton: Story = {
    args: {
        children: "전체 보기"
    }
};