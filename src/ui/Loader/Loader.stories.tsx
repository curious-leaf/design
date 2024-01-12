import type { Meta, StoryObj } from "@storybook/react"

import { Loader } from "./Loader"

type Story = StoryObj<typeof Loader>

// Meta
export default {
  title: "UI/Loader",
  component: Loader,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
