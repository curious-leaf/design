import type { Meta, StoryObj } from "@storybook/react"

import { IconCheckerboard } from "./IconCheckerboard"

type Story = StoryObj<typeof IconCheckerboard>

// Meta
export default {
  title: "Icons/Checkerboard",
  component: IconCheckerboard,
  args: IconCheckerboard.defaultProps,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
