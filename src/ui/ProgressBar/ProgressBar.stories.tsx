import type { Meta, StoryObj } from "@storybook/react"

import { Paragraph } from "~/typography/Paragraph"

import { ProgressBar } from "./ProgressBar"

type Story = StoryObj<typeof ProgressBar>

// Meta
export default {
  title: "UI/ProgressBar",
  component: ProgressBar,
  args: {
    ...ProgressBar.defaultProps,
    style: { width: 240 },
    percent: 50,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithHint = {
  args: {
    percent: 90,
    hint: "90%",
  },
} satisfies Story

export const WithLabel = {
  args: {
    percent: 20,
    label: "Data Storage",
  },
} satisfies Story

export const WithLabelAndHint = {
  args: {
    percent: 20,
    label: "Data Storage",
    hint: "20%",
  },
} satisfies Story

export const WithChildren = {
  args: {
    percent: 20,
    label: "Data Storage",
    hint: "20%",
    children: (
      <Paragraph size="xs" className="opacity-60">
        Upgrade to unlock unlimited date storage.
      </Paragraph>
    ),
  },
} satisfies Story

export const WithCustomMarkup = {
  args: {
    percent: 20,
  },

  render: ({ percent, theme, ...props }) => (
    <ProgressBar.Root {...props}>
      <ProgressBar.Bar percent={percent} theme={theme} className="w-full flex-none" />
      <ProgressBar.Hint>20%</ProgressBar.Hint>
      <ProgressBar.Label>Custom Markup</ProgressBar.Label>
    </ProgressBar.Root>
  ),
} satisfies Story
