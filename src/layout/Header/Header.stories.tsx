import type { Meta, StoryObj } from "@storybook/react"
import { BellRing, Calendar, Plus, Search, Table } from "lucide-react"

import { Button } from "../../ui/Button"

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
      children: <Table />,
      variant: "outline",
      theme: "gray",
    },
    title: "Insert page title here",
    description: "Insert page description here",
    children: (
      <div className="flex items-center gap-3">
        <Button theme="gray" variant="ghost" prefix={<Search />} />
        <Button theme="gray" variant="ghost" prefix={<BellRing />} />
        <Button theme="gray" variant="outline" prefix={<Calendar />}>
          Schedule
        </Button>
        <Button prefix={<Plus />}>Create Request</Button>
      </div>
    ),
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
