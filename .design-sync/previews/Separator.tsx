import { Separator } from "sosek-system"

export const Horizontal = () => (
  <div className="w-full max-w-sm text-sm">
    <div className="flex flex-col gap-1">
      <p className="font-medium">Sosek System</p>
      <p className="text-muted-foreground">Components built on shadcn/ui.</p>
    </div>
    <Separator className="my-4" />
    <p className="text-muted-foreground">Last updated September 2026.</p>
  </div>
)

export const Vertical = () => (
  <div className="flex h-5 items-center gap-4 text-sm">
    <span>Docs</span>
    <Separator orientation="vertical" />
    <span>Components</span>
    <Separator orientation="vertical" />
    <span>Changelog</span>
  </div>
)
