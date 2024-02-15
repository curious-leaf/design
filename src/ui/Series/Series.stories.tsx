import type { Meta, StoryObj } from "@storybook/react"

import { IconClose } from "../../icons/IconClose"
import { IconUser } from "../../icons/IconUser"
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
        <Button theme="secondary" variant="ghost" prefix={<IconUser />} />
        <Button theme="secondary" variant="ghost" prefix={<IconUser />} />
        <Button theme="secondary" variant="outline" prefix={<IconUser />}>
          Schedule
        </Button>
        <Button prefix={<IconClose />}>Create Request</Button>
      </>
    ),
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
