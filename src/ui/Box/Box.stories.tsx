import type { Meta, StoryObj } from "@storybook/react"

import { Paragraph } from "~/typography/Paragraph"
import { Button } from "~/ui/Button"

import { Box } from "./Box"

type Story = StoryObj<typeof Box>

// Meta
export default {
  title: "UI/Box",
  component: Box,
  parameters: {
    layout: "padded",
  },
  args: {
    ...Box.defaultProps,
    children: "Box content",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithCustomMarkup = {
  render: (props) => (
    <Box.Root {...props}>
      <Box.Header title="Confirm your action?" size="lg" />

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam, quos?
      </Paragraph>

      <Box.Footer>
        <Button>Confirm</Button>
      </Box.Footer>
    </Box.Root>
  ),
} satisfies Story
