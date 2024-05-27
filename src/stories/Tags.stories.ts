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
        textColor: "#0019FF",
    },
};
export const HostReviewTag: Story = {
    args: {
        children: "호스트 리뷰",
        backgroundColor: "#0087E94D",
        textColor: "#0087E9",
    },
};
export const GuestTag: Story = {
    args: {
        children: "게스트",
        backgroundColor: "#43D0004D",
        textColor: "#43D000",
    },
};
export const GuestReviewTag: Story = {
    args: {
        children: "게스트 리뷰",
        backgroundColor: "#43D0004D",
        textColor: "#43D000",
    },
};
export const RecruitingTag: Story = {
    args: {
        children: "모집 중",
        backgroundColor: "#C0DDFF",
        textColor: "#0019FF",
    },
};
export const RecruitingCompletedTag: Story = {
    args: {
        children: "모집 종료",
        backgroundColor: "#DBFFDF",
        textColor: "#3F0",
    },
};
export const GameCancelledTag: Story = {
    args: {
        children: "경기 취소",
        backgroundColor: "#FFC0C0",
        textColor: "#FC0000",
    },
};
export const GameFinishedTag: Story = {
    args: {
        children: "경기 완료",
        backgroundColor: "#F5CCFF",
        textColor: "#CA00FC",
    },
};


export const PaymentFulfilled: Story = {
    args: {
        children: "정산 완료",
        backgroundColor: "#DBFFDF",
        textColor: "#33FF00",
    },
};

export const PaymentPartiallyFulfilled: Story = {
    args: {
        children: "부분 완료",
        backgroundColor: "#C0DDFF",
        textColor: "#0019FF",
    },
};

export const AwaitingPayment: Story = {
    args: {
        children: "대기중",
        backgroundColor: "#FFC0C0",
        textColor: "#FF0000",
    },
};

export const TransferFulfilled: Story = {
    args: {
        children: "송금 완료",
        backgroundColor: "#DBFFDF",
        textColor: "#33FF00",
    },
};

export const TransferAwaiting: Story = {
    args: {
        children: "대기중",
        backgroundColor: "#C0DDFF",
        textColor: "#0019FF",
    },
};
