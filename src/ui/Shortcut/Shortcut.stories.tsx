import type { Meta, StoryObj } from "@storybook/react"

import { Shortcut } from "./Shortcut"

type Story = StoryObj<typeof Shortcut>

// Meta
export default {
  title: "UI/Shortcut",
  component: Shortcut,
  args: {
    ...Shortcut.defaultProps,
    children: "⌘K",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">⌘K</a>,
  },
} satisfies Story
