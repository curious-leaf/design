import type { Meta, StoryObj } from "@storybook/react"
import { IconBolt } from "@tabler/icons-react"

import { Badge } from "./Badge"

type Story = StoryObj<typeof Badge>

// Meta
export default {
  title: "Design/UI/Badge",
  component: Badge,
} satisfies Meta

// Stories
export const Default = {
  args: {
    children: "Badge",
  },
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">Link Badge</a>,
  },
} satisfies Story

export const WithPrefix = {
  args: {
    children: "Badge",
    prefix: <IconBolt />,
  },
} satisfies Story

export const WithSuffix = {
  args: {
    children: "Badge",
    suffix: <IconBolt />,
  },
} satisfies Story
