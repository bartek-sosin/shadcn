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
  to render open inside the card (batch 2: Dialog, AlertDialog, Popover, Tooltip, Toaster use `defaultOpen` /
  a `toast()` in useEffect). Select's open state is still not shown (closed states only).
- Sonner: the card is named `Toaster` (the export); `pkg/index.ts` also re-exports `toast` from `sonner`.
- Table uses `overrides.Table: {"cardMode":"column"}` (full-width card).
- Uploads since batch 3 send only `upload.components` from the verdict + bundle/css/README (fonts/_vendor unchanged).
- DropdownMenu/Combobox use cardMode single + `defaultOpen` (DropdownMenu also `modal={false}`). Combobox is Base UI (`items` + render-function list).
- Resizable's card is `ResizablePanelGroup` (no `Resizable` export); react-resizable-panels v4: `orientation`, `defaultSize="30%"` (numbers = px).
- AspectRatio inside grid/flex gets stretched — wrap it in a plain div.
- Adding exports can shift generated .d.ts of existing components (render unchanged) — they re-upload, no regrade.
- Review sheets: `python3 .design-sync/montage.py <out.png> Name1 Name2…` builds one compact image to grade from (cheaper than reading each sheet).
- Re-sync: fetch `_ds_sync.json` from the project into `.design-sync/.cache/remote-sync.json`, then run the
  driver with `--remote` — unchanged components skip re-grading.

## Known render warns
- `[TOKENS_MISSING]` 22 vars (`--radix-*`, `--available-height`, `--anchor-width`, `--sidebar-width`…): set at
  runtime by Radix/components — expected.

## Re-sync risks
- `pkg/index.ts` and `componentSrcMap` must stay in sync; a component in one but not the other is silently missing.
- The layout safelist in tailwind.css is a guess at what designs need — watch for unstyled designs.
- Toolchain pinned by what was installed 2026-09-27 (Tailwind 4.3.3, playwright 1.62.1, TypeScript ~6.0).
