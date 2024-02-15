import type { Meta, StoryObj } from "@storybook/react"

import { IconCheck } from "./IconCheck"

type Story = StoryObj<typeof IconCheck>

// Meta
export default {
  title: "Icons/Check",
  component: IconCheck,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
