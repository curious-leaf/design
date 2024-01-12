import type { Meta, StoryObj } from "@storybook/react"
import { IconBolt } from "@tabler/icons-react"

import { Button } from "./Button"

type Story = StoryObj<typeof Button>

// Meta
export default {
  title: "UI/Button",
  component: Button,
} satisfies Meta

// Stories
export const Default = {
  args: {
    ...Button.defaultProps,
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
    prefix: <IconBolt />,
  },
} satisfies Story

export const WithSuffix = {
  args: {
    suffix: <IconBolt />,
  },
} satisfies Story
