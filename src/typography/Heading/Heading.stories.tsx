import type { Meta, StoryObj } from "@storybook/react"

import { Heading } from "./Heading"

type Story = StoryObj<typeof Heading>

// Meta
export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    ...Heading.defaultProps,
    children: "The five boxing wizards jump quickly.",
  },
} satisfies Meta

// Stories
export const Heading1 = {
  args: {
    size: "h1",
  },
} satisfies Story

export const Heading2 = {
  args: {
    size: "h2",
  },
} satisfies Story

export const Heading3 = {
  args: {
    size: "h3",
  },
} satisfies Story

export const Heading4 = {
  args: {
    size: "h4",
  },
} satisfies Story

export const Heading5 = {
  args: {
    size: "h5",
  },
} satisfies Story

export const Heading6 = {
  args: {
    size: "h6",
  },
} satisfies Story
