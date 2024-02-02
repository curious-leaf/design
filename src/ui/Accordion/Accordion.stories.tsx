import type { Meta, StoryObj } from "@storybook/react"

import { H5 } from "../../typography/Heading"
import { Prose } from "../../typography/Prose"

import { Accordion } from "./Accordion"

type Story = StoryObj<typeof Accordion>

// Meta
export default {
  title: "UI/Accordion",
  component: Accordion,
  args: {
    ...Accordion.defaultProps,
    style: { width: 300 },
    children: (
      <Accordion.Item value="1">
        <Accordion.Trigger className="flex items-center justify-between">
          <H5>Accordion Trigger</H5>
        </Accordion.Trigger>

        <Accordion.Content asChild>
          <Prose size="sm">
            Excepteur quis Lorem ad labore excepteur qui. Ut aliquip officia dolor pariatur nulla.
            Amet dolore veniam commodo irure id. Aliqua anim mollit ullamco eiusmod do ad. Non
            commodo est amet. Velit eu eu nostrud. Culpa ullamco aliqua ex. Duis ipsum in incididunt
            laboris.
          </Prose>
        </Accordion.Content>
      </Accordion.Item>
    ),
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
