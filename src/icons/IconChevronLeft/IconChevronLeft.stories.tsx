import type { Meta, StoryObj } from "@storybook/react"

import { IconChevronLeft } from "./IconChevronLeft"

type Story = StoryObj<typeof IconChevronLeft>

// Meta
export default {
  title: "Icons/ChevronLeft",
  component: IconChevronLeft,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
