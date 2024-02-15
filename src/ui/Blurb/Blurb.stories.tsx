import type { Meta, StoryObj } from "@storybook/react"

import { IconUser } from "../../icons/IconUser"

import { Blurb } from "./Blurb"

type Story = StoryObj<typeof Blurb>

// Meta
export default {
  title: "UI/Blurb",
  component: Blurb,
  args: {
    ...Blurb.defaultProps,
    avatar: {
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop",
    },
    title: "John Doe",
    description: "Software Engineer",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithInitials = {
  args: {
    avatar: {
      initials: "John Doe",
    },
  },
} satisfies Story

export const WithCustomMarkup = {
  render: ({ avatar, title, description }) => (
    <Blurb.Root className="rounded-md border p-3">
      <IconUser className="text-xs" />

      <Blurb.Content>
        <Blurb.Description>{description}</Blurb.Description>
        <Blurb.Title>{title}</Blurb.Title>
      </Blurb.Content>

      <Blurb.Avatar {...avatar} />
    </Blurb.Root>
  ),
} satisfies Story
