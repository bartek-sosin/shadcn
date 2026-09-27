# Sosek System — sync progress

Claude Design project: **Sosek System** — https://claude.ai/design/p/5455f0ed-02e9-4aa1-a72d-8712fbd207ca

Workflow: many small iterations. Each iteration = one batch below → add its files to
`pkg/index.ts` + `componentSrcMap` in `config.json`, author `previews/<Name>.tsx`, verify, upload.
After each iteration, check cost with `/cost` in Claude Code and note it in the log.

## Iteration log

| # | Date | Components | Result | Cost (fill in from `/cost`) |
|---|------|-----------|--------|------|
| 1 | 2026-09-27 | 12 — setup + core basics + forms | ✅ uploaded, 12/12 graded good; committed | ~150k context |
| 2 | 2026-09-27 | 6 — feedback & overlays | ✅ uploaded, 6/6 graded good; committed | ~35k context |
| 3 | 2026-09-27 | 6 — navigation & data | ✅ uploaded, 6/6 graded good; committed | ~26k context |
| 4 | 2026-09-27 | 7 — menus & inputs | ✅ uploaded, 7/7 graded good; committed | |
| 5 | 2026-09-27 | 7 — layout | ✅ uploaded, 7/7 graded good (AspectRatio fixed once); committed | |
| 6 | 2026-09-27 | 9 — misc | ✅ uploaded, 9/9 graded good; committed | |
| 6b | 2026-09-27 | Icons — 102 curated Lucide icons as `Icons.*` + icon usage in 5 previews | ✅ uploaded, graded good; committed | 4–6b ≈ 92k total |
| 7 | 2026-09-27 | 7 — complex + `Recharts` primitives | ✅ uploaded, 7/7 graded good (NavigationMenu fixed once); committed | |
| 8 | 2026-09-27 | 7 — chat / AI kit | ✅ uploaded, 7/7 graded good (Message + Attachment fixed); committed | |
| 9 | 2026-09-27 | Conventions tidy-up — setup/providers, styling, icons, components by purpose, gotchas | ✅ uploaded (README only); committed | |
| 10 | 2026-09-27 | Theming guide — agent applies pasted shadcn theme code / described changes as variable overrides | ✅ uploaded (README only), override verified on a real card; committed | |
| 11 | 2026-09-27 | "For designers: how to change the look" section at the top of the README | ✅ uploaded (README only); committed | |

## Done (in Sosek System)

- [x] Icons — 102 curated Lucide icons (`window.SosekSystem.Icons.<Name>`, list in `pkg/foundations/icons.ts`)
- [x] Theme tokens (colors, radius — from `src/index.css`), Geist Variable font
- [x] Button · Badge · Card · Separator · Label · Input · Textarea
- [x] Checkbox · Switch · RadioGroup · Select · Field
- [x] Attachment · Bubble · Message · MessageScroller · Marker · Questionnaire · Direction (`DirectionProvider`)
- [x] Calendar · Carousel · Chart (`ChartContainer` + `Recharts.*`) · ContextMenu · Menubar · NavigationMenu · Sidebar (`SidebarProvider`)
- [x] Progress · Spinner · Kbd · Toggle · ToggleGroup · ButtonGroup · Empty · Item · HoverCard
- [x] Accordion · Collapsible · Sheet · Drawer · ScrollArea · Resizable (`ResizablePanelGroup`) · AspectRatio
- [x] DropdownMenu · Command · Combobox · InputGroup · InputOTP · NativeSelect · Slider
- [x] Tabs · Table · Avatar · Breadcrumb · Pagination · Skeleton
- [x] Alert · AlertDialog · Dialog · Tooltip · Popover · Toaster (Sonner, + `toast()`)

## To do

All 61 `src/components/ui` files are in Sosek System (62 cards incl. Icons). Remaining ideas:
- [x] Tidy conventions.md (13k chars, regrouped; every name verified against the build)
- [x] Designer handoff note — "For designers" section at the top of the Sosek System README
- [ ] Select open-state preview

