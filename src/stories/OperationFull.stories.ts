import type { Meta, StoryObj } from "@storybook/react";

import { OperationFull } from "./OperationFull";
import { createRandomOperation } from "./operationFunctions";

const meta = {
  title: "Accounting/OperationFull",
  component: OperationFull,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof OperationFull>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RandomFullOperation: Story = {
  args: {
    operation: createRandomOperation("22.02.2025"),
  },
};
