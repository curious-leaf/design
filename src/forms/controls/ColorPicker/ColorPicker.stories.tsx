import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { ColorPicker } from "./ColorPicker"

type Story = StoryObj<typeof ColorPicker>

// Meta
export default {
  title: "Form Control/ColorPicker",
  component: ColorPicker,
  args: {
    ...ColorPicker.defaultProps,
  },
} satisfies Meta

// Stories
export const Default = {
  render: props => {
    const [color, setColor] = useState(props.color)
    return <ColorPicker color={color} onChange={({ hexa }) => setColor(hexa)} {...props} />
  },
} satisfies Story
