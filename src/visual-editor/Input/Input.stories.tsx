import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "./Input"

type Story = StoryObj<typeof Input>

// Meta
export default {
  title: "Visual Editor/Input",
  component: Input,
  args: {
    ...Input.defaultProps,
    className: "w-48",
    placeholder: "Type here...",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
