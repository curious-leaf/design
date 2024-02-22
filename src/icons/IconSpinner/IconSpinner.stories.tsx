import type { Meta, StoryObj } from "@storybook/react"

import { IconSpinner } from "./IconSpinner"

type Story = StoryObj<typeof IconSpinner>

// Meta
export default {
  title: "Icons/Spinner",
  component: IconSpinner,
  args: IconSpinner.defaultProps,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
