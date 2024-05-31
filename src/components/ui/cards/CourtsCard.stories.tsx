import { Meta, StoryFn } from "@storybook/react";
import { CourtsCard } from "./CourtsCard";
import chevron_right from "../../../assets/svg/right-arrow-lg.svg";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Cards",
  component: CourtsCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<typeof CourtsCard> = (args) => <CourtsCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: chevron_right,
};

export const PrimaryExample = Template.bind({});
PrimaryExample.args = {
  address: "더모스트 바스켓볼 - 수지점",
  address_detail: "경기도 용인시 수지구 동천로 417-1",
  icon: chevron_right,
};
