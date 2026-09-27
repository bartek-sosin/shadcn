import { Label, Textarea } from "sosek-system"

export const Default = () => (
  <div className="flex w-full max-w-sm flex-col gap-2">
    <Label htmlFor="feedback">Feedback</Label>
    <Textarea id="feedback" placeholder="Tell us what you think about the new dashboard…" />
  </div>
)

export const States = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <Textarea defaultValue="The export button is hard to find on mobile." />
    <Textarea placeholder="Comments are closed" disabled />
    <Textarea defaultValue="Too short" aria-invalid="true" />
  </div>
)
