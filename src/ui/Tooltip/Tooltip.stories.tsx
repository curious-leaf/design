import type { Meta, StoryObj } from "@storybook/react"

import { Badge } from "../Badge"

import { Tooltip } from "./Tooltip"

type Story = StoryObj<typeof Tooltip>

// Meta
export default {
  title: "UI/Tooltip",
  component: Tooltip,
  args: {
    ...Tooltip.defaultProps,
  },
  render: props => (
    <Tooltip tooltip="Copy to clipboard" {...props}>
      <Badge>Hover me</Badge>
    </Tooltip>
  ),
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
