import type { Meta, StoryObj } from "@storybook/react"

import { Select } from "./Select"

type Story = StoryObj<typeof Select>

// Meta
export default {
  title: "Form Control/Select",
  component: Select,
  args: {
    ...Select.defaultProps,
    style: { width: 300 },
    options: [
      { label: "One", value: "1" },
      { label: "Two", value: "2" },
      { label: "Three", value: "3" },
    ],
  },
} satisfies Meta

// Stories
export const Default = {
  args: {
    name: "radio",
    defaultValue: "1",
    className: "flex gap-2",
  },
} satisfies Story
