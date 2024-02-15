import type { Meta, StoryObj } from "@storybook/react"

import { IconUser } from "../../icons/IconUser"

import type { AvatarGroupProps } from "./AvatarGroup"
import { AvatarGroup } from "./AvatarGroup"

type Story = StoryObj<typeof AvatarGroup>

const items = [
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop",
    alt: "Avatar 1",
  },
  {
    src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?q=80&w=250&h=250&auto=format&fit=crop",
    alt: "Avatar 2",
  },
  {
    src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=250&h=250&auto=format&fit=crop",
    alt: "Avatar 2",
  },
] satisfies AvatarGroupProps["items"]

// Meta
export default {
  title: "UI/AvatarGroup",
  component: AvatarGroup,
  args: {
    ...AvatarGroup.defaultProps,
    items,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithLabel = {
  args: {
    label: "+3",
  },
} satisfies Story

export const WithCustomLabel = {
  args: {
    label: <IconUser />,
  },
} satisfies Story

export const WithPreviousOnTop = {
  args: {
    label: "+3",
    previousOnTop: true,
  },
} satisfies Story

export const WithCustomMarkup = {
  render: (props) => (
    <AvatarGroup.Root {...props} size="lg">
      {items.map((item, i) => (
        <AvatarGroup.Item key={i} size="lg" {...item} />
      ))}

      <AvatarGroup.Label size="lg" className="z-40 from-blue to-blue px-3 text-white">
        42k likes
      </AvatarGroup.Label>

      {items.reverse().map((item, i) => (
        <AvatarGroup.Item key={i} size="lg" style={{ zIndex: items.length - i }} {...item} />
      ))}
    </AvatarGroup.Root>
  ),
} satisfies Story
