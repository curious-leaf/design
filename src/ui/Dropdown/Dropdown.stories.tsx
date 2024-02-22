import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button"
import { MenuItem } from "../MenuItem"

import { Dropdown } from "./Dropdown"

type Story = StoryObj<typeof Dropdown>

// Meta
export default {
  title: "UI/Dropdown",
  component: Dropdown,
  args: {
    ...Dropdown.defaultProps,
  },
  render: props => (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <Button>Open dropdown</Button>
      </Dropdown.Trigger>

      <Dropdown.Content {...props}>
        <Dropdown.Group>
          <Dropdown.Item asChild>
            <MenuItem>Item 1</MenuItem>
          </Dropdown.Item>
          <Dropdown.Item asChild>
            <MenuItem>Item 2</MenuItem>
          </Dropdown.Item>
          <Dropdown.Item asChild>
            <MenuItem>Item 3</MenuItem>
          </Dropdown.Item>
        </Dropdown.Group>

        <Dropdown.Group>
          <Dropdown.Item asChild>
            <MenuItem>Item 3</MenuItem>
          </Dropdown.Item>
          <Dropdown.Item asChild>
            <MenuItem>Item 4</MenuItem>
          </Dropdown.Item>
        </Dropdown.Group>
      </Dropdown.Content>
    </Dropdown>
  ),
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
