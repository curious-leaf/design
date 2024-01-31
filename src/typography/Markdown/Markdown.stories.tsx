import type { Meta, StoryObj } from "@storybook/react"

import { Markdown } from "./Markdown"

type Story = StoryObj<typeof Markdown>

const content = `
## Welcome to our Markdown Editor

This is a simple example of using Markdown to create rich text content.

### Features

- Easy formatting with simple syntax
- Support for headers, lists, and more
- **Bold text**
- *Italic text*
- [Link to our website](https://www.example.com)
- \`Inline code\`

\`\`\`
// Code block
function greet(name) {
  return "Hello, " + name + "!";
}
\`\`\`

> Blockquote

Try it out and see how easy it is to create beautiful content with Markdown!
`

// Meta
export default {
  title: "Typography/Markdown",
  component: Markdown,
  args: {
    ...Markdown.defaultProps,
    content,
  },
} satisfies Meta

// Stories
export const Large = {
  args: {
    size: "lg",
  },
} satisfies Story

export const Medium = {
  args: {
    size: "md",
  },
} satisfies Story

export const Small = {
  args: {
    size: "sm",
  },
} satisfies Story
