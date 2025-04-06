import type { Meta, StoryObj } from "@storybook/react";

import { ModalParent } from "./ModalParent.tsx";
import { ModalWithHook } from "../modalWithHook/ModalWithHook.tsx";

const meta = {
  title: "Hooks/ModalParent",
  component: ModalParent,
  subcomponents: { ModalWithHook },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof ModalParent>;

export default meta;
type Story = StoryObj<typeof ModalParent>;

export const JustModalParent: Story = {};
