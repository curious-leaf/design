import type { Meta, StoryObj } from "@storybook/react"

import { Tabs } from "./Tabs"

type Story = StoryObj<typeof Tabs>

// Meta
export default {
  title: "UI/Tabs",
  component: Tabs,
  args: {
    ...Tabs.defaultProps,
    style: { width: 400, height: 100 },
  },
  render: (props) => (
    <Tabs defaultValue="tab1" {...props}>
      <Tabs.List aria-label="tabs example">
        <Tabs.Trigger value="tab1">Tab One</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab Two</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab Three</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab Three</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab Three</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab Three</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab Three</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab Three</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab Three</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab Three</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab Three</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab Three</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab1">Tab one content</Tabs.Content>
      <Tabs.Content value="tab2">Tab two content</Tabs.Content>
      <Tabs.Content value="tab3">Tab three content</Tabs.Content>
    </Tabs>
  ),
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
