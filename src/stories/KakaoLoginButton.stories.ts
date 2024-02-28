import { Meta, StoryObj } from "@storybook/react";
import { KakaoLoginButton } from "../components/kakao/KakaoLoginButton";

const meta = {
    title: "Buttons",
    component: KakaoLoginButton,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof KakaoLoginButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const KakaoLogin: Story = {
    args: {
        children: "카카오로 3초만에 시작하기",
    },
};
