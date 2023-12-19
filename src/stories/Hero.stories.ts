// Hero.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Hero } from '../components/main/Hero';
import mainBanner from "../assets/banner-2.svg"
import secondBanner from "../assets/banner-1.svg"

const meta = {
    title: 'Hero',
    component: Hero,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Hero>;

export default meta

type Story = StoryObj<typeof meta>;


export const MainBanner: Story = {
    args: {

        backgroundImage: mainBanner,
        launchText: 'MITI 서비스 런칭',
        recruitText: 'MITI와 함께, 경기 모집부터',
        managementText: '관리, 결제, 매칭까지 한번에.',
    }
}

export const SecondBanner: Story = {
    args: {

        backgroundImage: secondBanner
    }
}
