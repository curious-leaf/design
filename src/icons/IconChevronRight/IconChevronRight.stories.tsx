import type { Meta, StoryObj } from "@storybook/react"

import { IconChevronRight } from "./IconChevronRight"

type Story = StoryObj<typeof IconChevronRight>

// Meta
export default {
  title: "Icons/ChevronRight",
  component: IconChevronRight,
  args: IconChevronRight.defaultProps,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
