import type { Meta, StoryObj } from "@storybook/react";

import { ShopItem } from "./ShopItem";

const meta = {
  title: "InternetShop/ShopItem",
  component: ShopItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof ShopItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RandomShortProduct: Story = {
  args: {},
};
