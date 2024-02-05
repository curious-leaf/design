import type { Meta, StoryObj } from "@storybook/react"
import { IconTable, IconChevronsRight } from "@tabler/icons-react"

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
    prefix: <IconTable />,
    suffix: <IconChevronsRight />,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
