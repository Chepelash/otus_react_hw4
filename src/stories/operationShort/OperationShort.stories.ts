import type { Meta, StoryObj } from "@storybook/react";

import { OperationShort } from "./OperationShort";
import { createRandomOperation } from "../operationFunctions";

const meta = {
  title: "Accounting/OperationShort",
  component: OperationShort,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof OperationShort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RandomShortOperation: Story = {
  args: {
    operation: createRandomOperation("22.02.2025"),
  },
};
