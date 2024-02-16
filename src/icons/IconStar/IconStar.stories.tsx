import type { Meta, StoryObj } from "@storybook/react"

import { IconStar } from "./IconStar"

type Story = StoryObj<typeof IconStar>

// Meta
export default {
  title: "Icons/Star",
  component: IconStar,
  args: IconStar.defaultProps,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
