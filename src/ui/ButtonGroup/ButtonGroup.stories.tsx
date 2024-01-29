import type { Meta, StoryObj } from "@storybook/react"

import type { ButtonGroupProps } from "./ButtonGroup"
import { ButtonGroup } from "./ButtonGroup"

type Story = StoryObj<typeof ButtonGroup>

const buttons = [
  {
    children: "Button 1",
  },
  {
    children: "Button 2",
  },
  {
    children: "Button 2",
  },
] satisfies ButtonGroupProps["buttons"]

// Meta
export default {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  args: {
    ...ButtonGroup.defaultProps,
    buttons,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
