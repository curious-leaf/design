import type { Meta, StoryObj } from "@storybook/react"

import { Ping } from "./Ping"

type Story = StoryObj<typeof Ping>

// Meta
export default {
  title: "UI/Ping",
  component: Ping,
  args: {
    ...Ping.defaultProps,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
