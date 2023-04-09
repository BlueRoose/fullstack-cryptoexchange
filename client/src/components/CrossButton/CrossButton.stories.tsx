import type { Meta, StoryObj } from "@storybook/react";
import CrossButton from "./CrossButton";

const meta: Meta<typeof CrossButton> = {
  title: "CrossButton",
  component: CrossButton,
  argTypes: {
    type: {
      description:
        "Makes the button plus or cross(yellow or black) for adding or removing. Also changes button's position",
      options: ["cross", "blackCross", "plus"],
      control: { type: "radio" },
      type: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "plus" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CrossButton>;

export const ItemButton: Story = {};
