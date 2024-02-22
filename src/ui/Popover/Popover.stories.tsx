import type { Meta, StoryObj } from "@storybook/react"

import { Paragraph } from "../../typography/Paragraph"
import { Badge } from "../Badge"

import { Popover } from "./Popover"

type Story = StoryObj<typeof Popover>

// Meta
export default {
  title: "UI/Popover",
  component: Popover,
  args: {
    ...Popover.defaultProps,
  },
  render: props => (
    <Popover popover="Fugiat esse reprehenderit aliqua ea ad est." {...props}>
      <Badge>Click me</Badge>
    </Popover>
  ),
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithCustomMarkup = {
  args: {
    align: "start",
    side: "right",
  },
  render: props => (
    <Popover
      {...props}
      popover={
        <div className="flex">
          <Paragraph size="sm">
            Consequat aute labore est labore enim ut ullamco irure sint ea tempor consectetur.
          </Paragraph>

          <Popover.Close />
        </div>
      }
    >
      <Badge>Click me</Badge>
    </Popover>
  ),
} satisfies Story
