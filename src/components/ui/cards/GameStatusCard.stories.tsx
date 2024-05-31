import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { GameStatusCard } from "./GameStatusCard";

export default {
  title: "Cards",
  component: GameStatusCard,
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

const Template: StoryFn<typeof GameStatusCard> = (args) => (
  <GameStatusCard {...args} />
);

export const PrimaryGame = Template.bind({});
PrimaryGame.args = {
  game_status: "모집중",
  title: "경기 제목 가나다라마바사아자차타카파하가나다라마바",
  address: "서울특별시 한국동 한국로 123-456",
  time: "10:00 ~ 13:00",
};

// export const PrimaryExample = Template.bind({});
// PrimaryExample.args = {
//   address: "더모스트 바스켓볼 - 수지점",
//   address_detail: "경기도 용인시 수지구 동천로 417-1",
//   icon: chevron_right,
// };
