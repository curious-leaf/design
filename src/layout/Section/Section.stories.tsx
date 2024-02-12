import type { Meta, StoryObj } from "@storybook/react"

import { Section } from "./Section"

type Story = StoryObj<typeof Section>

// Meta
export default {
  title: "Layout/Section",
  component: Section,
  parameters: {
    layout: "padded",
  },
  args: {
    ...Section.defaultProps,
    children: "Section",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
