import { Checkbox, Input, Label } from "sosek-system"

export const WithInput = () => (
  <div className="flex w-full max-w-sm flex-col gap-2">
    <Label htmlFor="workspace">Workspace URL</Label>
    <Input id="workspace" placeholder="sosek.app/your-team" />
  </div>
)

export const WithCheckbox = () => (
  <div className="flex items-center gap-2">
    <Checkbox id="remember" defaultChecked />
    <Label htmlFor="remember">Remember me for 30 days</Label>
  </div>
)
