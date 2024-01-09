import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import { dts } from "rollup-plugin-dts"

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from "node:module"
const requireFile = createRequire(import.meta.url)
const packageJson = requireFile("./package.json")

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript()],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
]
