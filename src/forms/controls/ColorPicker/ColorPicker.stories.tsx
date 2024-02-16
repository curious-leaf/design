import type { Meta, StoryObj } from "@storybook/react"

import { ColorPicker } from "./ColorPicker"

type Story = StoryObj<typeof ColorPicker>

// Meta
export default {
  title: "Form Control/ColorPicker",
  component: ColorPicker,
  args: {
    ...ColorPicker.defaultProps,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
