/** @type {import("prettier").Config} */
const config = {
  jsxSingleQuote: false,
  singleQuote: false,
  semi: false,
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 100,
  importOrder: ["^react$", "<THIRD_PARTY_MODULES>", "^~/(.*)$", "^[./]"],
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
}

export default config
