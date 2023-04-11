import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  argTypes: {
    type: {
      description:
        "Changes the width and the type of the button of the button.",
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
  args: {
    type: "short",
    children: "Click",
  },
};

export const CrossButton: Story = {
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
    children: {
      description: "Labels value",
      defaultValue: "+",
      type: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "+" },
      },
    },
  },
  args: {
    type: "plus",
    children: "+",
  },
};

export const PaginationButton: Story = {
  argTypes: {
    type: {
      description:
        "Changes depending on the current page. Makes bigger and changes color on active page",
      options: ["active", "common"],
      control: { type: "radio" },
      type: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "common" },
      },
    },
    children: {
      description: "Labels value",
      defaultValue: "1",
      type: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "1" },
      },
    },
  },
  args: {
    type: "common",
    children: "1",
  },
};
