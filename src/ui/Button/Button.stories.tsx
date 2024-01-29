import type { Meta, StoryObj } from "@storybook/react"
import { IconSquare } from "@tabler/icons-react"

import { Button } from "./Button"

type Story = StoryObj<typeof Button>

// Meta
export default {
  title: "UI/Button",
  component: Button,
  args: {
    ...Button.defaultProps,
    children: "Button",
    disabled: false,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">Link Button</a>,
  },
} satisfies Story

export const WithPrefix = {
  args: {
    prefix: <IconSquare />,
  },
} satisfies Story

export const WithSuffix = {
  args: {
    suffix: <IconSquare />,
  },
} satisfies Story

export const WithIconOnly = {
  args: {
    prefix: <IconSquare />,
    children: null,
  },
} satisfies Story
