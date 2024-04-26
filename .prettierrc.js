/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig | TailwindConfig } */
export default {
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: false,
  trailingComma: "all",
  jsxSingleQuote: false,
  plugins: ["prettier-plugin-tailwindcss"],
}
