import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    type: {
      description: "Changes the width of the button.",
      options: ["short", "long"],
      control: { type: "radio" },
      type: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "long" },
      },
    },
    children: {
      description: "Labels value",
      defaultValue: "Click",
      type: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Click" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const YellowButton: Story = {};
