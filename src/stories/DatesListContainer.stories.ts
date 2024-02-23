// Hero.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { MobileViewDatesList } from '../components/home/MobileViewDatesList';

const meta = {
    title: 'Buttons',
    component: MobileViewDatesList,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof MobileViewDatesList>;

export default meta

type Story = StoryObj<typeof meta>;


export const DatesList: Story = {

}
