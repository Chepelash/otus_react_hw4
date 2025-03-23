import type { Meta, StoryObj } from "@storybook/react";

import { CartButton } from "./CartButton";

const meta = {
  title: "InternetShop/CartButton",
  component: CartButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof CartButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const StartingWith0: Story = {
  args: { counter: 0 },
};
export const StartingWithSomething: Story = {
  args: { counter: 6 },
};
