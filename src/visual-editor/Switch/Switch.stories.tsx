import type { Meta, StoryObj } from "@storybook/react"

import { IconUser } from "../../icons/IconUser"
import { Switch } from "./Switch"

type Story = StoryObj<typeof Switch>

// Meta
export default {
  title: "Visual Editor/Switch",
  component: Switch,
  args: {
    ...Switch.defaultProps,
    name: "radio",
    className: "w-48",
    options: [
      { value: "solid", icon: <IconUser />, title: "Solid" },
      { value: "dashed", icon: <IconUser />, title: "Dashed" },
      { value: "dotted", icon: <IconUser />, title: "Dotted" },
    ],
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
