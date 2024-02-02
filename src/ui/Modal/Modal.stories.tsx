import type { Meta, StoryObj } from "@storybook/react"

import { Header } from "../../layout/Header"
import { Paragraph } from "../../typography/Paragraph"
import { Button } from "../Button"

import { Modal } from "./Modal"

type Story = StoryObj<typeof Modal>

// Meta
export default {
  title: "UI/Modal",
  component: Modal,
  args: {
    ...Modal.defaultProps,
    children: "Modal content",
    className: "static",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithCustomMarkup = {
  render: (props) => (
    <Modal {...props}>
      <Header title="Confirm your action?" />

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam, quos?
      </Paragraph>

      <Modal.Footer>
        <Button size="lg">Confirm</Button>
      </Modal.Footer>
    </Modal>
  ),
} satisfies Story
