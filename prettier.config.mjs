import { fileURLToPath } from "url"

/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig | TailwindConfig } */
const config = {
  jsxSingleQuote: false,
  singleQuote: false,
  semi: false,
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 100,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: fileURLToPath(new URL("tailwind.config.js", import.meta.url)),
}

export default config
