import type { Meta, StoryObj } from "@storybook/react"

import { Status } from "./Status"

type Story = StoryObj<typeof Status>

// Meta
export default {
  title: "UI/Status",
  component: Status,
  args: {
    ...Status.defaultProps,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithTheme = {
  args: {
    theme: "red",
  },
} satisfies Story

export const WithVariant = {
  args: {
    variant: "twoThirds",
  },
} satisfies Story
