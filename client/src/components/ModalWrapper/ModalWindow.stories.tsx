import type { Meta, StoryObj } from "@storybook/react";
import ModalWrapper from "./ModalWrapper";

const meta: Meta<typeof ModalWrapper> = {
  title: "ModalWrapper",
  component: ModalWrapper,
};

export default meta;
type Story = StoryObj<typeof ModalWrapper>;

export const Wrapper: Story = {
  argTypes: {
    type: {
      description: "Changes ModalWindow's size.",
      options: ["big", "small"],
      control: { type: "radio" },
      type: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "small" },
      },
    },
    position: {
      description: "Changes ModalWindow's position.",
      options: ["corner", "center"],
      control: { type: "radio" },
      type: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "center" },
      },
    },
    children: {
      description: "Elements into wrapper.",
      defaultValue: "Heading",
      type: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Heading" },
      },
    },
  },
  args: {
    type: "small",
    position: "center",
    children: "Heading",
  },
};
