import type { Meta, StoryObj } from "@storybook/react";

import { MyHeader } from "./MyHeader.tsx";

const meta = {
  title: "Homework/Header",
  component: MyHeader,
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

export const JustHeader: Story = {};
