const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")

/** @type {import('eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },

  // Base config
  extends: ["eslint:recommended", "plugin:storybook/recommended"],

  // Ignore
  ignorePatterns: ["node_modules", "/dist"],

  overrides: [
    // General
    {
      files: ["*.js?(x)", "*.ts?(x)"],
      extends: ["eslint:recommended", "prettier"],
    },

    // React
    {
      files: ["*.js?(x)", "*.ts?(x)"],
      plugins: ["react", "react-refresh", "jsx-a11y"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      settings: {
        react: {
          version: "detect",
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
      },
      rules: {
        "react-refresh/only-export-components": ["warn", { allowExportNames: ["metadata"] }],
        "react/display-name": "off",
        "react-hooks/exhaustive-deps": "off",
        "jsx-a11y/heading-has-content": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/anchor-has-content": "off",
        "jsx-a11y/control-has-associated-label": "off",
      },
    },

    // Typescript
    {
      files: ["*.ts?(x)"],
      plugins: ["@typescript-eslint", "import"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/stylistic",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
      settings: {
        "import/internal-regex": "^~/",
        "import/resolver": {
          typescript: {
            project,
            alwaysTryTypes: true,
          },
          node: {
            extensions: [".ts", ".tsx"],
          },
        },
      },
      rules: {
        "import/namespace": [2, { allowComputed: true }],
        "import/no-unresolved": "off",
        "import/order": [
          "error",
          {
            alphabetize: { caseInsensitive: true, order: "asc" },
            groups: ["builtin", "external", "internal", "parent", "sibling"],
            "newlines-between": "always",
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          { prefer: "type-imports", fixStyle: "separate-type-imports" },
        ],
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },

    // Node
    {
      files: [".eslintrc.js", "mocks/**/*.js"],
      env: {
        node: true,
      },
    },
  ],
}
