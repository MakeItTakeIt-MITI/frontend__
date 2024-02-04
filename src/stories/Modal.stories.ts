import { Meta, StoryObj } from "@storybook/react";
import { ModalBox } from "../components/game/ModalBox";


const meta = {
    title: "Modal",
    component: ModalBox,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ModalBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HostRejectUserModal: Story = {
    args: {
        title: "호스트님!",
        body: "참여 취소 버튼을 누르면 해당 게스트는다시 매치에 참가할 수 없게 돼요 또한 참여 취소 후 꼭 환불 금액을 지정된 계좌에 입금해주세요",
        buttonTextOne: '네'
        // buttonTextTwo: "다음에 할게요"
    },
};
