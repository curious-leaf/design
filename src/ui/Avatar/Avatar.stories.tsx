import type { Meta, StoryObj } from "@storybook/react"

import { IconUser } from "../../icons/IconUser"
import { Dot } from "../Dot"

import { Avatar } from "./Avatar"

type Story = StoryObj<typeof Avatar>

// Meta
export default {
  title: "UI/Avatar",
  component: Avatar,
  args: {
    ...Avatar.defaultProps,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {
    src: "https://i.pravatar.cc/150?img=3",
  },
} satisfies Story

export const WithInitials = {
  args: {
    initials: "Piotr Kulpinski",
  },
} satisfies Story

export const WithFallback = {
  args: {},
} satisfies Story

export const WithChildrenFallback = {
  args: {
    children: <IconUser />,
  },
} satisfies Story

export const WithTopStatus = {
  args: {
    src: "https://i.pravatar.cc/150?img=1",
    topStatus: <IconUser className="-m-[7.5%] bg-white text-teal" />,
  },
} satisfies Story

export const WithBottomStatus = {
  args: {
    src: "https://i.pravatar.cc/150?img=2",
    bottomStatus: <Dot className="text-red" />,
  },
} satisfies Story

export const WithCustomMarkup = {
  render: () => (
    <Avatar.Root size="lg" shape="rounded" className="outline outline-offset-4 outline-teal">
      <Avatar.Image src="https://i.pravatar.cc/150?img=5" />
      <Avatar.Fallback />
      <Avatar.Status className="-m-2 bg-white text-teal ring-0">
        <IconUser />
      </Avatar.Status>
    </Avatar.Root>
  ),
} satisfies Story
