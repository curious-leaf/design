import type { Meta, StoryObj } from "@storybook/react"

import { ProgressRing } from "./ProgressRing"

type Story = StoryObj<typeof ProgressRing>

// Meta
export default {
  title: "UI/ProgressRing",
  component: ProgressRing,
  args: {
    ...ProgressRing.defaultProps,
    percent: 50,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
