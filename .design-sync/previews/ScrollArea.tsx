import { ScrollArea, ScrollBar, Separator } from "sosek-system"

const releases = Array.from({ length: 20 }, (_, i) => `v2.${20 - i}.0`)

export const Vertical = () => (
  <ScrollArea className="h-56 w-48 rounded-md border">
    <div className="p-4">
      <p className="mb-4 text-sm font-medium">Releases</p>
      {releases.map((r) => (
        <div key={r}>
          <div className="text-sm">{r}</div>
          <Separator className="my-2" />
        </div>
      ))}
    </div>
  </ScrollArea>
)

export const Horizontal = () => (
  <ScrollArea className="w-full max-w-sm rounded-md border whitespace-nowrap">
    <div className="flex w-max gap-4 p-4">
      {["Design", "Engineering", "Marketing", "Sales", "Support", "Finance", "Legal"].map((t) => (
        <div key={t} className="flex h-20 w-32 items-center justify-center rounded-md bg-muted text-sm">
          {t}
        </div>
      ))}
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
)
