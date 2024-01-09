import type { Meta, StoryObj } from "@storybook/react"
import { IconBolt, IconChevronLeft, IconChevronRight, IconGiftFilled } from "@tabler/icons-react"
import { Badge } from "./Badge"

type Story = StoryObj<typeof Badge>

const themes = [
  "blue",
  "orange",
  "yellow",
  "red",
  "green",
  "purple",
  "pink",
  "teal",
  "gray",
] as const

const variants = ["solid", "soft", "outline"] as const
const shapes = ["rounded", "pill"] as const
const sizes = ["sm", "md", "lg"] as const

// Meta
export default {
  title: "Design/UI/Badge",
  component: Badge,
} satisfies Meta

// Stories
export const Default = {
  args: {
    children: "Badge",
  },
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">Link Badge</a>,
  },
} satisfies Story

export const WithPrefix = {
  args: {
    children: "Badge",
    prefix: <IconBolt />,
  },
} satisfies Story

export const WithSuffix = {
  args: {
    children: "Badge",
    suffix: <IconBolt />,
  },
} satisfies Story

export const AllThemes = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      {themes.map((t) => (
        <Badge key={t} theme={t}>
          Badge
        </Badge>
      ))}
    </div>
  )
}

export const AllVariants = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      {variants.map((v) => (
        <Badge key={v} variant={v}>
          Badge
        </Badge>
      ))}
    </div>
  )
}

export const AllShapes = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      {shapes.map((s) => (
        <Badge key={s} shape={s} prefix={<IconBolt />}>
          Badge {s}
        </Badge>
      ))}
    </div>
  )
}

export const AllSizes = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      {sizes.map((s) => (
        <Badge key={s} size={s} prefix={<IconBolt />}>
          Badge {s}
        </Badge>
      ))}
    </div>
  )
}

export const AllTypes = () => {
  const types = [
    { children: "Badge" },
    { children: "Badge", prefix: <IconChevronLeft />, suffix: <IconChevronRight /> },
    { prefix: <IconGiftFilled /> },
    { children: "2", shape: "rounded" },
  ] as const

  return (
    <div className="flex items-center flex-wrap gap-4">
      {sizes.map((s) => (
        <Badge key={s} size={s} prefix={<IconBolt />}>
          Badge {s}
        </Badge>
      ))}
    </div>
  )
}
