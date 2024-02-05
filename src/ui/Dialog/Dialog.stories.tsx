import type { Meta, StoryObj } from "@storybook/react"

import { Header } from "../../layout/Header"
import { Paragraph } from "../../typography/Paragraph"
import { Button } from "../Button"

import { Dialog } from "./Dialog"

type Story = StoryObj<typeof Dialog>

// Meta
export default {
  title: "UI/Dialog",
  component: Dialog,
  args: {
    ...Dialog.defaultProps,
    children: "Dialog content",
    className: "static",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithCustomMarkup = {
  render: (props) => (
    <Dialog {...props}>
      <Dialog.Panel>
        <Header title="Confirm your action?" />

        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quos?
        </Paragraph>
      </Dialog.Panel>

      <Dialog.Footer>
        <Button size="lg">Confirm</Button>
      </Dialog.Footer>
    </Dialog>
  ),
} satisfies Story
