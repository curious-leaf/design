import type { Meta, StoryObj } from "@storybook/react"

import { IconTrash } from "./IconTrash"

type Story = StoryObj<typeof IconTrash>

// Meta
export default {
  title: "Icons/Trash",
  component: IconTrash,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
