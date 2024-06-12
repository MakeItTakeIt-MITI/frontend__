import { Meta, StoryFn } from "@storybook/react";
import { LargeReviewRating } from "../components/ui/common/ReviewRating";

export default {
  title: "Ratings",
  component: LargeReviewRating,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<typeof LargeReviewRating> = (args) => (
  <LargeReviewRating {...args} />
);

export const LargeFiveStars = Template.bind({});
LargeFiveStars.args = {
  reviewRating: [1, 1, 1, 1, 1],
};

export const LargeFourStars = Template.bind({});
LargeFourStars.args = {
  reviewRating: [1, 1, 1, 1, 0],
};

export const LargeThreeStars = Template.bind({});
LargeThreeStars.args = {
  reviewRating: [1, 1, 1, 0, 0],
};

export const LargeTwoStars = Template.bind({});
LargeTwoStars.args = {
  reviewRating: [1, 1, 0, 0, 0],
};

export const LargeOneStar = Template.bind({});
LargeOneStar.args = {
  reviewRating: [1, 0, 0, 0, 0],
};

export const LargeNoReviews = Template.bind({});
LargeNoReviews.args = {
  reviewRating: [0, 0, 0, 0, 0],
};
export const LargeFourAndHalfStars = Template.bind({});
LargeFourAndHalfStars.args = {
  reviewRating: [1, 1, 1, 1, 0.5],
};

export const LargeThreeAndHalfStars = Template.bind({});
LargeThreeAndHalfStars.args = {
  reviewRating: [1, 1, 1, 0.5, 0],
};

export const LargeTwoAndHalfStars = Template.bind({});
LargeTwoAndHalfStars.args = {
  reviewRating: [1, 1, 0.5, 0, 0],
};

export const LargeOneAndHalfStar = Template.bind({});
LargeOneAndHalfStar.args = {
  reviewRating: [1, 0.5, 0, 0, 0],
};
