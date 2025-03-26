import type { Meta, StoryObj } from "@storybook/react";

import { MyHeader } from "../header/MyHeader";
import { Layout } from "./Layout";

const meta = {
  title: "Homework/Layout",
  component: Layout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof MyHeader>;

export default meta;
type Story = StoryObj<typeof meta>;
export const JustLayout: Story = {
  args: {},
};
