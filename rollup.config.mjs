import { babel } from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import { createRequire } from "node:module"
import { dts } from "rollup-plugin-dts"
import peerDepsExternal from "rollup-plugin-peer-deps-external"

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
    plugins: [
      typescript(),
      peerDepsExternal(),
      resolve({
        extensions: [".ts", ".tsx"],
        preferBuiltins: true,
      }),
      commonjs(),
      terser(),
      babel({
        extensions: [".ts", ".tsx"],
        exclude: "node_modules/**",
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
]
