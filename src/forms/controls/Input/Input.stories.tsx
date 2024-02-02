import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "./Input"

type Story = StoryObj<typeof Input>

// Meta
export default {
  title: "Form Control/Input",
  component: Input,
  args: {
    ...Input.defaultProps,
    placeholder: "Type here...",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
