import type { Meta, StoryObj } from "@storybook/react";
import { LangParent } from "./LangParent";
import { LangUser } from "../langUser/LangUser";

const meta = {
  title: "Hooks/LangParent",
  component: LangParent,
  subcomponents: { LangUser },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof LangParent>;

export default meta;
type Story = StoryObj<typeof LangParent>;

export const JustLangParent: Story = {};
