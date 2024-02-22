import type { Meta, StoryObj } from "@storybook/react"

import { IconChevronRight } from "../../icons/IconChevronRight"
import { IconUser } from "../../icons/IconUser"
import { Badge } from "../../ui/Badge"
import { Blurb } from "../../ui/Blurb"
import { FeatureCard } from "../../ui/FeatureCard"
import { default as FeatureCardDefault } from "../../ui/FeatureCard/FeatureCard.stories"
import { MenuItem } from "../../ui/MenuItem"
import { Shortcut } from "../../ui/Shortcut"

import { Sidebar } from "./Sidebar"

type Story = StoryObj<typeof Sidebar>

const menus = {
  Main: [
    {
      children: "Dashboard",
      prefix: <IconUser />,
      active: true,
    },
    {
      children: "My Cards",
      prefix: <IconUser />,
    },
    {
      children: "Transfer",
      prefix: <IconUser />,
    },
    {
      children: "Transactions",
      prefix: <IconUser />,
    },
    {
      children: "Payments",
      prefix: <IconUser />,
    },
    {
      children: "Exchange",
      prefix: <IconUser />,
      suffix: (
        <Badge theme="gray" variant="soft">
          Soon
        </Badge>
      ),
      disabled: true,
    },
  ],

  Other: [
    {
      children: "Settings",
      prefix: <IconUser />,
      suffix: <Shortcut>⌘K</Shortcut>,
    },
    {
      children: "Support",
      prefix: <IconUser />,
      isPending: true,
    },
  ],
}

// Meta
export default {
  title: "Layout/Sidebar",
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
            size: "lg",
          }}
          title="Synergy"
          description="Finance & Banking"
        />

        <Sidebar.Separator />

        <Sidebar.Content>
          {Object.entries(menus).map(([label, items], i) => (
            <Sidebar.Menu key={i}>
              <Sidebar.Heading>{label}</Sidebar.Heading>

              {items.map((item, j) => (
                <MenuItem key={j} {...item} />
              ))}
            </Sidebar.Menu>
          ))}
        </Sidebar.Content>

        <FeatureCard theme="secondary" variant="soft" isCloseable>
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
          <button type="button" className="ml-2 rounded border p-0.5 text-xs">
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
