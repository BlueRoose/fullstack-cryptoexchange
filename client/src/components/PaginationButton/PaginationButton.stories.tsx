import type { Meta, StoryObj } from "@storybook/react";
import PaginationButton from "./PaginationButton";

const meta: Meta<typeof PaginationButton> = {
  title: "PaginationButton",
  component: PaginationButton,
  argTypes: {
    type: {
      description:
        "Changes depending on the current page. Makes bigger and changes color on active page",
      options: ["active", "common"],
      control: { type: "radio" },
      type: "string",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "active" },
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
};

export default meta;
type Story = StoryObj<typeof PaginationButton>;

export const PaginationItem: Story = {};
