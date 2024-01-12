import { babel } from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import { createRequire } from "node:module"
import { dts } from "rollup-plugin-dts"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import { exec } from "node:child_process"
import { promisify } from "node:util"

const requireFile = createRequire(import.meta.url)
const packageJson = requireFile("./package.json")

// Resolve typescript aliases
const tscAlias = () => ({
  buildStart: async () => {
    await promisify(exec)("tsc-alias")
  },
})

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
      peerDepsExternal(),
      typescript(),
      nodeResolve(),
      commonjs(),
      terser(),
      babel({
        babelHelpers: "bundled",
        extensions: [".ts", ".tsx"],
        exclude: "node_modules/**",
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [tscAlias(), dts()],
  },
]
