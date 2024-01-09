import type { Meta, StoryObj } from "@storybook/react"
import { Dot } from "./Dot"

type Story = StoryObj<typeof Dot>

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

const sizes = ["sm", "md", "lg"] as const
const variants = ["solid", "soft", "outline"] as const

// Meta
export default {
  title: "Design System/Dot",
  component: Dot,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/" />,
  },
} satisfies Story

export const AllSizes = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      {sizes.map((s) => (
        <Dot key={s} size={s} />
      ))}
    </div>
  )
}

export const AllThemes = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      {themes.map((t) => (
        <Dot key={t} theme={t} />
      ))}
    </div>
  )
}

export const AllVariants = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      {variants.map((v) => (
        <Dot key={v} variant={v} />
      ))}
    </div>
  )
}
