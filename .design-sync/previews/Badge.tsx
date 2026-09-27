import { Badge } from "sosek-system"

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge>New</Badge>
    <Badge variant="secondary">Draft</Badge>
    <Badge variant="outline">v2.4.0</Badge>
    <Badge variant="destructive">Overdue</Badge>
    <Badge variant="ghost">Archived</Badge>
  </div>
)

export const InContext = () => (
  <div className="flex flex-col gap-3 text-sm">
    <div className="flex items-center gap-2">
      <span className="font-medium">Payment API</span>
      <Badge variant="secondary">Beta</Badge>
    </div>
    <div className="flex items-center gap-2">
      <span className="font-medium">Invoice #1043</span>
      <Badge variant="destructive">Failed</Badge>
    </div>
  </div>
)
