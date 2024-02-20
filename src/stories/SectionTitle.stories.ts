
import { Meta, StoryObj } from '@storybook/react';

import { SectionTitle } from '../components/home/SectionTitle';

const meta = {
    title: 'Title',
    component: SectionTitle,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof SectionTitle>;

export default meta

type Story = StoryObj<typeof meta>;


export const FastMatching: Story = {
    args: {
        title: "⚡ 빠른 매칭 예약"
    }
}

export const TodayEndingMatches: Story = {
    args: {

        title: "🗓️ 마감 하루 전 매칭"
    }
}
export const HourlyEndingMatches: Story = {
    args: {

        title: "⚡ 마감 ️12시간 전 매칭"
    }
}