// Hero.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { DateBox } from '../components/home/DateBox';

const meta = {
    title: 'Buttons',
    component: DateBox,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DateBox>;

export default meta

type Story = StoryObj<typeof meta>;


export const GameDate: Story = {
    // gameDate: new Date(),

}
