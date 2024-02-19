import type { Meta, StoryObj } from "@storybook/react"

import { IconGripVertical } from "./IconGripVertical"

type Story = StoryObj<typeof IconGripVertical>

// Meta
export default {
  title: "Icons/GripVertical",
  component: IconGripVertical,
  args: IconGripVertical.defaultProps,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
