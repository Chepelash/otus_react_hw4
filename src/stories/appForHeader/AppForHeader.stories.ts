import type { Meta, StoryObj } from "@storybook/react";
import { AppForHeader } from "./AppForHeader";
import { HeaderWithContext } from "../headerWithContext/HeaderWithContext";
import { Logo } from "../logoWithContext/Logo";

const meta = {
  title: "Hooks/AppForHeader",
  component: AppForHeader,
  subcomponents: { HeaderWithContext, Logo },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof AppForHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const JustHeader: Story = {};
