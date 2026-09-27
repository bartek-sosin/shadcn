import { Checkbox, Label } from "sosek-system"

export const States = () => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <Checkbox id="c1" />
      <Label htmlFor="c1">Email me about new comments</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="c2" defaultChecked />
      <Label htmlFor="c2">Weekly summary</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="c3" disabled />
      <Label htmlFor="c3">SMS alerts (unavailable)</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="c4" aria-invalid="true" />
      <Label htmlFor="c4">I agree to the terms</Label>
    </div>
  </div>
)
