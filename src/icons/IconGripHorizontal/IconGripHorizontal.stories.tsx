import type { Meta, StoryObj } from "@storybook/react"

import { IconGripHorizontal } from "./IconGripHorizontal"

type Story = StoryObj<typeof IconGripHorizontal>

// Meta
export default {
  title: "Icons/GripHorizontal",
  component: IconGripHorizontal,
  args: IconGripHorizontal.defaultProps,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
