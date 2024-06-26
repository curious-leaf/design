import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "./Input"
import { Affix } from "../../ui/Affix"
import { IconUser } from "../../../icons/IconUser"

type Story = StoryObj<typeof Input>

// Meta
export default {
  title: "Form Control/Input",
  component: Input,
  args: {
    ...Input.defaultProps,
    placeholder: "Type here...",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithAffix = {
  args: {},
  render: props => (
    <Affix prefix={<IconUser />} suffix={<span>Suffix</span>}>
      <Input {...props} />
    </Affix>
  ),
} satisfies Story
