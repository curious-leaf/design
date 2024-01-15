import type { Meta, StoryObj } from "@storybook/react"
import {
  IconChevronRight,
  IconCoins,
  IconCreditCard,
  IconHeadset,
  IconHistory,
  IconReceiptDollar,
  IconSettings,
  IconTable,
  IconWorldDollar,
} from "@tabler/icons-react"

import { Badge } from "~/ui/Badge"
import { Blurb } from "~/ui/Blurb"
import { FeatureCard } from "~/ui/FeatureCard"
import { default as FeatureCardDefault } from "~/ui/FeatureCard/FeatureCard.stories"
import { MenuItem } from "~/ui/MenuItem"

import { Sidebar } from "./Sidebar"

type Story = StoryObj<typeof Sidebar>

const menus = {
  Main: [
    {
      children: "Dashboard",
      prefix: <IconTable />,
      active: true,
    },
    {
      children: "My Cards",
      prefix: <IconCreditCard />,
    },
    {
      children: "Transfer",
      prefix: <IconCoins />,
    },
    {
      children: "Transactions",
      prefix: <IconHistory />,
    },
    {
      children: "Payments",
      prefix: <IconReceiptDollar />,
    },
    {
      children: "Exchange",
      prefix: <IconWorldDollar />,
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
      prefix: <IconSettings />,
    },
    {
      children: "Support",
      prefix: <IconHeadset />,
      loading: true,
    },
  ],
}

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
          {Object.entries(menus).map(([label, items], i) => (
            <Sidebar.Menu key={i}>
              <Sidebar.Heading>{label}</Sidebar.Heading>

              {items.map((item, j) => (
                <MenuItem key={j} {...item} />
              ))}
            </Sidebar.Menu>
          ))}
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
