import type { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "./Avatar"
import { IconDiscountCheckFilled, IconUsers } from "@tabler/icons-react"
import { Dot } from "~/Dot"

type Story = StoryObj<typeof Avatar>

// Meta
export default {
  title: "Design/UI/Avatar",
  component: Avatar,
} satisfies Meta

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
    children: <IconUsers />,
  },
} satisfies Story

export const WithTopStatus = {
  args: {
    src: "https://i.pravatar.cc/150?img=1",
    topStatus: <IconDiscountCheckFilled className="text-teal bg-white -m-[7.5%]" />,
  },
} satisfies Story

export const WithBottomStatus = {
  args: {
    src: "https://i.pravatar.cc/150?img=2",
    bottomStatus: <Dot theme="red" size="lg" />,
  },
} satisfies Story

export const WithCustomMarkup = {
  render: () => (
    <Avatar.Root size="lg" shape="rounded" className="outline outline-offset-2 outline-teal">
      <Avatar.Image src="https://i.pravatar.cc/150?img=5" />
      <Avatar.Fallback />
      <Avatar.Status className="bg-white text-teal ring-0 -m-2">
        <IconDiscountCheckFilled />
      </Avatar.Status>
    </Avatar.Root>
  ),
} satisfies Story
