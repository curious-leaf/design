import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import { createRequire } from "node:module"
import { dts } from "rollup-plugin-dts"
import analyze from "rollup-plugin-analyzer"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import { exec } from "node:child_process"
import { promisify } from "node:util"

const requireFile = createRequire(import.meta.url)
const pkg = requireFile("./package.json")

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`)
  return (id) => pattern.test(id)
}

// Resolve typescript aliases
const tscAlias = () => ({
  buildStart: async () => {
    await promisify(exec)("tsc-alias")
  },
})

const outputOptions = {
  exports: "named",
  banner: `'use client';`,
  sourcemap: true,
  interop: "auto",
}

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        ...outputOptions,
      },
      {
        file: pkg.module,
        format: "esm",
        ...outputOptions,
      },
    ],

    plugins: [
      peerDepsExternal(),
      typescript(),
      nodeResolve(),
      commonjs(),
      terser({ compress: { directives: false } }),
      analyze({ hideDeps: true, limit: 0, summaryOnly: true }),
    ],

    external: makeExternalPredicate([
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ]),
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [tscAlias(), dts()],
  },
]
