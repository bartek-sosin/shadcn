import { Button, ButtonGroup, ButtonGroupSeparator, ButtonGroupText, Input } from "sosek-system"

export const Actions = () => (
  <div className="flex flex-col items-start gap-4">
    <ButtonGroup>
      <Button variant="outline">Archive</Button>
      <Button variant="outline">Report</Button>
      <Button variant="outline">Snooze</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button>Publish</Button>
      <ButtonGroupSeparator />
      <Button>Schedule</Button>
    </ButtonGroup>
  </div>
)

export const WithInput = () => (
  <ButtonGroup>
    <ButtonGroupText>https://</ButtonGroupText>
    <Input placeholder="sosek.app" />
    <Button variant="outline">Copy</Button>
  </ButtonGroup>
)

export const Vertical = () => (
  <ButtonGroup orientation="vertical">
    <Button variant="outline">Zoom in</Button>
    <Button variant="outline">Zoom out</Button>
    <Button variant="outline">Reset</Button>
  </ButtonGroup>
)
