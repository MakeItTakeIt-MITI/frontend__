import { Meta, StoryFn } from "@storybook/react";
import { ReviewRating } from "../components/ui/common/ReviewRating";

export default {
  title: "Ratings",
  component: ReviewRating,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<typeof ReviewRating> = (args) => (
  <ReviewRating {...args} />
);

export const FiveStars = Template.bind({});
FiveStars.args = {
  reviewRating: [1, 1, 1, 1, 1],
};

export const FourStars = Template.bind({});
FourStars.args = {
  reviewRating: [1, 1, 1, 1, 0],
};

export const ThreeStars = Template.bind({});
ThreeStars.args = {
  reviewRating: [1, 1, 1, 0, 0],
};

export const TwoStars = Template.bind({});
TwoStars.args = {
  reviewRating: [1, 1, 0, 0, 0],
};

export const OneStar = Template.bind({});
OneStar.args = {
  reviewRating: [1, 0, 0, 0, 0],
};

export const NoReviews = Template.bind({});
NoReviews.args = {
  reviewRating: [0, 0, 0, 0, 0],
};
export const FourAndHalfStars = Template.bind({});
FourAndHalfStars.args = {
  reviewRating: [1, 1, 1, 1, 0.5],
};

export const ThreeAndHalfStars = Template.bind({});
ThreeAndHalfStars.args = {
  reviewRating: [1, 1, 1, 0.5, 0],
};

export const TwoAndHalfStars = Template.bind({});
TwoAndHalfStars.args = {
  reviewRating: [1, 1, 0.5, 0, 0],
};

export const OneAndHalfStar = Template.bind({});
OneAndHalfStar.args = {
  reviewRating: [1, 0.5, 0, 0, 0],
};
