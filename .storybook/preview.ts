import { withThemeByClassName } from "@storybook/addon-themes"
import "../src/styles/tailwind.css"

const preview = {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        order: ["Layout", "Typography", "UI", "Form Control", "Form UI", "Icons", "Utils"],
      },
    },
  },
  decorators: [
    // Theme Light/Dark Switcher
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
}

export default preview
