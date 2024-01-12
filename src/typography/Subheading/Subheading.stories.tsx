import type { Meta, StoryObj } from "@storybook/react"

import { Subheading } from "./Subheading"

type Story = StoryObj<typeof Subheading>

// Meta
export default {
  title: "Typography/Subheading",
  component: Subheading,
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    ...Subheading.defaultProps,
  },
} satisfies Meta

// Stories
export const Large = {
  args: {
    size: "lg",
  },
} satisfies Story

export const Medium = {
  args: {
    size: "md",
  },
} satisfies Story

export const Small = {
  args: {
    size: "sm",
  },
} satisfies Story

export const ExtraSmall = {
  args: {
    size: "xs",
  },
} satisfies Story
