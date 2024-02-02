import { Meta, StoryObj } from '@storybook/react';
import { MatchContainer } from '../components/game/MatchContainer';


const meta = {
    title: "Games Card",
    component: MatchContainer,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof MatchContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GameCard: Story = {

};