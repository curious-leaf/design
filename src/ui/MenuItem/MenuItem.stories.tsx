import type { Meta, StoryObj } from "@storybook/react"
import { TableIcon, ChevronsRightIcon } from "lucide-react"

import { MenuItem } from "./MenuItem"

type Story = StoryObj<typeof MenuItem>

// Meta
export default {
  title: "UI/MenuItem",
  component: MenuItem,
  args: {
    ...MenuItem.defaultProps,
    style: { width: 200 },
    children: "Dashboard",
    prefix: <TableIcon />,
    suffix: <ChevronsRightIcon />,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
