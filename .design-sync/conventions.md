# Sosek System — how to build with it

Sosek System is a shadcn/ui (radix-nova style) component set, restyled via CSS variables and Tailwind v4 utility classes. Components are exposed on `window.SosekSystem`. **No provider or wrapper is needed** — load `styles.css` and use components directly. Font: Geist Variable (`font-sans`, applied to `html` by default).

## Compose with sub-parts (flat exports, not dotted)
Compound components are built from sibling exports that ship in the same bundle:
- **Card**: `Card` (`size="default" | "sm"`) › `CardHeader` › `CardTitle`, `CardDescription`, `CardAction`; then `CardContent`, `CardFooter`.
- **Field** (form layout): `FieldSet` › `FieldLegend`, `FieldDescription`, `FieldGroup` › `Field` (`orientation="vertical" | "horizontal" | "responsive"`) › `FieldLabel`, control, `FieldDescription` / `FieldError`. Use `FieldContent` to stack label + description beside a Switch/Checkbox; `FieldSeparator` between groups. Mark errors with `data-invalid="true"` on `Field` and `aria-invalid="true"` on the control.
- **Select**: `Select` › `SelectTrigger` (`size="default" | "sm"`, set a width like `w-56`) › `SelectValue placeholder="…"`; `SelectContent` › `SelectGroup` › `SelectLabel`, `SelectItem value="…"`, `SelectSeparator`.
- **RadioGroup** › `RadioGroupItem value="…" id="…"` paired with `Label htmlFor`.
- **Alert** (`variant="default" | "destructive"`) › `AlertTitle`, `AlertDescription`, optional `AlertAction` (top-right slot, e.g. a small Button).
- **Dialog** › `DialogTrigger asChild` + `DialogContent` (`showCloseButton`, default true) › `DialogHeader` › `DialogTitle`, `DialogDescription`; body; `DialogFooter` with `DialogClose asChild`. Control with `open`/`onOpenChange` or `defaultOpen`.
- **AlertDialog** (confirmations) › `AlertDialogTrigger asChild`, `AlertDialogContent` (`size="default" | "sm"`) › `AlertDialogHeader` › `AlertDialogMedia` (optional icon), `AlertDialogTitle`, `AlertDialogDescription`; `AlertDialogFooter` › `AlertDialogCancel`, `AlertDialogAction` (both take Button `variant`/`size`).
- **Popover** › `PopoverTrigger asChild`, `PopoverContent` (set a width like `w-72`) › `PopoverHeader` › `PopoverTitle`, `PopoverDescription`.
- **Tooltip** — **requires `TooltipProvider`** (wrap the app or section once): `TooltipProvider` › `Tooltip` › `TooltipTrigger asChild`, `TooltipContent`.
- **Toasts**: render `<Toaster />` once (e.g. `position="bottom-right"`), then call `toast("Saved")`, `toast.success(title, { description })`, `toast.error(...)` — `toast` is exported from `window.SosekSystem`.
- **Tabs** › `TabsList` (`variant="default" | "line"`) › `TabsTrigger value="…"`; then `TabsContent value="…"` per tab. Set `defaultValue` on `Tabs`.
- **Table** › `TableCaption`, `TableHeader` › `TableRow` › `TableHead`; `TableBody` › `TableRow` › `TableCell`; optional `TableFooter`. Right-align numbers with `text-right`.
- **Avatar** (`size="sm" | "default" | "lg"`) › `AvatarImage src`, `AvatarFallback` (initials), optional `AvatarBadge` (status dot). Stack with `AvatarGroup` + `AvatarGroupCount` ("+5").
- **Breadcrumb** › `BreadcrumbList` › `BreadcrumbItem` › `BreadcrumbLink href` / `BreadcrumbPage` (current), separated by `BreadcrumbSeparator`; `BreadcrumbEllipsis` for collapsed levels.
- **Pagination** › `PaginationContent` › `PaginationItem` › `PaginationPrevious`, `PaginationLink href isActive`, `PaginationEllipsis`, `PaginationNext`.
- **Skeleton**: sized placeholder blocks — `<Skeleton className="h-4 w-48" />`, `rounded-full` for avatars.
- **DropdownMenu** › `DropdownMenuTrigger asChild`, `DropdownMenuContent` (e.g. `w-56`) › `DropdownMenuLabel`, `DropdownMenuGroup` › `DropdownMenuItem` (`variant="destructive"`, `inset`) + `DropdownMenuShortcut`; `DropdownMenuCheckboxItem checked`, `DropdownMenuRadioGroup` › `DropdownMenuRadioItem`, `DropdownMenuSeparator`, `DropdownMenuSub` › `DropdownMenuSubTrigger` / `DropdownMenuSubContent`.
- **Command** (inline palette/search list) › `CommandInput placeholder`, `CommandList` › `CommandEmpty`, `CommandGroup heading="…"` › `CommandItem` + `CommandShortcut`; `CommandSeparator`. `CommandDialog` wraps it in a modal.
- **Combobox** (searchable select, Base UI): `<Combobox items={array} defaultValue>` › `ComboboxInput placeholder` (`showTrigger`, `showClear`), `ComboboxContent` › `ComboboxEmpty`, `ComboboxList` with a render function `{(item) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}`. Multi-select: `ComboboxChips` › `ComboboxChip`, `ComboboxChipsInput`.
- **InputGroup** › `InputGroupAddon` (`align="inline-start" | "inline-end" | "block-start" | "block-end"`) › `InputGroupText` / `InputGroupButton`; the field is `InputGroupInput` or `InputGroupTextarea` (not plain Input).
- **InputOTP** `maxLength={6}` › `InputOTPGroup` › `InputOTPSlot index={0…}`; `InputOTPSeparator` between groups.
- **NativeSelect** (`size="sm" | "default"`) › `NativeSelectOption value`, `NativeSelectOptGroup label`. **Slider** `defaultValue={[50]}` (two values = range), `max`, `step`.
- **Accordion** `type="single" collapsible` (or `type="multiple"`), `defaultValue` › `AccordionItem value` › `AccordionTrigger`, `AccordionContent`. **Collapsible** › `CollapsibleTrigger asChild`, `CollapsibleContent`.
- **Sheet** (side panel) › `SheetTrigger asChild`, `SheetContent side="top | right | bottom | left"` › `SheetHeader` › `SheetTitle`, `SheetDescription`; body (add `px-4`); `SheetFooter` with `SheetClose asChild`. **Drawer** (bottom sheet, Vaul) › `DrawerTrigger`, `DrawerContent` › `DrawerHeader` › `DrawerTitle`, `DrawerDescription`; `DrawerFooter` › `DrawerClose`.
- **ScrollArea** with a fixed size (`h-56 w-48`); add `<ScrollBar orientation="horizontal" />` for horizontal scrolling. **AspectRatio** `ratio={16 / 9}` — wrap it in a plain div inside grids/flex so it isn't stretched.
- **Resizable**: `ResizablePanelGroup orientation="horizontal | vertical"` › `ResizablePanel defaultSize="30%"` (strings = percent, numbers = pixels) separated by `ResizableHandle withHandle`; nest groups for split layouts.
- **Item** (list rows/settings rows; `variant="default" | "outline" | "muted"`, `size="default" | "sm" | "xs"`) › `ItemMedia` (avatar/icon), `ItemContent` › `ItemTitle`, `ItemDescription`; `ItemActions` (buttons/badges). Stack in `ItemGroup` with `ItemSeparator`.
- **Empty** (empty states) › `EmptyHeader` › `EmptyMedia variant="icon"`, `EmptyTitle`, `EmptyDescription`; `EmptyContent` for actions.
- **ButtonGroup** (`orientation="horizontal" | "vertical"`) joins Buttons/Inputs; `ButtonGroupSeparator`, `ButtonGroupText` (static label). **ToggleGroup** `type="single" | "multiple"` (`variant`, `size`, `spacing`) › `ToggleGroupItem value`. **Toggle** `variant="default" | "outline"`, `size="sm" | "default" | "lg"`, `defaultPressed`.
- **HoverCard** › `HoverCardTrigger asChild`, `HoverCardContent`. **Progress** `value={0–100}`. **Spinner** (inline loader, size via `size-6`). **Kbd** / `KbdGroup` for shortcuts.
- **Sidebar** (app shell) — **requires `SidebarProvider`** around `Sidebar` + `SidebarInset` (page content). `Sidebar` (`side`, `variant="sidebar | floating | inset"`, `collapsible="offcanvas | icon | none"`) › `SidebarHeader`, `SidebarContent` › `SidebarGroup` › `SidebarGroupLabel`, `SidebarGroupContent` › `SidebarMenu` › `SidebarMenuItem` › `SidebarMenuButton isActive` (icon + `<span>`), `SidebarMenuBadge`, `SidebarMenuSub`; `SidebarFooter`. Put `SidebarTrigger` in the page header.
- **Charts**: `ChartContainer config={{ key: { label, color: "var(--chart-1)" } }} className="h-56 w-full"` wrapping Recharts primitives from `window.SosekSystem.Recharts` (`BarChart`, `Bar`, `LineChart`, `Line`, `AreaChart`, `Area`, `PieChart`, `Pie`, `Cell`, `RadarChart`, `Radar`, `RadialBarChart`, `RadialBar`, `XAxis`, `YAxis`, `CartesianGrid`, `LabelList`…). Color series with `var(--color-<key>)`; add `<ChartTooltip content={<ChartTooltipContent />} />` and `<ChartLegend content={<ChartLegendContent />} />`.
- **Calendar** `mode="single" | "range" | "multiple"`, `selected`, `onSelect`, `defaultMonth`. **Carousel** (`opts`, `orientation`) › `CarouselContent` › `CarouselItem` (`basis-1/3` for several per view), `CarouselPrevious`, `CarouselNext` (leave horizontal padding for the arrows).
- **Menubar** › `MenubarMenu` › `MenubarTrigger`, `MenubarContent` › `MenubarItem` + `MenubarShortcut`, `MenubarCheckboxItem`, `MenubarSeparator`, `MenubarSub`. **ContextMenu** › `ContextMenuTrigger` (the right-click area), `ContextMenuContent` › `ContextMenuItem` (same item API as DropdownMenu).
- **NavigationMenu** › `NavigationMenuList` › `NavigationMenuItem` › `NavigationMenuTrigger` + `NavigationMenuContent` (mega-menu; put a grid inside, links with `className="flex-col items-start"`), or a plain `NavigationMenuLink className={navigationMenuTriggerStyle()}`.
- **Chat / AI kit** — compose a conversation from these:
  - `MessageGroup` › `Message align="start | end"` › `MessageAvatar` (an Avatar), `MessageContent` › `MessageHeader` (name + time, add `gap-2`), text or `Bubble`, `MessageFooter` (icon buttons: copy/like/regenerate).
  - `Bubble` (`variant="default | secondary | muted | tinted | outline | ghost | destructive"`, `align`) › `BubbleContent`; optional `BubbleReactions`; consecutive bubbles in `BubbleGroup`. Typical: user = `default` + `align="end"`, assistant = `secondary`.
  - Scrolling thread: `MessageScrollerProvider` › `MessageScroller` (fixed height) › `MessageScrollerViewport` › `MessageScrollerContent` › `MessageScrollerItem messageId` per message; `MessageScrollerButton` (jump to latest).
  - `Marker` (`variant="default | separator | border"`) › `MarkerIcon`, `MarkerContent` — status lines ("Thinking…", "Searched 12 docs") and date separators.
  - `Attachment` (`state="idle | uploading | processing | error | done"`, `size`, `orientation`) › `AttachmentMedia` (icon/image), `AttachmentContent` › `AttachmentTitle`, `AttachmentDescription`; `AttachmentActions` › `AttachmentAction`. Row them in `AttachmentGroup` (`flex-wrap` to wrap).
  - `Questionnaire` (multi-step form, `shortcuts="letters | numbers"`) › `QuestionnaireProgress`, `QuestionnaireItem name` (`required`, `multiple`) › `QuestionnaireTitle`, `QuestionnaireDescription`, `QuestionnaireChoices` › `QuestionnaireChoice value` (+ `QuestionnaireChoiceDescription`) or `QuestionnaireInput`; `QuestionnaireActions` › `QuestionnairePrevious`, `QuestionnaireSkip`, `QuestionnaireNext`, `QuestionnaireSubmit`.
