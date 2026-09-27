import {
  Button,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "sosek-system"

export const EditSettings = () => (
  <Sheet defaultOpen>
    <SheetTrigger asChild>
      <Button variant="outline">Open settings</Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Workspace settings</SheetTitle>
        <SheetDescription>Changes apply to everyone in the workspace.</SheetDescription>
      </SheetHeader>
      <FieldGroup className="px-4">
        <Field>
          <FieldLabel htmlFor="ws-name">Workspace name</FieldLabel>
          <Input id="ws-name" defaultValue="Sosek Studio" />
        </Field>
        <Field>
          <FieldLabel htmlFor="ws-url">URL</FieldLabel>
          <Input id="ws-url" defaultValue="sosek.app/studio" />
        </Field>
      </FieldGroup>
      <SheetFooter>
        <Button>Save changes</Button>
        <SheetClose asChild>
          <Button variant="outline">Cancel</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
)
