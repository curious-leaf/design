/// <reference types="bun-types" />

const { outputs } = await Bun.build({
  entrypoints: ["./src/index.ts"],
  format: "esm",
  outdir: "./dist",
  external: ["react", "react-dom"],
  minify: true,
})

for (const output of outputs) {
  const bytes = await output.arrayBuffer()
  const prefix = '"use client"\n\n'
  await Bun.write(output.path, [prefix, bytes])
}

export {}
