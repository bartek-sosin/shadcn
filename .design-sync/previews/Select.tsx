import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "sosek-system"

export const Default = () => (
  <div className="flex flex-col gap-2">
    <Label>Timezone</Label>
    <Select defaultValue="europe-warsaw">
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="europe-warsaw">Warsaw (CET)</SelectItem>
          <SelectItem value="europe-london">London (GMT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
)

export const Placeholder = () => (
  <div className="flex items-center gap-3">
    <Select>
      <SelectTrigger className="w-44">
        <SelectValue placeholder="Choose a role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="editor">Editor</SelectItem>
        <SelectItem value="viewer">Viewer</SelectItem>
      </SelectContent>
    </Select>
    <Select>
      <SelectTrigger size="sm" className="w-32">
        <SelectValue placeholder="Small" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Option A</SelectItem>
      </SelectContent>
    </Select>
  </div>
)
