# Sosek System — how to build with it

Sosek System is a shadcn/ui (radix-nova style) component set styled with Tailwind v4 utilities and CSS-variable theme tokens. Everything is on `window.SosekSystem` — components, `Icons`, `Recharts` and `toast`. Load `styles.css`; the font is Geist Variable (`font-sans`, already applied to `html`).

## Setup — providers some components need
Most components work standalone. These need a wrapper, once, high in the tree:
- `TooltipProvider` — around anything using `Tooltip`.
- `SidebarProvider` — around `Sidebar` + `SidebarInset` (app shells).
- `MessageScrollerProvider` — around `MessageScroller` (chat threads).
- `<Toaster />` — render once, then call `toast(...)` anywhere.
- `DirectionProvider direction="rtl"` + `dir="rtl"` on the container — right-to-left layouts.

## Changing the theme (colors, radius, font)
All colors and the corner radius are CSS variables that every component reads at runtime, so a theme change is a variable override — never restyle components one by one.
- **The user pastes code from the shadcn theme editor** (it contains `:root { --background: …; --primary: …; --radius: … }` and usually `.dark { … }`, often alongside `@theme inline { … }`, `@import`, `@custom-variant` or `@layer base` blocks): copy **only** the `:root { … }` and `.dark { … }` blocks, verbatim, into a `<style>` that comes **after** `styles.css`. Drop everything else — it is Tailwind build syntax and does nothing here. Keep the values exactly as given (`oklch(…)`, `hsl(…)` or hex); don't convert or "improve" them.
- **The user describes a change in words** ("make primary indigo", "rounder corners"): override just those variables the same way — e.g. `:root { --primary: oklch(0.51 0.23 277); --primary-foreground: oklch(0.98 0 0); --radius: 0.75rem; }`. Keep each `--x` / `--x-foreground` pair readable together.
- Variable names: `--background`, `--foreground`, `--card`, `--popover`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--chart-1…5`, `--sidebar*` (most with a `-foreground` pair), and `--radius`.
- **Font**: set `--font-sans`, and override the two rules that hard-code Geist: `:root { --font-sans: "Inter", sans-serif; } html, .font-sans { font-family: var(--font-sans); }`. Load a non-Geist font first (e.g. a Google Fonts `<link>`); if it can't load, say so rather than silently falling back.
- Afterwards, tell the user in plain words what changed (e.g. "primary is now indigo, corners are rounder").

## Styling: Tailwind utilities + theme tokens
Never hard-code colors — use semantic token classes; they follow light/dark (`.dark` on an ancestor switches theme):
| Purpose | Classes |
|---|---|
| Surfaces | `bg-background`, `bg-card`, `bg-popover`, `bg-muted`, `bg-accent`, `bg-secondary`, `bg-primary` |
| Text | `text-foreground`, `text-muted-foreground`, `text-primary-foreground`, `text-card-foreground`, `text-destructive` |
| Lines | `border`, `border-border`, `border-input`, `rounded-md` / `rounded-lg` / `rounded-xl` (from `--radius`) |
| Layout | `flex`, `grid`, `grid-cols-{1-6,12}`, `gap-{1-24}`, `p-*`, `px-*`, `py-*`, `max-w-{sm…7xl}`, `w-full`, `mx-auto`, `sm:`/`md:`/`lg:` |
| Type | `text-{xs…5xl}`, `font-medium`, `font-semibold`, `tracking-tight` |

Only classes compiled into `styles.css` exist — stick to these families. Arbitrary values like `w-[437px]` won't resolve; use `style={{…}}` for one-offs.

## Icons
A curated Lucide set ships as `Icons`: `<Icons.Search />`, `<Icons.Plus />`, `<Icons.X />`, `<Icons.ChevronDown />`, `<Icons.Settings />`, `<Icons.Trash2 />`… (~100; full list in `components/foundations/Icons/`). **Only these names exist** — don't import `lucide-react`. Inside Button, menu items, InputGroupAddon, Badge etc. icons size themselves; elsewhere use `className="size-4"`. Icon-only button: `<Button size="icon" aria-label="Settings"><Icons.Settings /></Button>`.

## Components
Compounds are built from flat sibling exports (`CardHeader`, not `Card.Header`). `A › B` means B goes inside A.

**Actions & display**
- `Button` `variant="default | secondary | outline | ghost | destructive | link"`, `size="xs | sm | default | lg | icon | icon-xs | icon-sm | icon-lg"`, `asChild`. `ButtonGroup` (`orientation`) joins Buttons/Inputs; `ButtonGroupSeparator`, `ButtonGroupText`.
- `Badge` `variant="default | secondary | outline | destructive | ghost | link"`. `Kbd` / `KbdGroup` for shortcuts. `Spinner` (inline loader). `Progress` `value={0–100}`. `Skeleton` sized blocks (`h-4 w-48`, `rounded-full` for avatars).
- `Toggle` `variant="default | outline"`, `size`, `defaultPressed`. `ToggleGroup` `type="single | multiple"` (`variant`, `spacing`) › `ToggleGroupItem value`.
- `Avatar` (`size="sm | default | lg"`) › `AvatarImage src`, `AvatarFallback` (initials), `AvatarBadge` (status dot); stack in `AvatarGroup` + `AvatarGroupCount` ("+5").
- `Card` (`size="default | sm"`) › `CardHeader` › `CardTitle`, `CardDescription`, `CardAction`; then `CardContent`, `CardFooter`.
- `Alert` (`variant="default | destructive"`) › `AlertTitle`, `AlertDescription`, `AlertAction` (top-right slot).
- `Item` (list/settings rows; `variant="default | outline | muted"`, `size="default | sm | xs"`) › `ItemMedia`, `ItemContent` › `ItemTitle`, `ItemDescription`; `ItemActions`. Stack in `ItemGroup` with `ItemSeparator`.
- `Empty` › `EmptyHeader` › `EmptyMedia variant="icon"`, `EmptyTitle`, `EmptyDescription`; `EmptyContent` for actions.
- `Separator` `orientation="horizontal | vertical"`.

**Forms**
- `FieldSet` › `FieldLegend`, `FieldDescription`, `FieldGroup` › `Field` (`orientation="vertical | horizontal | responsive"`) › `FieldLabel`, the control, `FieldDescription` / `FieldError`. `FieldContent` stacks label + description beside a Switch/Checkbox; `FieldSeparator` between groups. Errors: `data-invalid="true"` on `Field`, `aria-invalid="true"` on the control.
- `Input`, `Textarea`, `Label htmlFor`, `Checkbox`, `Switch` (`size="sm | default"`), `RadioGroup` › `RadioGroupItem value id` (pair each with a `Label`).
- `Select` › `SelectTrigger` (`size`, give it a width like `w-56`) › `SelectValue placeholder`; `SelectContent` › `SelectGroup` › `SelectLabel`, `SelectItem value`, `SelectSeparator`. `NativeSelect` (`size`) › `NativeSelectOption`, `NativeSelectOptGroup`.
- `Combobox` (searchable, Base UI): `<Combobox items={array}>` › `ComboboxInput placeholder` (`showTrigger`, `showClear`), `ComboboxContent` › `ComboboxEmpty`, `ComboboxList` with a render function `{(item) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}`. Multi-select: `ComboboxChips` › `ComboboxChip`, `ComboboxChipsInput`.
- `InputGroup` › `InputGroupAddon` (`align="inline-start | inline-end | block-start | block-end"`) › `InputGroupText` / `InputGroupButton`; the field must be `InputGroupInput` or `InputGroupTextarea`.
- `InputOTP maxLength={6}` › `InputOTPGroup` › `InputOTPSlot index={0…}`; `InputOTPSeparator`. `Slider defaultValue={[50]}` (two values = range), `max`, `step`. `Calendar` `mode="single | range | multiple"`, `selected`, `onSelect`, `defaultMonth`.
- `Questionnaire` (multi-step form, `shortcuts="letters | numbers"`) › `QuestionnaireProgress`, `QuestionnaireItem name` (`required`, `multiple`) › `QuestionnaireTitle`, `QuestionnaireDescription`, `QuestionnaireChoices` › `QuestionnaireChoice value` (+ `QuestionnaireChoiceDescription`) or `QuestionnaireInput`; `QuestionnaireActions` › `QuestionnairePrevious`, `QuestionnaireSkip`, `QuestionnaireNext`, `QuestionnaireSubmit`.

**Overlays** — all accept `open`/`onOpenChange` or `defaultOpen`; triggers take `asChild`.
- `Dialog` › `DialogTrigger`, `DialogContent` (`showCloseButton`) › `DialogHeader` › `DialogTitle`, `DialogDescription`; body; `DialogFooter` with `DialogClose asChild`.
- `AlertDialog` (confirmations) › `AlertDialogTrigger`, `AlertDialogContent` (`size`) › `AlertDialogHeader` › `AlertDialogMedia`, `AlertDialogTitle`, `AlertDialogDescription`; `AlertDialogFooter` › `AlertDialogCancel`, `AlertDialogAction` (Button `variant`/`size`).
- `Sheet` (side panel) › `SheetTrigger`, `SheetContent side="top | right | bottom | left"` › `SheetHeader` › `SheetTitle`, `SheetDescription`; body with `px-4`; `SheetFooter` + `SheetClose`. `Drawer` (bottom sheet) › `DrawerTrigger`, `DrawerContent` › `DrawerHeader` › `DrawerTitle`, `DrawerDescription`; `DrawerFooter` › `DrawerClose`.
- `Popover` › `PopoverTrigger`, `PopoverContent` (width like `w-72`) › `PopoverHeader` › `PopoverTitle`, `PopoverDescription`. `HoverCard` › `HoverCardTrigger`, `HoverCardContent`. `Tooltip` › `TooltipTrigger`, `TooltipContent` (needs `TooltipProvider`).
- Toasts: `toast("Saved")`, `toast.success(title, { description })`, `toast.error(...)` with one `<Toaster position="bottom-right" />`.

**Menus & navigation**
- `DropdownMenu` › `DropdownMenuTrigger`, `DropdownMenuContent` (`w-56`) › `DropdownMenuLabel`, `DropdownMenuGroup` › `DropdownMenuItem` (`variant="destructive"`, `inset`) + `DropdownMenuShortcut`; `DropdownMenuCheckboxItem checked`, `DropdownMenuRadioGroup` › `DropdownMenuRadioItem`, `DropdownMenuSeparator`, `DropdownMenuSub` › `DropdownMenuSubTrigger`, `DropdownMenuSubContent`. `ContextMenu` (`ContextMenuTrigger` = right-click area, `ContextMenuContent` › `ContextMenuItem`…) and `Menubar` (`MenubarMenu` › `MenubarTrigger`, `MenubarContent` › `MenubarItem`…) use the same item API.
- `Command` (inline palette) › `CommandInput`, `CommandList` › `CommandEmpty`, `CommandGroup heading` › `CommandItem` + `CommandShortcut`; `CommandSeparator`. `CommandDialog` = modal version.
- `NavigationMenu` › `NavigationMenuList` › `NavigationMenuItem` › `NavigationMenuTrigger` + `NavigationMenuContent` (mega-menu: a grid of `NavigationMenuLink className="flex-col items-start"`), or a plain `NavigationMenuLink className={navigationMenuTriggerStyle()}`.
- `Tabs defaultValue` › `TabsList` (`variant="default | line"`) › `TabsTrigger value`; `TabsContent value` per tab.
- `Breadcrumb` › `BreadcrumbList` › `BreadcrumbItem` › `BreadcrumbLink href` / `BreadcrumbPage`, with `BreadcrumbSeparator`, `BreadcrumbEllipsis`. `Pagination` › `PaginationContent` › `PaginationItem` › `PaginationPrevious`, `PaginationLink isActive`, `PaginationEllipsis`, `PaginationNext`.
- `Sidebar` (inside `SidebarProvider`, next to `SidebarInset`; `side`, `variant="sidebar | floating | inset"`, `collapsible="offcanvas | icon | none"`) › `SidebarHeader`, `SidebarContent` › `SidebarGroup` › `SidebarGroupLabel`, `SidebarGroupContent` › `SidebarMenu` › `SidebarMenuItem` › `SidebarMenuButton isActive` (icon + `<span>`), `SidebarMenuBadge`, `SidebarMenuSub`; `SidebarFooter`. Put `SidebarTrigger` in the page header.

**Layout**
- `Accordion type="single" collapsible` (or `"multiple"`) › `AccordionItem value` › `AccordionTrigger`, `AccordionContent`. `Collapsible` › `CollapsibleTrigger`, `CollapsibleContent`.
- `ScrollArea` needs a fixed size (`h-56 w-48`); `<ScrollBar orientation="horizontal" />` for horizontal. `AspectRatio ratio={16 / 9}`.
- `ResizablePanelGroup orientation="horizontal | vertical"` › `ResizablePanel defaultSize="30%"` separated by `ResizableHandle withHandle`; nest groups for split layouts.
- `Carousel` (`opts`, `orientation`) › `CarouselContent` › `CarouselItem` (`basis-1/3` = three per view), `CarouselPrevious`, `CarouselNext`.

**Data & charts**
- `Table` › `TableCaption`, `TableHeader` › `TableRow` › `TableHead`; `TableBody` › `TableRow` › `TableCell`; `TableFooter`. Right-align numbers with `text-right`.
- `ChartContainer config={{ desktop: { label: "Desktop", color: "var(--chart-1)" } }} className="h-56 w-full"` wrapping primitives from `Recharts` (`BarChart`, `Bar`, `LineChart`, `Line`, `AreaChart`, `Area`, `PieChart`, `Pie`, `Cell`, `RadarChart`, `Radar`, `RadialBarChart`, `RadialBar`, `XAxis`, `YAxis`, `CartesianGrid`, `LabelList`…). Color series with `var(--color-<key>)`; add `<ChartTooltip content={<ChartTooltipContent />} />` and `<ChartLegend content={<ChartLegendContent />} />`.

**Chat / AI**
- `MessageGroup` › `Message align="start | end"` › `MessageAvatar` (an Avatar), `MessageContent` › `MessageHeader` (name + time), text or a `Bubble`, `MessageFooter` (copy/like/regenerate icon buttons).
- `Bubble` (`variant="default | secondary | muted | tinted | outline | ghost | destructive"`, `align`) › `BubbleContent`, `BubbleReactions`; consecutive bubbles in `BubbleGroup`. Usual pairing: user = `default` + `align="end"`, assistant = `secondary`.
- Thread: `MessageScrollerProvider` › `MessageScroller` (fixed height) › `MessageScrollerViewport` › `MessageScrollerContent` › `MessageScrollerItem messageId` per message; `MessageScrollerButton` jumps to latest.
- `Marker` (`variant="default | separator | border"`) › `MarkerIcon`, `MarkerContent` — status lines ("Thinking…") and date separators.
- `Attachment` (`state="idle | uploading | processing | error | done"`, `size`) › `AttachmentMedia`, `AttachmentContent` › `AttachmentTitle`, `AttachmentDescription`; `AttachmentActions` › `AttachmentAction`. Row them in `AttachmentGroup className="flex-wrap"`.

## Gotchas
- `AspectRatio` inside grid/flex gets stretched — wrap it in a plain `<div>`.
- `ResizablePanel defaultSize`: strings are percent (`"30%"`), numbers are **pixels**.
- `InputGroup` needs `InputGroupInput`/`InputGroupTextarea`, not `Input`/`Textarea`.
- `MessageHeader` and `CardFooter` don't space their children — add `gap-2`.
- `Carousel` arrows sit outside the slides — leave horizontal padding (`px-12`) around it.
- Charts use `--chart-1…5`; in the default neutral theme these are greys.

## Where the truth lives
Tokens are CSS variables in `_ds_bundle.css` (`:root` / `.dark`: `--background`, `--foreground`, `--primary`, `--muted`, `--border`, `--ring`, `--radius`, `--chart-1…5`…). Per-component API: `components/<group>/<Name>/<Name>.d.ts`; usage examples: `<Name>.prompt.md`.

## Example
```jsx
const { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Field, FieldGroup, FieldLabel, Input, Icons } = window.SosekSystem;

<div className="min-h-screen bg-background flex items-center justify-center p-6">
  <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Sign in</CardTitle>
      <CardDescription>Use your work email.</CardDescription>
    </CardHeader>
    <CardContent>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="jane@company.com" />
        </Field>
      </FieldGroup>
    </CardContent>
    <CardFooter>
      <Button className="w-full">
        Continue <Icons.ArrowRight />
      </Button>
    </CardFooter>
  </Card>
</div>
```
