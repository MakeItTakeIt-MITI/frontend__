import { Meta, StoryObj } from "@storybook/react";
import { DateSelectorBox } from "../components/main/DateSelectorBox";

const meta = {
    title: 'Dates',
    component: DateSelectorBox,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DateSelectorBox>;
export default meta;
type Story = StoryObj<typeof meta>;


export const DateBox: Story = {

}