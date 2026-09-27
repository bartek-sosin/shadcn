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

## Done (in Sosek System)

- [x] Theme tokens (colors, radius — from `src/index.css`), Geist Variable font
- [x] Button · Badge · Card · Separator · Label · Input · Textarea
- [x] Checkbox · Switch · RadioGroup · Select · Field
- [x] Accordion · Collapsible · Sheet · Drawer · ScrollArea · Resizable (`ResizablePanelGroup`) · AspectRatio
- [x] DropdownMenu · Command · Combobox · InputGroup · InputOTP · NativeSelect · Slider
- [x] Tabs · Table · Avatar · Breadcrumb · Pagination · Skeleton
- [x] Alert · AlertDialog · Dialog · Tooltip · Popover · Toaster (Sonner, + `toast()`)

## To do — proposed batches (reorder freely)

- [ ] **Batch 6 — misc:** Progress · Spinner · Kbd · Toggle · ToggleGroup · ButtonGroup · Empty · Item · HoverCard
- [ ] **Batch 7 — complex:** Calendar · Carousel · Chart · ContextMenu · Menubar · NavigationMenu · Sidebar
- [ ] **Batch 8 — chat/AI kit:** Attachment · Bubble · Message · MessageScroller · Marker · Questionnaire · Direction
