import type { Meta, StoryObj } from "@storybook/react"
import { IconBolt } from "@tabler/icons-react"

import { Button } from "./Button"

type Story = StoryObj<typeof Button>

// Meta
export default {
  title: "Design/UI/Button",
  component: Button,
} satisfies Meta

// Stories
export const Default = {
  args: {
    children: "Button",
    disabled: false,
  },
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">Link Button</a>,
  },
} satisfies Story

export const WithPrefix = {
  args: {
    children: "Button",
    prefix: <IconBolt />,
  },
} satisfies Story

export const WithSuffix = {
  args: {
    children: "Button",
    suffix: <IconBolt />,
  },
} satisfies Story
