import type { Meta, StoryObj } from "@storybook/react"

import { FeatureCard } from "~/ui/FeatureCard"
import { default as FeatureCardDefault } from "~/ui/FeatureCard/FeatureCard.stories"

import { Sidebar } from "./Sidebar"

type Story = StoryObj<typeof Sidebar>

// Meta
export default {
  title: "UI/Sidebar",
  component: Sidebar,
  args: {
    ...Sidebar.defaultProps,
    children: (
      <>
        Witam
        <Sidebar.Separator />
        <div className="flex-1" />
        <FeatureCard theme="gray" variant="outline" closer>
          {FeatureCardDefault.args.children}
        </FeatureCard>
        <Sidebar.Separator />
        Żegnam
      </>
    ),
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
