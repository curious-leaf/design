import type { Meta, StoryObj } from "@storybook/react"

import { IconChevronDown } from "./IconChevronDown"

type Story = StoryObj<typeof IconChevronDown>

// Meta
export default {
  title: "Icons/ChevronDown",
  component: IconChevronDown,
  args: IconChevronDown.defaultProps,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
