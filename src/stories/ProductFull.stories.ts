import type { Meta, StoryObj } from "@storybook/react";

import { createRandomProduct } from "./operationFunctions";
import { ProductFull } from "./ProductFull";

const meta = {
  title: "InternetShop/ProductFull",
  component: ProductFull,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof ProductFull>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RandomFullProduct: Story = {
  args: {
    product: createRandomProduct("22.02.2025"),
  },
};
