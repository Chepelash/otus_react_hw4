import type { Meta, StoryObj } from "@storybook/react";

import { Modal, TestNode } from "./Modal.tsx";

const meta = {
  title: "Homework/Modal",
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VisibleModal: Story = {
  args: {
    visible: true,
    children: <TestNode />,
  },
};
export const InvisibleModal: Story = {
  args: {
    visible: false,
  },
};
