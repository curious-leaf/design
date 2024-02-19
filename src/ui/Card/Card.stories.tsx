import type { Meta, StoryObj } from "@storybook/react"

import { Header } from "../../layout/Header"
import { Paragraph } from "../../typography/Paragraph"
import { Button } from "../Button"

import { Card } from "./Card"

type Story = StoryObj<typeof Card>

// Meta
export default {
  title: "UI/Card",
  component: Card,
  args: {
    ...Card.defaultProps,
    children: "Card content",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithCustomMarkup = {
  render: (props) => (
    <Card {...props}>
      <Card.Panel>
        <Header title="Confirm your action?" />

        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quos?
        </Paragraph>
      </Card.Panel>

      <Card.Row>
        <Button size="lg">Confirm</Button>
      </Card.Row>
    </Card>
  ),
} satisfies Story
