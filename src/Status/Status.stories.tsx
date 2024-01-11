import type { Meta, StoryObj } from "@storybook/react"
import { IconPointFilled } from "@tabler/icons-react"
import { Status } from "./Status"

type Story = StoryObj<typeof Status>

// Meta
export default {
  title: "Design/UI/Status",
  component: Status,
} satisfies Meta

// Stories
export const Default = {
  args: {
    children: "Status",
    prefix: <IconPointFilled />,
  },
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">Status</a>,
  },
} satisfies Story
