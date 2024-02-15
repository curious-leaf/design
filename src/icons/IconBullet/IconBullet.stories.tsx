import type { Meta, StoryObj } from "@storybook/react"

import { IconBullet } from "./IconBullet"

type Story = StoryObj<typeof IconBullet>

// Meta
export default {
  title: "Icons/Bullet",
  component: IconBullet,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
