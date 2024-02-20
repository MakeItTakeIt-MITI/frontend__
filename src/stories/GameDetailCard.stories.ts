
import { Meta, StoryObj } from '@storybook/react';
import { GameDetailCard } from '../components/home/mobile/MobileViewGameList';



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

