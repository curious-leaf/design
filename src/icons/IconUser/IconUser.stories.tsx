import type { Meta, StoryObj } from "@storybook/react"

import { IconUser } from "./IconUser"

type Story = StoryObj<typeof IconUser>

// Meta
export default {
  title: "Icons/User",
  component: IconUser,
  args: IconUser.defaultProps,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
