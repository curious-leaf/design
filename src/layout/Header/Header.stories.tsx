import type { Meta, StoryObj } from "@storybook/react"
import { IconBellRinging, IconCalendar, IconPlus, IconSearch, IconTable } from "@tabler/icons-react"

import { Button } from "~/ui/Button"

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
    size: "lg",
    avatar: {
      children: <IconTable />,
      variant: "outline",
      theme: "gray",
    },
    title: "Insert page title here",
    description: "Insert page description here",
    children: (
      <div className="flex items-center gap-3">
        <Button theme="gray" variant="ghost" prefix={<IconSearch />} />
        <Button theme="gray" variant="ghost" prefix={<IconBellRinging />} />
        <Button theme="gray" variant="outline" prefix={<IconCalendar />}>
          Schedule
        </Button>
        <Button prefix={<IconPlus />}>Create Request</Button>
      </div>
    ),
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
