import type { Meta, StoryObj } from "@storybook/react"
import { IconPointFilled } from "@tabler/icons-react"

import { Status } from "./Status"

type Story = StoryObj<typeof Status>

// Meta
export default {
  title: "UI/Status",
  component: Status,
  args: {
    ...Status.defaultProps,
    children: "Status",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {
    prefix: <IconPointFilled />,
  },
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">Status</a>,
  },
} satisfies Story
