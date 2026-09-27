import { Input, Label } from "sosek-system"

export const Default = () => (
  <div className="flex w-full max-w-sm flex-col gap-2">
    <Label htmlFor="company">Company name</Label>
    <Input id="company" placeholder="Acme Inc." />
  </div>
)

export const States = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <Input defaultValue="hello@sosek.dev" />
    <Input placeholder="Disabled input" disabled />
    <Input defaultValue="not-an-email" aria-invalid="true" />
  </div>
)

export const Types = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <Input type="password" defaultValue="supersecret" />
    <Input type="number" defaultValue={42} />
    <Input type="search" placeholder="Search projects…" />
  </div>
)
