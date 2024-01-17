import type { Meta, StoryObj } from "@storybook/react"
import { AppleIcon } from "lucide-react"

import { Badge } from "./Badge"

type Story = StoryObj<typeof Badge>

// Meta
export default {
  title: "UI/Badge",
  component: Badge,
  args: {
    ...Badge.defaultProps,
    children: "Badge",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">Link Badge</a>,
  },
} satisfies Story

export const WithPrefix = {
  args: {
    prefix: <AppleIcon />,
  },
} satisfies Story

export const WithSuffix = {
  args: {
    suffix: <AppleIcon />,
  },
} satisfies Story
