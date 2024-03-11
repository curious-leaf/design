import type { Meta, StoryObj } from "@storybook/react"

import { Plan } from "./Plan"

type Story = StoryObj<typeof Plan>

// Meta
export default {
  title: "UI/Plan",
  component: Plan,
  args: {
    ...Plan.defaultProps,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
