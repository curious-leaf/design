import type { Meta, StoryObj } from "@storybook/react"

import { Switch } from "./Switch"

type Story = StoryObj<typeof Switch>

// Meta
export default {
  title: "Form Control/Switch",
  component: Switch,
  args: {
    ...Switch.defaultProps,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
