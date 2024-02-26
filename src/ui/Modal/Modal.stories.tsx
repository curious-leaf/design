import type { Meta, StoryObj } from "@storybook/react"

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
    open: true,
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
