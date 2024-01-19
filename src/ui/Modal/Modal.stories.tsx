import type { Meta, StoryObj } from "@storybook/react"

import { Paragraph } from "~/typography/Paragraph"
import { Button } from "~/ui/Button"

import { Modal } from "./Modal"

type Story = StoryObj<typeof Modal>

// Meta
export default {
  title: "UI/Modal",
  component: Modal,
  args: {
    ...Modal.defaultProps,
    children: "Modal content",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithCustomMarkup = {
  render: (props) => (
    <Modal.Root {...props}>
      <Modal.Header title="Confirm your action?" size="lg" />

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam, quos?
      </Paragraph>

      <Modal.Footer>
        <Button>Confirm</Button>
      </Modal.Footer>
    </Modal.Root>
  ),
} satisfies Story