- **RTL**: wrap in `DirectionProvider direction="rtl"` and set `dir="rtl"` on the container.

Variant props: `Button variant="default | secondary | outline | ghost | destructive | link"`, `size="xs | sm | default | lg | icon | icon-xs | icon-sm | icon-lg"`, `asChild`; `Badge variant="default | secondary | outline | destructive | ghost | link"`; `Switch size="sm | default"`; `Separator orientation="horizontal | vertical"`.

## Icons
A curated Lucide set ships as `Icons` (`const { Icons } = window.SosekSystem`): `<Icons.Search />`, `<Icons.Plus />`, `<Icons.X />`, `<Icons.ChevronDown />`, `<Icons.Settings />`, `<Icons.Trash2 />`… — full list with previews in `components/foundations/Icons/`. **Only these ~100 names exist**; don't import `lucide-react`. Inside Button, DropdownMenuItem, InputGroupAddon, Badge etc. icons size themselves (16px); elsewhere use `className="size-4"` / `size-5`. Icon-only buttons: `<Button size="icon" aria-label="…"><Icons.Settings /></Button>`.

## Styling idiom: Tailwind utilities + theme tokens
Never hard-code colors — use the semantic token classes, which follow light/dark themes (`.dark` on an ancestor switches to dark):
| Purpose | Classes |
|---|---|
| Surfaces | `bg-background`, `bg-card`, `bg-popover`, `bg-muted`, `bg-accent`, `bg-secondary`, `bg-primary` |
| Text | `text-foreground`, `text-muted-foreground`, `text-primary-foreground`, `text-card-foreground`, `text-destructive` |
| Lines | `border`, `border-border`, `border-input`, `rounded-md` / `rounded-lg` / `rounded-xl` (derived from `--radius`) |
| Layout | `flex`, `grid`, `grid-cols-{1-6,12}`, `gap-{1-24}`, `p-*`, `px-*`, `py-*`, `max-w-{sm…7xl}`, `w-full`, `mx-auto`, `sm:`/`md:`/`lg:` breakpoints |
| Type | `text-{xs…5xl}`, `font-medium`, `font-semibold`, `tracking-tight` |

Only classes compiled into `styles.css` exist: stick to the families above (the layout/spacing/type scales listed are guaranteed); arbitrary values like `w-[437px]` will not resolve — use `style={{…}}` for one-offs.

## Where the truth lives
Tokens are CSS variables in `_ds_bundle.css` (`:root` / `.dark`: `--background`, `--foreground`, `--primary`, `--muted`, `--border`, `--ring`, `--radius`, `--chart-1…5`, …). Per-component API: `components/general/<Name>/<Name>.d.ts`; usage examples: `<Name>.prompt.md`.

## Example
```jsx
const { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Field, FieldGroup, FieldLabel, Input } = window.SosekSystem;

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
      <Button className="w-full">Continue</Button>
    </CardFooter>
  </Card>
</div>
```
