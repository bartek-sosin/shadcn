import { Icons, InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from "sosek-system"

export const Addons = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="sosek.app" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupAddon>
        <Icons.Search />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search invoices…" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>Search</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput defaultValue="1,250.00" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
)

export const WithTextarea = () => (
  <InputGroup className="w-full max-w-sm">
    <InputGroupTextarea placeholder="Ask anything about your workspace…" />
    <InputGroupAddon align="block-end">
      <InputGroupText>0 / 280</InputGroupText>
      <InputGroupButton variant="default" size="sm" className="ml-auto">
        Send
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
)
