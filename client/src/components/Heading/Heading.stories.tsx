import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Heading",
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const PageHeading: Story = {
  argTypes: {
    animated: {
      description: "Adds color animation for heading.",
      options: ["true", "false"],
      control: { type: "boolean" },
      type: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "false" },
      },
    },
    marginBottom: {
      description: "Adds margin-bottom: 20px option.",
      options: ["true", "false"],
      control: { type: "boolean" },
      type: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      description: "Labels value",
      defaultValue: "Heading",
      type: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Heading" },
      },
    },
  },
  args: {
    animated: false,
    marginBottom: false,
    children: "Heading",
  },
};
