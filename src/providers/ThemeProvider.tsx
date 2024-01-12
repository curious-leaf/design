/* eslint react-refresh/only-export-components: 0 */
import { type PropsWithChildren } from "react"

import { createSimpleContext } from "~/shared/providers"

export type Theme =
  | "blue"
  | "orange"
  | "yellow"
  | "red"
  | "green"
  | "purple"
  | "pink"
  | "teal"
  | "gray"

type ThemeProviderProps = PropsWithChildren<{
  theme?: Theme
}>

const ThemeContext = createSimpleContext<Theme | undefined>("Theme")

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = ThemeContext.useOptionalValue

export const defaultTheme: Theme = "blue"
