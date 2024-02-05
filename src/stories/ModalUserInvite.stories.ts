import { Meta, StoryObj } from "@storybook/react";
import { ModalUserInvite } from "../components/game/ModalUserInvite";


const meta = {
    title: "Modal",
    component: ModalUserInvite,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ModalUserInvite>;

export default meta;

type Story = StoryObj<typeof meta>;


export const HostInvitationButton: Story = {
    args: {
        hostName: "홍길동님",
        titleContextOne: "으로부터",
        titleContextTwo: "매치 초대가 왔어요!",
        mainContext: "지금 수락하시면 별도의 회원가입 없이 초대하신 분의 스케줄에 추가 인원으로 배정되어 경기를 즐기실 수 있어요 😃",
        buttonContextOne: '다음에 할게요',
        buttonContextTwo: "참가할래요!",
    },
};
