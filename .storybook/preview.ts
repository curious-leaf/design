import { Preview } from "@storybook/react"
import "~/styles/tailwind.css"

const preview = {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
  },
} satisfies Preview

export default preview
