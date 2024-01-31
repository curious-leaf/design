import type { Meta, StoryObj } from "@storybook/react"

import { default as SeriesStory } from "../../ui/Series/Series.stories"

import { Header } from "./Header"

type Story = StoryObj<typeof Header>

// Meta
export default {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "padded",
  },
  args: {
    ...Header.defaultProps,
    title: "Page title here",
    description: "Insert page description here",
    children: SeriesStory.args.children,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
