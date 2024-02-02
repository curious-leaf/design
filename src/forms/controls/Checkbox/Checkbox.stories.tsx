import type { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "./Checkbox"

type Story = StoryObj<typeof Checkbox>

// Meta
export default {
  title: "Form Control/Checkbox",
  component: Checkbox,
  args: {
    ...Checkbox.defaultProps,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
