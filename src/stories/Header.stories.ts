import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/home/Header';


const meta = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true
  },
};

export const LoggedOut: Story = {
  args: {
    isLoggedIn: false
  },
};
