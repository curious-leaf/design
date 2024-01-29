import { withThemeByClassName } from "@storybook/addon-themes"
import "~/styles/tailwind.css"

const preview = {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
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
