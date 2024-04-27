import type { Meta, StoryObj } from "@storybook/react"

import { NumberInput } from "./NumberInput"

type Story = StoryObj<typeof NumberInput>

// Meta
export default {
  title: "Visual Editor/NumberInput",
  component: NumberInput,
  args: {
    ...NumberInput.defaultProps,
    className: "w-48",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {
    defaultValue: 0,
    min: 0,
    max: 100,
  },
} satisfies Story
