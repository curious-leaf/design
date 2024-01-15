import type { Meta, StoryObj } from "@storybook/react"
import { IconChevronRight } from "@tabler/icons-react"

import { Blurb } from "~/ui/Blurb"
import { FeatureCard } from "~/ui/FeatureCard"
import { default as FeatureCardDefault } from "~/ui/FeatureCard/FeatureCard.stories"

import { Sidebar } from "./Sidebar"

type Story = StoryObj<typeof Sidebar>

// Meta
export default {
  title: "UI/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    ...Sidebar.defaultProps,
    children: (
      <>
        <Blurb
          avatar={{
            src: "https://uilogos.co/img/logomark/earth.png",
            theme: "green",
            size: "lg",
          }}
          title="Synergy"
          description="Finance & Banking"
        />

        <Sidebar.Separator />

        <Sidebar.Content>
          <Sidebar.Menu>
            <Sidebar.Heading>Main</Sidebar.Heading>
          </Sidebar.Menu>

          <Sidebar.Menu>
            <Sidebar.Heading>Other</Sidebar.Heading>
          </Sidebar.Menu>
        </Sidebar.Content>

        <FeatureCard theme="gray" closer>
          {FeatureCardDefault.args.children}
        </FeatureCard>

        <Sidebar.Separator />

        <Blurb
          avatar={{
            src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop",
            size: "lg",
          }}
          title="John Doe"
          description="Software Engineer"
        >
          <button className="ml-2 rounded border p-0.5 text-xs">
            <IconChevronRight />
          </button>
        </Blurb>
      </>
    ),
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
