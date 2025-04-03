import type { Meta, StoryObj } from "@storybook/react";
import { ThemeParent } from "./ThemeParent";
import { ThemeUser } from "../themeUser/ThemeUser";

const meta = {
  title: "Hooks/ThemeParent",
  component: ThemeParent,
  subcomponents: { ThemeUser },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof ThemeParent>;

export default meta;
type Story = StoryObj<typeof ThemeParent>;

export const JustThemeParent: Story = {};
