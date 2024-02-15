import type { Meta, StoryObj } from "@storybook/react"

import { IconBullet } from "../../icons/IconBullet"
import { IconUser } from "../../icons/IconUser"

import { Badge } from "./Badge"

type Story = StoryObj<typeof Badge>

// Meta
export default {
  title: "UI/Badge",
  component: Badge,
  args: {
    ...Badge.defaultProps,
    children: "Badge",
  },
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">Link Badge</a>,
  },
} satisfies Story

export const WithPrefix = {
  args: {
    prefix: <IconUser />,
  },
} satisfies Story

export const WithSuffix = {
  args: {
    suffix: <IconUser />,
  },
} satisfies Story

export const WithStatus = {
  args: {
    theme: "gray",
    variant: "outline",
    prefix: <IconBullet style={{ color: "blue" }} />,
  },
} satisfies Story

export const WithIconOnly = {
  args: {
    prefix: <IconUser />,
    children: null,
  },
} satisfies Story
