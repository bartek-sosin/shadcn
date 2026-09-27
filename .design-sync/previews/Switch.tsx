import { Label, Switch } from "sosek-system"

export const States = () => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <Switch id="s1" defaultChecked />
      <Label htmlFor="s1">Dark mode</Label>
    </div>
    <div className="flex items-center gap-2">
      <Switch id="s2" />
      <Label htmlFor="s2">Auto-save drafts</Label>
    </div>
    <div className="flex items-center gap-2">
      <Switch id="s3" disabled />
      <Label htmlFor="s3">Beta features (disabled)</Label>
    </div>
  </div>
)

export const Sizes = () => (
  <div className="flex items-center gap-4">
    <Switch size="sm" defaultChecked />
    <Switch defaultChecked />
  </div>
)
