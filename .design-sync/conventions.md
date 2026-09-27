# Sosek System — how to build with it

Sosek System is a shadcn/ui (radix-nova style) component set, restyled via CSS variables and Tailwind v4 utility classes. Components are exposed on `window.SosekSystem`. **No provider or wrapper is needed** — load `styles.css` and use components directly. Font: Geist Variable (`font-sans`, applied to `html` by default).

## Compose with sub-parts (flat exports, not dotted)
Compound components are built from sibling exports that ship in the same bundle:
- **Card**: `Card` (`size="default" | "sm"`) › `CardHeader` › `CardTitle`, `CardDescription`, `CardAction`; then `CardContent`, `CardFooter`.
- **Field** (form layout): `FieldSet` › `FieldLegend`, `FieldDescription`, `FieldGroup` › `Field` (`orientation="vertical" | "horizontal" | "responsive"`) › `FieldLabel`, control, `FieldDescription` / `FieldError`. Use `FieldContent` to stack label + description beside a Switch/Checkbox; `FieldSeparator` between groups. Mark errors with `data-invalid="true"` on `Field` and `aria-invalid="true"` on the control.
- **Select**: `Select` › `SelectTrigger` (`size="default" | "sm"`, set a width like `w-56`) › `SelectValue placeholder="…"`; `SelectContent` › `SelectGroup` › `SelectLabel`, `SelectItem value="…"`, `SelectSeparator`.
- **RadioGroup** › `RadioGroupItem value="…" id="…"` paired with `Label htmlFor`.

Variant props: `Button variant="default | secondary | outline | ghost | destructive | link"`, `size="xs | sm | default | lg | icon | icon-xs | icon-sm | icon-lg"`, `asChild`; `Badge variant="default | secondary | outline | destructive | ghost | link"`; `Switch size="sm | default"`; `Separator orientation="horizontal | vertical"`.

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
