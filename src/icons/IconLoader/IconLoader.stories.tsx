import type { Meta, StoryObj } from "@storybook/react"

import { IconLoader } from "./IconLoader"

type Story = StoryObj<typeof IconLoader>

// Meta
export default {
  title: "Icons/Loader",
  component: IconLoader,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
