import { Meta, StoryObj } from "@storybook/react";
import { MatchStatusBox } from "../components/game/MatchStatusBox";


const meta = {
    title: "Match Container",
    component: MatchStatusBox,
    tags: ["autodocs"],
    parameters: {
        // layout: "centered",
    },
} satisfies Meta<typeof MatchStatusBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MatchStory: Story = {

};