import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  resolve: {
    alias: { "~": path.resolve(__dirname, "./src") },
    extensions: [".mdx", ".mjs", ".ts", ".tsx", ".js", ".jsx"],
  },
})
