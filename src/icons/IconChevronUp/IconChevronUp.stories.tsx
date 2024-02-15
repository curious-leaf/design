import type { Meta, StoryObj } from "@storybook/react"

import { IconChevronUp } from "./IconChevronUp"

type Story = StoryObj<typeof IconChevronUp>

// Meta
export default {
  title: "Icons/ChevronUp",
  component: IconChevronUp,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
