// design-sync buildCmd for Sosek System. Run from the repo root.
//  1. Compiles .design-sync/tailwind.css (theme from src/index.css + utilities
//     used by the synced components, previews and a layout safelist) into
//     pkg/sosek.css, stripping Geist @font-face rules whose relative url()s
//     break once inlined - the font ships via cfg.extraFonts instead.
//  2. Emits .d.ts for the curated entry (pkg/index.ts) into pkg/dts/ and writes
//     pkg/index.d.ts, so the converter can extract real component props.
import { execFileSync } from "node:child_process"
import { readFileSync, writeFileSync, rmSync } from "node:fs"

const run = (cmd, args, cwd) => execFileSync(cmd, args, { cwd, stdio: "inherit" })

run("../.ds-sync/node_modules/.bin/tailwindcss", ["-i", "tailwind.css", "-o", "pkg/sosek.css", "--minify"], ".design-sync")
const css = readFileSync(".design-sync/pkg/sosek.css", "utf8").replace(/@font-face\{[^}]*\}/g, "")
writeFileSync(".design-sync/pkg/sosek.css", css)
console.log(`sosek.css: ${css.length} bytes`)

rmSync(".design-sync/pkg/dts", { recursive: true, force: true })
run("node_modules/.bin/tsc", ["-p", ".design-sync/pkg/tsconfig.dts.json"], ".")
const entry = readFileSync(".design-sync/pkg/index.ts", "utf8")
writeFileSync(".design-sync/pkg/index.d.ts", entry.replaceAll('"../../src/', '"./dts/src/'))
console.log("types: pkg/index.d.ts")
