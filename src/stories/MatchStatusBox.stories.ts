import { Meta, StoryObj } from "@storybook/react";
import { MatchStatusBox } from "../components/game/host/MatchStatusBox";


const meta = {
    title: "Host Match Status Container",
    component: MatchStatusBox,
    tags: ["autodocs"],
    parameters: {
        // layout: "centered",
    },
} satisfies Meta<typeof MatchStatusBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MatchStatusUpdate: Story = {
    args: {
        titleOne: "모집 중",
        titleTwo: "모집 완료",
        titleOneColor: '#4065F6',
        titleTwoColor: "#E92C2C"
    }
};
export const MatchStatusEdit: Story = {
    args: {
        titleOne: "게시물 수정하기",
        titleTwo: "게시물 삭제하기",
        titleOneColor: "#333333",
        titleTwoColor: "#333333"
    }
};