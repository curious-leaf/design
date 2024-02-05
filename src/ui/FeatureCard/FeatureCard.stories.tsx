import type { Meta, StoryObj } from "@storybook/react"
import { IconHeadset, IconSquareX } from "@tabler/icons-react"

import { Paragraph } from "../../typography/Paragraph"

import { FeatureCard } from "./FeatureCard"

type Story = StoryObj<typeof FeatureCard>

const Card = (
  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-3">
    <IconHeadset />
    <Paragraph variant="medium">Need support?</Paragraph>

    <Paragraph size="sm" className="w-full opacity-60">
      Contact with one of our experts to get support.
    </Paragraph>
  </div>
)

// Meta
export default {
  title: "UI/FeatureCard",
  component: FeatureCard,
  args: {
    ...FeatureCard.defaultProps,
    children: Card,
    style: { width: 240 },
    closeable: true,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    closeable: false,
    children: <a href="/">{Card}</a>,
  },
} satisfies Story

export const WithCustomMarkup = {
  args: {
    closeable: undefined,
  },

  render: (props) => (
    <FeatureCard.Root {...props}>
      {Card}

      <FeatureCard.Closer asChild className="text-base">
        <button>
          <IconSquareX />
        </button>
      </FeatureCard.Closer>
    </FeatureCard.Root>
  ),
} satisfies Story
