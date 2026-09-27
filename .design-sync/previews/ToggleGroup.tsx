import { ToggleGroup, ToggleGroupItem } from "sosek-system"

export const Alignment = () => (
  <ToggleGroup type="single" defaultValue="center" variant="outline">
    <ToggleGroupItem value="left">Left</ToggleGroupItem>
    <ToggleGroupItem value="center">Center</ToggleGroupItem>
    <ToggleGroupItem value="right">Right</ToggleGroupItem>
  </ToggleGroup>
)

export const Formatting = () => (
  <ToggleGroup type="multiple" defaultValue={["bold", "underline"]} spacing={1}>
    <ToggleGroupItem value="bold" aria-label="Bold">
      <span className="font-bold">B</span>
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Italic">
      <span className="italic">I</span>
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Underline">
      <span className="underline">U</span>
    </ToggleGroupItem>
  </ToggleGroup>
)
