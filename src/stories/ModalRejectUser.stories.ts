import { Meta, StoryObj } from "@storybook/react";
import { ModalRejectUser } from "../components/game/ModalRejectUser";


const meta = {
    title: "Modal",
    component: ModalRejectUser,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof ModalRejectUser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HostRejectUserModal: Story = {
    args: {
        title: "호스트님!",
        mainContext: "참여 취소 버튼을 누르면 해당 게스트는다시 매치에 참가할 수 없게 돼요 또한 참여 취소 후 꼭 환불 금액을 지정된 계좌에 입금해주세요",
        buttonContext: '네, 알겠어요',

    },
};

// export const HostInvitationButton: Story = {
//     args: {
//         title: "홍길동님으로부터  매치 초대가 왔어요!",
//         body: "지금 수락하시면 별도의 회원가입 없이 초대하신 분의 스케줄에 추가 인원으로 배정되어 경기를 즐기실 수 있어요 😃",
//         buttonTextOne: '참가할래요!',
//         buttonTextTwo: "다음에 할게요",
//     },
// };
