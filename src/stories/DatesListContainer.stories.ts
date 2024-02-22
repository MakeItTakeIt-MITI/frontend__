// Hero.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { DatesListContainer } from '../components/home/MobileViewDatesList';

const meta = {
    title: 'Buttons',
    component: DatesListContainer,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DatesListContainer>;

export default meta

type Story = StoryObj<typeof meta>;


export const DatesList: Story = {

}
