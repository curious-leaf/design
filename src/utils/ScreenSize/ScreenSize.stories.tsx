import type { Meta, StoryObj } from "@storybook/react"

import { ScreenSize } from "./ScreenSize"

type Story = StoryObj<typeof ScreenSize>

// Meta
export default {
  title: "Utils/ScreenSize",
  component: ScreenSize,
  args: {
    ...ScreenSize.defaultProps,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
