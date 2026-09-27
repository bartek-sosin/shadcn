# design-sync notes — Sosek System

- This is a Vite **app** repo (no dist/, no .d.ts). `.design-sync/pkg/` is a package wrapper the converter
  builds from: `pkg/index.ts` is the curated entry (only components already in Sosek System), and
  `node .design-sync/build.mjs` (cfg.buildCmd) generates `pkg/sosek.css` + `pkg/dts/` + `pkg/index.d.ts`.
  **Always run buildCmd before the converter** — previews add Tailwind classes, and new components need types.
- Config paths are relative to `.design-sync/pkg/` (the package dir), hence the `../../` prefixes.
- Tailwind: `.design-sync/tailwind.css` compiles `src/index.css` with sources = `src/components/ui`,
  `previews/`, plus an `@source inline(...)` safelist of layout/token utilities for the design agent.
  Classes outside that set don't exist in designs; conventions.md tells the agent so. Extend the
  safelist there if designers need more.
- Geist @font-face rules are stripped from the compiled CSS (their relative urls break) and shipped
  via `extraFonts` from `node_modules/@fontsource-variable/geist/index.css`.
- shadcn exports sub-parts flat (CardHeader, SelectItem…), so the converter treats them as components.
  They are excluded as cards via `componentSrcMap: null` (still in the bundle) and documented in
  conventions.md + parent previews. **When adding a batch, null-out its new sub-part exports** (build log
  "components: N" should equal the number of real components).
- Playwright 1.62.1 matches the cached chromium-1234 (installed into `.ds-sync/` with
  PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1). Tailwind CLI 4.3.3 also lives in `.ds-sync/`.
- Overlay components (Dialog, Popover, Select open state…) need `overrides.<Name>: {"cardMode":"single","viewport":"WxH"}`
  to render open inside the card. Batch 1 skipped Select's open state.

## Known render warns
- `[TOKENS_MISSING]` 22 vars (`--radix-*`, `--available-height`, `--anchor-width`, `--sidebar-width`…): set at
  runtime by Radix/components — expected.

## Re-sync risks
- `pkg/index.ts` and `componentSrcMap` must stay in sync; a component in one but not the other is silently missing.
- The layout safelist in tailwind.css is a guess at what designs need — watch for unstyled designs.
- Toolchain pinned by what was installed 2026-09-27 (Tailwind 4.3.3, playwright 1.62.1, TypeScript ~6.0).
