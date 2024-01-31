import type { Meta, StoryObj } from "@storybook/react"
import { IconBellRinging, IconCalendar, IconPlus, IconSearch } from "@tabler/icons-react"

import { Button } from "../Button"

import { Series } from "./Series"

type Story = StoryObj<typeof Series>

// Meta
export default {
  title: "UI/Series",
  component: Series,
  args: {
    ...Series.defaultProps,
    children: (
      <>
        <Button theme="secondary" variant="ghost" prefix={<IconSearch />} />
        <Button theme="secondary" variant="ghost" prefix={<IconBellRinging />} />
        <Button theme="secondary" variant="outline" prefix={<IconCalendar />}>
          Schedule
        </Button>
        <Button prefix={<IconPlus />}>Create Request</Button>
      </>
    ),
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
