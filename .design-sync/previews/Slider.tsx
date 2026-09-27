import { Label, Slider } from "sosek-system"

export const Default = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <div className="flex items-center justify-between">
      <Label>Volume</Label>
      <span className="text-sm text-muted-foreground">65%</span>
    </div>
    <Slider defaultValue={[65]} max={100} step={1} />
  </div>
)

export const Range = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <div className="flex items-center justify-between">
      <Label>Price range</Label>
      <span className="text-sm text-muted-foreground">$200 – $800</span>
    </div>
    <Slider defaultValue={[200, 800]} max={1000} step={50} />
  </div>
)
