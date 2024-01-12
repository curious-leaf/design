import { ProviderStrategyConfiguration, withThemeFromJSXProvider } from "@storybook/addon-themes"
import { defaultTheme, ThemeProvider as Provider } from "../src/providers/ThemeProvider"
import "~/styles/tailwind.css"

const preview = {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
  },
  decorators: [
    // Theme Light/Dark Switcher
    // withThemeByClassName({
    //   themes: {
    //     light: "light",
    //     dark: "dark",
    //   },
    //   defaultTheme: "light",
    // }),

    // Theme Color Switcher
    withThemeFromJSXProvider({
      themes: {
        blue: "blue",
        orange: "orange",
        yellow: "yellow",
        red: "red",
        green: "green",
        purple: "purple",
        pink: "pink",
        teal: "teal",
        gray: "gray",
      } as any as ProviderStrategyConfiguration["themes"],
      defaultTheme,
      Provider,
    }),
  ],
}

export default preview
