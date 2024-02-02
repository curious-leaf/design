import type { Meta, StoryObj } from "@storybook/react"

import { RadioGroup } from "./RadioGroup"

type Story = StoryObj<typeof RadioGroup>

// Meta
export default {
  title: "Form Control/RadioGroup",
  component: RadioGroup,
  args: {
    ...RadioGroup.defaultProps,
    name: "radio",
    defaultValue: "1",
    className: "flex gap-2",
    children: (
      <>
        <RadioGroup.Item value="1" />
        <RadioGroup.Item value="2" />
        <RadioGroup.Item value="3" />
      </>
    ),
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
