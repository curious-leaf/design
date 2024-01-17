import type { Meta, StoryObj } from "@storybook/react"

import { Container } from "./Container"

type Story = StoryObj<typeof Container>

// Meta
export default {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: "padded",
  },
  args: {
    ...Container.defaultProps,
    children: "Container",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
