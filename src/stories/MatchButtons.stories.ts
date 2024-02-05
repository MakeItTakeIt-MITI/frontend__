import { Meta, StoryObj } from "@storybook/react";
import { MatchStatusButton } from "../components/game/host/MatchStatusButton";


const meta = {
    title: "Buttons",
    component: MatchStatusButton,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof MatchStatusButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StatusTypeButton: Story = {

};