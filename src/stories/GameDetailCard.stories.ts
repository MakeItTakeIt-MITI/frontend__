
import { Meta, StoryObj } from '@storybook/react';

import { GameDetailCard } from '../components/main/GameDetailCard';

const meta = {
    title: 'Game Card',
    component: GameDetailCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof GameDetailCard>;

export default meta

type Story = StoryObj<typeof meta>;


export const Card: Story = {

}

