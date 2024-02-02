import type { Meta, StoryObj } from "@storybook/react"

import { TextArea } from "./TextArea"

type Story = StoryObj<typeof TextArea>

// Meta
export default {
  title: "Form Control/TextArea",
  component: TextArea,
  args: {
    ...TextArea.defaultProps,
    placeholder: "Type here...",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
