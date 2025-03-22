import type { Meta, StoryObj } from "@storybook/react";

import { createRandomProduct } from "./operationFunctions";
import { ProductShort } from "./ProductShort";

const meta = {
  title: "InternetShop/ProductShort",
  component: ProductShort,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof ProductShort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RandomShortProduct: Story = {
  args: {
    product: createRandomProduct("22.02.2025"),
  },
};
